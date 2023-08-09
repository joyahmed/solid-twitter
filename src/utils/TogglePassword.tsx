import { AiOutlineEye, AiOutlineEyeInvisible } from 'solid-icons/ai';
import { Show } from 'solid-js';

interface ToggleProps {
	variant: () => boolean;
	onClick: () => void;
}

const TogglePassword = ({ variant, onClick }: ToggleProps) => {
	return (
		<span
			class='h-auto w-auto absolute top-[55%] transform right-2 z-50 -translate-y-1/2'
			onClick={onClick}
		>
			<Show
				when={!!variant()}
				fallback={
					<AiOutlineEyeInvisible
						style={{ fill: '#fff' }}
					/>
				}
			>
				<AiOutlineEye style={{ fill: '#fff' }} />
			</Show>
		</span>
	);
};

export default TogglePassword;
