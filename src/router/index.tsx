import { Route, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
const HomeScreen = lazy(() => import('../screens/HomeScreen'));
const LoginScreen = lazy(() => import('../screens/LoginScreen'));
const RegisterScreen = lazy(
	() => import('../screens/RegisterScreen')
);

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' component={MainLayout}>
				<Route path='' component={HomeScreen} />
			</Route>
			<Route path='/auth' component={AuthLayout}>
				<Route path='/login' component={LoginScreen} />
				<Route path='/register' component={RegisterScreen} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
