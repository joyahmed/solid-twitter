import { Outlet, useNavigate } from '@solidjs/router';
import { Component, onMount } from 'solid-js';
import { useAuth } from '../../context/AuthContext';

const AuthLayout: Component = () => {
	const navigate = useNavigate();
	const authState = useAuth()!;

	onMount(() => {
		if (authState.isAuthenticated) {
			navigate('/', { replace: true });
		}
	});



	return <Outlet />;
};

export default AuthLayout;
