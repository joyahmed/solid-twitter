import { useLocation, useNavigate } from '@solidjs/router';
import { onAuthStateChanged } from 'firebase/auth';
import {
	ParentComponent,
	Show,
	createContext,
	onMount,
	useContext
} from 'solid-js';
import { createStore } from 'solid-js/store';
import { User } from '../../types/User';
import { getUser } from '../api/auth';
import { firebaseAuth } from '../db';
import Loader from '../utils/Loader';

interface AuthContextValues {
	isLoading: boolean;
	isAuthenticated: boolean;
	user: User | null;
}

const initialState = () => ({
	isAuthenticated: false,
	isLoading: true,
	user: null
});

const AuthContext = createContext<AuthContextValues>();

const AuthProvider: ParentComponent = props => {
	const [store, setStore] = createStore<AuthContextValues>(
		initialState()
	);
	const location = useLocation();
	const navigate = useNavigate();

	onMount(() => {
		setStore({ isLoading: true });
		listenToAuthChanges();
	});

	const listenToAuthChanges = () => {
		onAuthStateChanged(firebaseAuth, async user => {
			if (!!user) {
				const twitterUser = await getUser(user.uid);
				setStore({
					isAuthenticated: true,
					user: twitterUser
				});
				location.pathname.includes('/auth') &&
					navigate('/', { replace: true });
			} else {
				setStore({
					isAuthenticated: false,
					user: null
				});
			}
			setStore({
				isLoading: false
			});
		});
	};

	return (
		<AuthContext.Provider value={store}>
			<Show when={store.isLoading} fallback={props.children}>
				<Loader size={100} />
			</Show>
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
