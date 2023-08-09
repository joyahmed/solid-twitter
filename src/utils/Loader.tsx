import { Component } from 'solid-js';

interface Props {
	size: number;
}

const Loader: Component<Props> = props => {
	return (
		<div class='relative flex-it text-white justify-center items-center h-full'>
			<div class='absolute mx-auto my-auto rounded-full h-[5rem] w-[5rem] animate-loader-border border-b-2'></div>
			<div class='text-sm animate-loader-text'>Loading</div>
		</div>
	);
};

export default Loader;
