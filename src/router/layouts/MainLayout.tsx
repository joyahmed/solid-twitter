import { Outlet, useNavigate } from '@solidjs/router';
import { Component, onMount } from 'solid-js';
import { useAuth } from '../../context/AuthContext';

const MainLayout: Component = () => {
	const authState = useAuth()!;
	const navigate = useNavigate();

	onMount(() => {
		if (!authState.isAuthenticated) {
			navigate('/auth/login', { replace: true });
		}
	});

	if (!authState.isAuthenticated) return null;

	return <Outlet />;
};

export default MainLayout;
