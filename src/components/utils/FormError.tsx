import { For, ParentComponent, Show } from 'solid-js';

const FormError: ParentComponent = props => {
	const errors = () => (props.children as string[]) || [];
	return (
		<Show when={errors().length > 0}>
			<div class='flex-it grow text-xs bg-red-500/90 backdrop-blur-sm text-white p-3 pl-3 mt-1 rounded-md'>
				<For each={errors()}>
					{error => <div class='whitespace-pre-line'>{error}</div>}
				</For>
			</div>
		</Show>
	);
};

export default FormError;
