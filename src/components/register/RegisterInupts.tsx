import { Accessor, Component, lazy } from 'solid-js';
import {
	comparePassword,
	emailValidate,
	firstUpperCaseLetter,
	minLengthValidator,
	passwordValidate,
	requiredValidator,
} from '../../hooks/useValidators';
const FormError = lazy(() => import('../utils/FormError'));

interface RegisterInputsProps {
	validate: (
		ref: HTMLInputElement,
		accessor: Accessor<Validator[]>
	) => void;
	onInput: (e: InputEventProp) => void;
	errors: FormErrors;
}

const RegisterInputs: Component<RegisterInputsProps> = ({
	validate,
	onInput,
	errors
}: RegisterInputsProps) => {
	const inputClass =
		'mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm';

	return (
		<>
			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'Full Name' }} />
				<input
					onInput={onInput}
					use:validate={[
						requiredValidator,
						minLengthValidator,
						firstUpperCaseLetter
					]}
					type='text'
					name='fullName'
					class={`inputClass`}
				/>
				<FormError>{errors['fullName']}</FormError>
			</div>

			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'User Name' }} />
				<input
					onInput={onInput}
					use:validate={[
						requiredValidator,
						ele => minLengthValidator(ele, 4)
					]}
					type='text'
					name='nickName'
					class={`${inputClass}`}
				/>
				<FormError>{errors['nickName']}</FormError>
			</div>

			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'Email' }} />
				<input
					onInput={onInput}
					use:validate={[requiredValidator, emailValidate]}
					type='text'
					name='email'
					class={`${inputClass}`}
				/>
				<FormError>{errors['email']}</FormError>
			</div>

			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'Avatar' }} />
				<input
					use:validate={[requiredValidator]}
					onInput={onInput}
					type='text'
					name='avatar'
					class={`${inputClass}`}
				/>
				<FormError>{errors['avatar']}</FormError>
			</div>

			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'Password' }} />
				<input
					use:validate={[requiredValidator, passwordValidate]}
					onInput={onInput}
					type='password'
					name='password'
					class={`${inputClass}`}
				/>
				<FormError>{errors['password']}</FormError>
			</div>

			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'Password Confirmation' }} />
				<input
					use:validate={[
						requiredValidator,
						element => comparePassword(element, 'password')
					]}
					onInput={onInput}
					type='password'
					name='passwordConfirmation'
					class={`${inputClass}`}
				/>
				<FormError>{errors['passwordConfirmation']}</FormError>
			</div>
		</>
	);
};

export default RegisterInputs;

interface LabelComponentProps {
	text: string;
}

const LabelComponent = ({ text }: LabelComponentProps) => (
	<label class='block text-sm font-medium text-white'>{text}</label>
);
