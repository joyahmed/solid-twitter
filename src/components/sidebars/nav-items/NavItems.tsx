import { Component, For } from 'solid-js';
import { navItems } from './links';

const NavItems: Component = () => {

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
