import {
	Component,
	Show,
	createEffect,
	createSignal,
	onCleanup,
	onMount
} from 'solid-js';
import { Portal } from 'solid-js/web';
import usePageSize from '../../hooks/usePageSize';

interface PopupProps {
	opener: Component;
}

const Popup: Component<PopupProps> = ({ opener: Opener }) => {
	const [isOpen, setIsOpen] = createSignal(false);

	let followTo: HTMLDivElement;
	let popup: HTMLDivElement;

	onMount(() => {
		window.addEventListener('click', closePopup);
		window.addEventListener('keydown', handleKeyDown);
	});

	onCleanup(() => {
		window.removeEventListener('click', closePopup);
		window.addEventListener('keydown', handleKeyDown);
	});

	createEffect(
		() => isOpen() && usePageSize.value() && adjustPopup()
	);

	const adjustPopup = () => {
		if (!popup) return;
		const position = followTo.getBoundingClientRect();
		popup.style.left = `${position.left}px`;
		popup.style.bottom = `${followTo.clientHeight}px`;
	};

	const closePopup = (e: MouseEvent) => {
		if (isOpen() && !isPopupClicked(e)) setIsOpen(false);
	};

	const isPopupClicked = (e: MouseEvent) => {
		return popup?.contains(e.target as Node);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};

	return (
		<div class='flex-it flex-grow' ref={followTo!}>
			<div onClick={e => (e.stopPropagation(), setIsOpen(!isOpen()))}>
				<Opener />
			</div>

			<Show when={isOpen()}>
				<Portal mount={document.getElementById('popups') as Node}>
					<div
						ref={popup!}
						class='flex-it hover:cursor-pointer fixed bg-gray-800 text-white popup z-10 rounded-2xl border-gray-700 border transition duration-1000'
					>
						<div class='min-w-[15.5rem] max-h-120 min-h-8 flex-it overflow-auto'>
							<div class='flex-it flex-grow flex-shrink py-3'>
								<div class='flex-it px-4 py-3 transition hover:bg-gray-700'>
									Logout
								</div>
							</div>
						</div>
					</div>
				</Portal>
			</Show>
		</div>
	);
};

export default Popup;
