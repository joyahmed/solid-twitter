import { Component, For } from 'solid-js';
import { navItems } from './links';

const NavItems: Component = () => {
	return (
		<div class='my-1 w-full flex-it'>
			<nav class='flex-it items-start space-y-5'>
				<For each={navItems}>
					{item => (
						<a
							class='flex-it items-start flex-grow w-full'
							href={item.href}
						>
							<div class='p-3 flex-row justify-center items-center flex-it w-[83%] rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200'>
								<div class=''>{item.icon()}</div>
								<div class='mx-4 text-lg truncate xl:block hidden w-full'>
									<span class='truncate w-full'>{item.title}</span>
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
