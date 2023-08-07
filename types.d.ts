interface User {
	userName: string;
	avatar: string;
}

interface Tweet {
	id: string;
	content: string;
	user: User;
	likesCount: number;
	subTweetsCount: number;
	date: Date;
}

interface InputEventProp {
	currentTarget: HTMLInputElement;
	target: Element;
}

interface Form {
	[key: string]: string;
}

interface FormErrors {
	[key: string]: string[];
}

interface AuthForm extends Form {
	email: string;
	password: string;
}

interface RegisterForm extends AuthForm {
	fullName: string;
	userName: string;
	avatar: string;
	passwordConfirmation: string;
}

interface SubmitCallback<T extends Form> {
	(f: T): any;
}

// interface Validator {
// 	(element: HTMLInputElement, ...rest: any[]): string;
// }

type Validator = (
	element: HTMLInputElement,
	...rest: any[]
) => (form: Form) => string | null;

interface ValidatorConfig {
	element: HTMLInputElement;
	validators: Validator[];
}
