import { createStore } from 'solid-js/store';

const useForm = <T extends Form>(initialForm: T) => {
	const [form, setForm] = createStore(initialForm);

	const handleChangeInput = (e: InputEventProp) => {
		const { name, value } = e.currentTarget;
		setForm(name as any, value as any);
	};

	const handleSubmitForm =
		(submitCallback: submitCallback<T>) => () => {
			submitCallback(form);
		};

	return {
		handleChangeInput,
		handleSubmitForm
	};
};

export default useForm;
