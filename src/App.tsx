import { Component, lazy } from 'solid-js';
import { useAuth } from './context/AuthContext';

const AppRoutes = lazy(() => import('./router'));

const App: Component = () => {
	const authState = useAuth()!;

	return (
		<>
			<div id='popups' />
			<AppRoutes />
		</>
	);
};

export default App;
