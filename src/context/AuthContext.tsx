import {
	ParentComponent,
	Show,
	createContext,
	onMount,
	useContext
} from 'solid-js';
import { createStore } from 'solid-js/store';
import Loader from '../utils/Loader';

interface AuthContextValues {
	isLoading: boolean;
	isAuthenticated: boolean;
}

const initialState: AuthContextValues = {
	isAuthenticated: false,
	isLoading: true
};

const AuthContext = createContext<AuthContextValues>();

const AuthProvider: ParentComponent = props => {
	const [store, setStore] = createStore(initialState);

	onMount(async () => {
		try {
			await authenticateUser();
			setStore('isAuthenticated', false);
		} catch (error: any) {
			console.log(error);
			setStore('isAuthenticated', false);
		} finally {
			setStore('isLoading', false);
		}
	});

	const authenticateUser = async () => {
		return new Promise((resolve, reject) => {
			resolve(true);
			//setStore('isAuthenticated', false);
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
