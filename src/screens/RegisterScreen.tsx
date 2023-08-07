import { A } from '@solidjs/router';
import { Component, lazy, onMount } from 'solid-js';
import useForm from '../hooks/useForm';
import useRegister from '../hooks/useRegistrater';
// import { getUsers } from '../db';
const RegisterInputs = lazy(
	() => import('../components/register/RegisterInupts')
);

const RegisterScreen: Component = () => {
	const { register } = useRegister();
	const { handleChangeInput, handleSubmitForm, validate, errors } =
		useForm<RegisterForm>({
			fullName: '',
			userName: '',
			email: '',
			avatar: '',
			password: '',
			passwordConfirmation: ''
		});

	onMount(async () => {
		// const users = await getUsers()

		// console.log(`users => =>`, users);
	})

	const onFormSubmit = (form: RegisterForm) => {
		register(form)
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
							<div class='flex-it py-2'>
								<button
									onClick={handleSubmitForm(onFormSubmit)}
									type='button'
									class='
	                  bg-blue-400 hover:bg-blue-500 focus:ring-0
	                  disabled:cursor-not-allowed disabled:bg-gray-400
	                  inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2'
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
