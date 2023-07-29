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
