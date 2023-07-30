import { Component, lazy } from 'solid-js';

const AppRoutes = lazy(() => import('./router'));

const App: Component = () => {
	return (
		<>
			<div id='popups' />
			<AppRoutes />
		</>
	);
};

export default App;
