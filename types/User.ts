import { DocumentReference } from 'firebase/firestore';

export interface User {
	uid: string;
	fullName: string;
	userName: string;
	email: string;
	avatar: string | null;
	followers: DocumentReference[];
	followings: DocumentReference[];
	followersCount: number;
	followingCount: number;
}
