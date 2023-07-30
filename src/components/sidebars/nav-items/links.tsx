import { AiOutlineHome } from 'solid-icons/ai';
import { CgMoreO, CgProfile } from 'solid-icons/cg';
import { IoNotificationsCircleOutline } from 'solid-icons/io';
import { RiMapCompassDiscoverLine } from 'solid-icons/ri';

export const navItems = [
	{
		title: 'Home',
		href: '/',
		icon: () => <AiOutlineHome size={24} style={{ fill: 'white' }} />
	},
	{
		title: 'Profile',
		href: '/profile',
		icon: () => <CgProfile size={25} />
	},
	{
		title: 'More',
		href: '/more',
		icon: () => <CgMoreO size={24} />
	},
	{
		title: 'Notification',
		href: '/notification',
		icon: () => (
			<IoNotificationsCircleOutline
				size={29}
				style={{ fill: 'white' }}
				class='-ml-[3px]'
			/>
		)
	},
	{
		title: 'Discover',
		href: '/discover',
		icon: () => <RiMapCompassDiscoverLine size={27} class='-ml-0.5' />
	}
];
