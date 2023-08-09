import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { User } from '../../types/User';
import { db, firebaseAuth } from '../db';

const register = async (form: RegisterForm) => {
	const { user: registeredUser } =
		await createUserWithEmailAndPassword(
			firebaseAuth,
			form.email,
			form.password
		);

	const user: User = {
		uid: registeredUser.uid,
		fullName: form.fullName,
		userName: form.userName,
		email: form.email,
		avatar: null,
		followers: [],
		followings: [],
		followersCount: 0,
		followingCount: 0
	};

	await setDoc(doc(db, 'users', registeredUser.uid), user);

	return registeredUser;
};

const login = async (loginForm: AuthForm) => {
	const { user } = await signInWithEmailAndPassword(
		firebaseAuth,
		loginForm.email,
		loginForm.password
	);

	return user;
};

const logout = () => {
	return signOut(firebaseAuth);
};

export { login, logout, register };
