import { FirebaseError } from 'firebase/app';
import { createSignal } from 'solid-js';
import { authenticate } from '../api/auth';

const useAuthenticate = (authType: AuthType) => {
	const [isLoading, setIsLoading] = createSignal(false);
	const authenticateuser = async (form: AuthForm) => {
		setIsLoading(true);
		try {
			await authenticate(form, authType);
		} catch (error) {
			const message = (error as FirebaseError).message;
			console.log(message);
		} finally {
			setIsLoading(false);
		}
		// const firebaseUser = await authenticate(form, authType);
		// return firebaseUser;
	};

	return {
		authenticateuser,
		isLoading
	};
};

export default useAuthenticate;
