interface User {
	nickName: string;
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

interface InputEventProp extends InputEvent {
	currentTarget: HTMLInputElement;
	target: Element;
}

interface RegisterForm {
	firstName: string;
	lastName: string;
	email: string;
	avatar: string;
	password: string;
	passwordConfirmation: string;
}
