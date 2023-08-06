import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import App from './App';
import AuthProvider from './context/AuthContext';
import './index.css';

render(
	() => (
		<Router>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Router>
	),
	document.getElementById('root')!
);
