import { BsSendFill } from 'solid-icons/bs';
import { FiMoreHorizontal } from 'solid-icons/fi';
import { Component, lazy } from 'solid-js';
import Popup from '../utils/Popup';
const NavItems = lazy(() => import('./nav-items/NavItems'));

const MainSidebar: Component = () => {
	return (
		<header class='lg:flex-grow flex-it items-end'>
			<div class='xl:w-80 w-20 flex-it'>
				<div class='h-full fixed flex-it top-0'>
					<div class='flex-it h-full xl:w-80 w-20 overflow-hidden overflow-y-auto px-3 justify-between'>
						<div class='flex-it items-start'>
							<div class='hidden lg:flex p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:opacity-80'>
								<a href='#'>
									<h1>Twitter</h1>
								</a>
							</div>
							<NavItems />
							{/* Twitter SEND-MESSAGE BUTTON */}
							<div class='mt-5 flex-it w-10/12 cursor-pointer'>
								<div class='bg-blue-400 hover:bg-blue-500 text-white font-bold py-3.5 xl:py-3 xl:px-4 rounded-full flex-it transition'>
									<div class='flex-it flex-row text-xl font-bold text-white items-start justify-center truncate duration-200'>
										<div class='hidden xl:flex'>Tweet</div>
										<div class='flex xl:hidden'>
											<BsSendFill size={17} />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* PROFILE MENU */}
						<div class='flex-it  hover:cursor-pointer'>
							<Popup
								opener={() => (
									<div class='flex-it items-center justify-center w-full xl:w-[85%] flex-row my-3 p-3 rounded-full xl:rounded-3xl hover:bg-gray-800 hover:rounded-full transition duration-200 cursor-pointer'>
										<div class='flex-it'>
											<div class='w-10 h-10 overflow-visible'>
												<img
													class='rounded-full w-10 h-10 object-contain'
													src='/images/joy-avatar.webp'
												></img>
											</div>
										</div>
										<div class='flex-it xl:flex hidden flex-grow flex-row justify-between items-center'>
											<div class='flex-it mx-3 font-bold'>Joy007</div>
											<div class='flex-it'>
												<FiMoreHorizontal />
											</div>
										</div>
									</div>
								)}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainSidebar;
