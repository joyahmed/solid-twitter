import { Component, lazy } from 'solid-js';

const MainLayout = lazy(
	() => import('./components/layouts/MainLayout')
);
const Post = lazy(() => import('./components/Post'));
const Messenger = lazy(() => import('./components/Messenger'));

const App: Component = () => {
	return (
		<MainLayout>
			<div class='flex-it py-1 px-4 flex-row'>
				<div class='flex-it mr-4'>
					<div class='w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80'>
						<img
							class='rounded-full'
							src='/images/joy-avatar.webp'
						></img>
					</div>
				</div>
				<Messenger />
			</div>
			<div class='h-px bg-gray-700 my-1' />
			<Post />
		</MainLayout>
	);
};

export default App;
