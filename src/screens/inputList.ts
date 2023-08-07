import {
	comparePassword,
	firstUpperCaseLetter,
	minLengthValidator,
	requiredValidator
} from '../hooks/useValidators';

export const inputItems = (errors: FormErrors) => [
	{
		labelText: 'Full Name',
		validators: [
			requiredValidator,
			minLengthValidator,
			firstUpperCaseLetter
		],
		type: 'text',
		name: 'fullName',
		hasErrors: () => (errors['fullName']?.length > 0 ? true : false),

		errors: errors['fullName']
	},
	{
		labelText: 'User Name',
		validators: [
			requiredValidator,
			(element: HTMLInputElement) => minLengthValidator(element, 3)
		],
		type: 'text',
		name: 'userName',
		errors: errors['userName']
	},
	{
		labelText: 'Email',
		validators: [requiredValidator],
		type: 'email',
		name: 'email',
		errors: errors['email']
	},
	{
		labelText: 'Avatar',
		validators: [requiredValidator],
		type: 'text',
		name: 'avatar',
		errors: () => errors['avatar']
	},
	{
		labelText: 'Password',
		validators: [requiredValidator],
		type: 'password',
		name: 'password',
		errors: () => errors['password']
	},
	{
		labelText: 'Password Confirmation',
		validators: [
			requiredValidator,
			(element: HTMLInputElement) =>
				comparePassword(element, 'password')
		],
		type: 'password',
		name: 'passwordConfirmation',
		errors: () => errors['passwordConfirmation']
	}
];
