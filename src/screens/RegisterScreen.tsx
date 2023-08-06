import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import useForm from '../hooks/useForm';

const RegisterScreen: Component = () => {
	const { handleChangeInput, handleSubmitForm } = useForm<RegisterForm>({
		firstName: '',
		lastName: '',
		email: '',
		avatar: '',
		password: '',
		passwordConfirmation: ''
	});

	const onFormSubmit = (form: AuthForm) => {
		console.log(form)
	}

	return (
		<div class='flex flex-row justify-center items-center h-full'>
			<div
				class='hidden lg:flex w-[60%] h-full
      bg-[url("/images/twitter-auth-bg.webp")] bg-center bg-no-repeat'
			></div>
			<div class='flex flex-col items-center justify-between w-full lg:w-[40%]'>
				<div class='text-white text-2xl font-bold'>
					Twitter - Create Account
				</div>

				<div class='flex-it h-100 xs:w-100 w-full  px-10 rounded-2xl'>
					<div class='flex-it'>
						<form class='flex-it'>
							<div class='flex-it overflow-hidden sm:rounded-md'>
								<div class='flex-it'>
									<div class='flex-it'>
										<div class='flex-it py-2'>
											<label class='block text-sm font-medium text-white'>
												First Name
											</label>
											<input
												onInput={handleChangeInput}
												type='text'
												name='firstName'
												id='firstName'
												class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
											{/* <div class='flex-it grow text-xs bg-red-400 text-white p-3 pl-3 mt-1 rounded-md'>
												Error Error Beep Beep!
											</div> */}
										</div>

										<div class='flex-it py-2'>
											<label class='block text-sm font-medium text-white'>
												Last Name
											</label>
											<input
												onInput={handleChangeInput}
												type='text'
												name='lastName'
												id='lastName'
												class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div class='flex-it py-2'>
											<label class='block text-sm font-medium text-white'>
												Email
											</label>
											<input
												onInput={handleChangeInput}
												type='text'
												name='email'
												id='email'
												class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div class='flex-it py-2'>
											<label class='block text-sm font-medium text-white'>
												Avatar
											</label>
											<input
												onInput={handleChangeInput}
												type='text'
												name='avatar'
												id='avatar'
												class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div class='flex-it py-2'>
											<label class='block text-sm font-medium text-white'>
												Password
											</label>
											<input
												onInput={handleChangeInput}
												type='password'
												name='password'
												id='password'
												class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>

										<div class='flex-it py-2'>
											<label class='block text-sm font-medium text-white'>
												Password Confirmation
											</label>
											<input
												onInput={handleChangeInput}
												type='password'
												name='passwordConfirmation'
												id='passwordConfirmation'
												class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div>
									</div>
								</div>
								<div class='text-sm text-gray-600 pb-4'>
									Already Registered?{' '}
									<A class='hover:underline' href='/auth/login'>
										Go to Login
									</A>
								</div>
								<div class='flex-it py-2'>
									<button
										onClick={(handleSubmitForm(onFormSubmit))}
										type='button'
										class='
	                  bg-blue-400 hover:bg-blue-500 focus:ring-0
	                  disabled:cursor-not-allowed disabled:bg-gray-400
	                  inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2'
									>
										Register
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
