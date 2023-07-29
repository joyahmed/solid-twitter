import { Component, For } from 'solid-js';
import { trends } from '../../data';

const TrendsSidebar: Component = () => {
	return (
		<div class='bg-gray-800 overflow-hidden flex-it rounded-2xl'>
			<div class='flex-it p-4'>
				<span class='text-xl font-bold'>Trends</span>
			</div>
			<For each={trends}>
				{trend => (
					<div class='flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700'>
						<div class='flex-it'>
							<span class='text-gray-400 text-sm'>
								{trend.content}
							</span>
							<span class='text-lg font-bold'>{trend.category}</span>
							<span class='text-gray-400 text-sm'>
								{trend.tweetCount} tweets
							</span>
						</div>
					</div>
				)}
			</For>
		</div>
	);
};

export default TrendsSidebar;
