import { AiOutlineHome } from 'solid-icons/ai';
import { CgMoreO, CgProfile } from 'solid-icons/cg';
import { FiMoreHorizontal } from 'solid-icons/fi';
import { IoNotificationsCircleOutline } from 'solid-icons/io';
import { RiMapCompassDiscoverLine } from 'solid-icons/ri';
import { Component, For } from 'solid-js';


const NavItems: Component = () => {

  const navItems = [
    {
      title: 'Home',
      href: '#',
      icon: <AiOutlineHome size={24} style={{ fill: 'white' }} />
    },
    {
      title: 'Profile',
      href: '#',
      icon: <CgProfile size={25} />
    },
    {
      title: 'More',
      href: '#',
      icon: <CgMoreO size={24} />
    },
    {
      title: 'Notification',
      href: '#',
      icon: (
        <IoNotificationsCircleOutline
          size={29}
          style={{ fill: 'white' }}
          class='-ml-[3px]'
        />
      )
    },
    {
      title: 'Discover',
      href: '#',
      icon: <RiMapCompassDiscoverLine size={27} class='-ml-0.5' />
    }
  ];

	return (
		<div class='my-1 w-full flex-it'>
			<nav class='flex-it items-start'>
				<For each={navItems}>
					{item => (
						<a
							class='flex-it items-start flex-grow w-full'
							href={item.href}
						>
							<div class='p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200'>
								<div class='flex-it'>{item.icon}</div>
								<div class='mx-4 text-2xl truncate xl:block hidden'>
									<span class='truncate'>{item.title}</span>
								</div>
							</div>
						</a>
					)}
				</For>
			</nav>
		</div>
	);
};

export default NavItems;
