import {
	Component,
	For,
	createSignal,
	createUniqueId,
	lazy
} from 'solid-js';
import { createStore, produce } from 'solid-js/store';
const MainLayout = lazy(
	() => import('../components/layouts/MainLayout')
);
const TweetPost = lazy(
	() => import('../components/tweets/TweetPost')
);
const Messenger = lazy(() => import('../components/Messenger'));

const HomeScreen: Component = () => {
	const [content, setContent] = createSignal('');
	const [tweets, setTweets] = createStore({
		items: [] as Tweet[]
	});

	const createTweet = () => {
		const tweet = {
			id: createUniqueId(),
			content: content(),
			user: {
				userName: 'Joy007',
				avatar: '/images/joy-avatar.webp'
			},
			likesCount: 0,
			subTweetsCount: 0,
			date: new Date()
		};

		setTweets(
			produce(tweets => {
				tweets.items.unshift(tweet);
			})
		);
		setContent('');
	};

	return (
		<MainLayout>
			<div class='flex-it py-1 px-4 flex-row'>
				<div class='flex-it mr-4'>
					<div class='w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80'>
						<img
							class='rounded-full'
							src='/images/joy-avatar.webp'
						></img>
					</div>
				</div>
				<Messenger
					{...{
						createTweet,
						content,
						setContent
					}}
				/>
			</div>
			<div class='h-px bg-gray-700 my-1' />
			<For each={tweets.items}>
				{tweet => (
					<TweetPost
						{...{
							id: tweet.id,
							content: tweet.content,
							user: tweet.user,
							likesCount: tweet.likesCount,
							subTweetsCount: tweet.subTweetsCount,
							date: tweet.date
						}}
					/>
				)}
			</For>
		</MainLayout>
	);
};

export default HomeScreen;
