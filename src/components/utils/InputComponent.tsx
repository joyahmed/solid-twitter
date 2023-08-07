import { Accessor, lazy } from 'solid-js';
const FormError = lazy(() => import('./FormError'));

interface InputComponentProps {
	validate: (
		ref: HTMLInputElement,
		accessor: Accessor<Validator[]>
	) => void;
	onInput: (e: InputEventProp) => void;
	validators:  Validator[];
	labelText: string;
	type: string;
	name: string;
	errors: string[]
}

const InputComponent = ({
	validate,
	onInput,
	validators,
	labelText,
	type,
	name,
	errors
}: InputComponentProps) => {
	return (
		<div class='flex-it py-2'>
			<label class='block text-sm font-medium text-white'>
				{labelText}
			</label>
			<input
				use:validate={validators}
				onInput={onInput}
				type={type}
				name={name}
				id={name}
				class='mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
			/>
			<FormError>{errors}</FormError>
		</div>
	);
};

export default InputComponent;
