import { Accessor, Component, lazy } from 'solid-js';
import usePasswordVisibilityToggle from '../../hooks/usePasswordVisibilityToggle';
import {
	comparePassword,
	emailValidate,
	firstUpperCaseLetter,
	minLengthValidator,
	passwordValidate,
	requiredValidator
} from '../../hooks/useValidators';
import TogglePassword from '../../utils/TogglePassword';
import LabelComponent from './LabelComponent';
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
	const { show, togglePassText } = usePasswordVisibilityToggle();
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
					class={`${inputClass}`}
				/>
				<FormError>{errors['fullName']}</FormError>
			</div>

			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'User Name' }} />
				<input
					onInput={onInput}
					use:validate={[
						requiredValidator,
						ele => minLengthValidator(ele, 3)
					]}
					type='text'
					name='userName'
					class={`${inputClass}`}
				/>
				<FormError>{errors['userName']}</FormError>
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
				<LabelComponent {...{ text: 'Password' }} />
				<div class='relative'>
					<input
						use:validate={[requiredValidator, passwordValidate]}
						onInput={onInput}
						type={`${show.showPassword ? 'text' : 'password'}`}
						name='password'
						class={`${inputClass}`}
					/>
					<TogglePassword
						{...{
							variant: () => show.showPassword,
							onClick: () => togglePassText('showPassword')
						}}
					/>
				</div>
				<FormError>{errors['password']}</FormError>
			</div>

			<div class='flex-it py-1'>
				<LabelComponent {...{ text: 'Password Confirmation' }} />
				<div class='relative'>
					<input
						use:validate={[
							requiredValidator,
							element => comparePassword(element, 'password')
						]}
						onInput={onInput}
						type={`${show.showConfirmPassword ? 'text' : 'password'}`}
						name='passwordConfirmation'
						class={`${inputClass}`}
					/>

					<TogglePassword
						{...{
							variant: () => show.showConfirmPassword,
							onClick: () => togglePassText('showConfirmPassword')
						}}
					/>
				</div>
				<FormError>{errors['passwordConfirmation']}</FormError>
			</div>
		</>
	);
};

export default RegisterInputs;


