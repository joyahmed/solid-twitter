interface SubmitButtonProps<T extends Form> {
	handleSubmitForm: (submitCallback: SubmitCallback<T>) => () => void;
	onFormSubmit: (form: T) => void;
	text: string;
	disabled: boolean;
}

const SubmitButton = <T extends Form>({
	handleSubmitForm,
	onFormSubmit,
	text,
	disabled
}: SubmitButtonProps<T>) => {
	return (
		<div class='flex-it py-2'>
			<button
				disabled={disabled}
				onClick={handleSubmitForm(onFormSubmit)}
				type='button'
				class='
      bg-blue-400 hover:bg-blue-500
      inline-flex focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-400 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-offset-2'
			>
				{text}
			</button>
		</div>
	);
};

export default SubmitButton;
