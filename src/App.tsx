import { Component, lazy } from 'solid-js';

const AppRoutes = lazy(() => import('./router'));

const App: Component = () => {
	return <AppRoutes />;
};

export default App;
