import {
	createRoot,
	createSignal,
	onCleanup,
	onMount
} from 'solid-js';

const getClientSize = () => ({
	width: document.body.clientWidth,
	height: document.body.clientHeight
});

const usePageSize = () => {
	const [value, setValue] = createSignal(getClientSize());
	onMount(() => window.addEventListener('resize', handleResize));

	onCleanup(() => window.removeEventListener('resize', handleResize));

	const handleResize = () => {
		setValue(getClientSize());
		console.log(`value => =>`, value());
	};

	const isXl = () => value().width > 1280;
	const isLg = () => value().width > 1024;

	return { isXl, isLg, value };
};

export default createRoot(usePageSize);
