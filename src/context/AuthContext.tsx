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
	const [store, setStore] = createStore(initialState());

	onMount(() => {
		setStore('isLoading', true);
		listenToAuthChanges();
	});

	// const listenToAuthChanges = () => {
	// 	onAuthStateChanged(firebaseAuth, user => {

	// 		!!user
	// 			? (setStore('isAuthenticated', true),
	// 			  setStore('user', user as any))
	// 			: (setStore('isAuthenticated', false),
	// 			  setStore('user', null));
	// 	});

	// 	setStore('isLoading', false);
	// };

	const listenToAuthChanges = () => {
		onAuthStateChanged(firebaseAuth, user => {
			setStore({
				isAuthenticated: !!user,
				user: user as any,
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
