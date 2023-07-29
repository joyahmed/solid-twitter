import { Route, Routes } from '@solidjs/router';

import { lazy } from 'solid-js';

const HomeScreen = lazy(() => import('../screens/HomeScreen'));
const LoginScreen = lazy(() => import('../screens/LoginScreen'));
const RegisterScreen = lazy(
	() => import('../screens/RegisterScreen')
);

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' component={HomeScreen} />
			<Route path='/login' component={LoginScreen} />
			<Route path='/register' component={RegisterScreen} />
		</Routes>
	);
};

export default AppRoutes;
