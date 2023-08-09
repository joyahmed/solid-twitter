import { login } from '../api/auth';

const useLogin = () => {
	const loginUser = (loginForm: AuthForm) => {
		login(loginForm);
	};

	return { loginUser };
};

export default useLogin;
