type User = {
	nickName: string;
	avatar: string;
};

type Tweet = {
	id: string;
	content: string;
	user: User;
	likesCount: number;
	subTweetsCount: number;
	date: Date;
};

type InputEventProp = {
	currentTarget: HTMLInputElement;
	target: Element;
} & InputEvent;

type Form = { [key: string]: string };

type AuthForm = {
	email: string;
	password: string;
} & Form;

type RegisterForm = {
	firstName: string;
	lastName: string;
	avatar: string;
	passwordConfirmation: string;
} & AuthForm;

type submitCallback<T extends Form> = (f: T) => any;
