import { A } from '@solidjs/router';
import { Component, lazy } from 'solid-js';
import useAuthenticate from '../hooks/useAuthenticate';
import useForm from '../hooks/useForm';
import usePasswordVisibilityToggle from '../hooks/usePasswordVisibilityToggle';
import {
	emailValidate,
	passwordValidate,
	requiredValidator
} from '../hooks/useValidators';
const SubmitButton = lazy(
	() => import('../components/auth/SubmitButton')
);
const LabelComponent = lazy(
	() => import('../components/auth/LabelComponent')
);
const FormError = lazy(() => import('../components/utils/FormError'));
const TogglePassword = lazy(() => import('../utils/TogglePassword'));

const LoginScreen: Component = () => {
	const { authenticateuser, isLoading } = useAuthenticate('login');
	const { handleChangeInput, handleSubmitForm, validate, errors } =
		useForm<AuthForm>({
			email: '',
			password: ''
		});
	const { show, togglePassText } = usePasswordVisibilityToggle();

	const onFormSubmit = (form: AuthForm) => {
		authenticateuser(form);
	};

	const inputClass =
		'mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-transparent text-white';

	return (
		<div class='flex flex-row justify-center items-center h-full'>
			<div
				class='hidden lg:flex w-[60%] h-full
      bg-[url("/images/twitter-auth-bg.webp")] bg-center bg-no-repeat'
			></div>
			<div class='flex flex-col items-center justify-between w-full lg:w-[40%]'>
				<div class='text-white text-4xl font-bold'>
					Twitter - Get In
				</div>
				<div class='flex-it h-100 xs:w-100 w-full p-10 rounded-2xl'>
					<form class='flex-it'>
						<div class='flex-it py-2'>
							<LabelComponent {...{ text: 'Email' }} />
							<input
								onInput={handleChangeInput}
								use:validate={[requiredValidator, emailValidate]}
								type='text'
								name='email'
								class={`${inputClass}`}
							/>
							<FormError>{errors['email']}</FormError>
						</div>
						<div class='flex-it py-2'>
							<LabelComponent {...{ text: 'Password' }} />
							<div class='relative'>
								<input
									use:validate={[requiredValidator, passwordValidate]}
									onInput={handleChangeInput}
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

						<div class='text-sm text-gray-600 pb-4'>
							No Account Yet?{' '}
							<A class='hover:underline' href='/auth/register'>
								Create a new account
							</A>
						</div>
						<SubmitButton
							{...{
								disabled: isLoading(),
								handleSubmitForm,
								onFormSubmit,
								text: 'Login'
							}}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
