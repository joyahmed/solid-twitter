import { Accessor } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			validate: Validator[];
		}
	}
}

const useForm = <T extends Form>(initialForm: T) => {
	const [form, setForm] = createStore(initialForm);
	const [errors, setErrors] = createStore<FormErrors>();

	const validatorFields: { [key: string]: ValidatorConfig } = {};

	const isValid = () => {
		const keys = Object.keys(errors);
		if (keys.length === 0) {
			return false;
		}
		return !keys.some(errorKey => {
			return errors[errorKey].length > 0;
		});
	};

	const handleChangeInput = (e: InputEventProp) => {
		const { name, value } = e.currentTarget;
		setForm(name as any, value as any);
	};

	const handleSubmitForm =
		(submitCallback: SubmitCallback<T>) => () => {
			for (const field in validatorFields) {
				const config = validatorFields[field];
				checkValidity(config)();
			}
			isValid() && submitCallback(form);
		};

	const validate = (
		ref: HTMLInputElement,
		accessor: Accessor<Validator[]>
	) => {
		const validators = accessor() || [];
		let config: ValidatorConfig;
		validatorFields[ref.name] = config = { element: ref, validators };

		ref.onblur = checkValidity(config);
		ref.oninput = () => {
			if (!errors[ref.name]) return;
			checkValidity(config);
		};
	};

	const checkValidity =
		({ element, validators }: ValidatorConfig) =>
		() => {
			setErrors(element.name, []);

			for (const validator of validators) {
				const message = validator(element)(form);

				if (!!message) {
					setErrors(
						produce(errors => {
							errors[element.name].push(message);
						})
					);
				}
			}
		};

	return {
		handleChangeInput,
		handleSubmitForm,
		validate,
		errors,
		form
	};
};

export default useForm;
