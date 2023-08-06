import { Accessor } from 'solid-js';
import { createStore } from 'solid-js/store';

declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			validate: Validator[];
		}
	}
}

export const maxLengthValidator = <Validator>(
	element: HTMLInputElement,
	maxLength = 7
) => {
	const inputLength = element.value.length;

	if (inputLength === 0 || inputLength < maxLength) return '';

	return `${element.name} should be less than ${maxLength} characters`;
};

export const firstUpperCaseLetter = (element: HTMLInputElement) => {
	const { value } = element;
	if (value.length === 0) return '';

	return value[0] !== value[0].toLocaleUpperCase()
		? `${element.name} first letter should be uppercased`
		: '';
};

const useForm = <T extends Form>(initialForm: T) => {
	const [form, setForm] = createStore(initialForm);
	const [errors, setErrors] = createStore<Form>();

	const handleChangeInput = (e: InputEventProp) => {
		const { name, value } = e.currentTarget;
		setForm(name as any, value as any);
	};

	const handleSubmitForm = (callback: SubmitCallback<T>) => () => {
		callback(form);
	};

	const validate = (
		ref: HTMLInputElement,
		accessor: Accessor<Validator[]>
	) => {
		const validators = accessor() || [];
		ref.onblur = checkValidity(ref, validators);
	};

	const checkValidity =
		(element: HTMLInputElement, validators: Validator[]) => () => {
			for (const validator of validators) {
				const message = validator(element);
				!!message
					? setErrors(element.name, message)
					: setErrors(element.name, '');
			}

			console.log(JSON.stringify(errors));
		};

	return {
		handleChangeInput,
		handleSubmitForm,
		validate
	};
};

export default useForm;
