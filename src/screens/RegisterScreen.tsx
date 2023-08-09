import { A } from '@solidjs/router';
import { Component, lazy } from 'solid-js';
import useAuthenticate from '../hooks/useAuthenticate';
import useForm from '../hooks/useForm';
const SubmitButton = lazy(
	() => import('../components/auth/SubmitButton')
);
const RegisterInputs = lazy(
	() => import('../components/auth/RegisterInupts')
);

const RegisterScreen: Component = () => {
	const { authenticateuser, isLoading } = useAuthenticate('register');
	const { handleChangeInput, handleSubmitForm, validate, errors } =
		useForm<RegisterForm>({
			fullName: '',
			userName: '',
			email: '',
			avatar: '',
			password: '',
			passwordConfirmation: ''
		});

	const onFormSubmit = (form: RegisterForm) => {
		authenticateuser(form);
	};

	return (
		<div class='flex flex-row justify-center items-center h-[100vh] overflow-hidden'>
			<div
				class='hidden lg:flex w-[60%] h-full
      bg-[url("/images/twitter-auth-bg.webp")] bg-black/20 bg-blend-multiply bg-center bg-no-repeat'
			></div>
			<div class='flex flex-col items-center justify-between w-full lg:w-[40%]'>
				<div class='text-white text-2xl font-bold'>
					Twitter - Create Account
				</div>

				<div class='flex-it xs:w-100 w-full px-10 rounded-2xl max-h-[calc(100vh_-_5rem)] overflow-y-auto'>
					<div class='flex-it'>
						<form class='flex-it'>
							<RegisterInputs
								{...{
									validate,
									onInput: handleChangeInput,
									errors
								}}
							/>

							<div class='text-sm text-gray-600 pb-4'>
								Already Registered?{' '}
								<A class='hover:underline' href='/auth/login'>
									Go to Login
								</A>
							</div>
							<SubmitButton
								{...{
									disabled: isLoading(),
									handleSubmitForm,
									onFormSubmit,
									text: 'Register'
								}}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
