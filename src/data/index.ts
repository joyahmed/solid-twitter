const randomize = () => Math.floor(Math.random() * 500);

export const trends = [
	{
		category: 'Sports',
		content: 'Some team won something!',
		tweetCount: randomize()
	},
	{
		category: 'Finance',
		content: 'Bitcon down again!',
		tweetCount: 200
	},
	{
		category: 'PC & Games',
		content: 'New Eincode game out!',
		tweetCount: randomize()
	},
	{
		category: 'Economy',
		content: `It's going well!`,
		tweetCount: randomize()
	},
	{
		category: 'Celebrities',
		content: 'Some useless news!',
		tweetCount: randomize()
	},
	{
		category: 'Movies',
		content: 'Peter Jackson as the director of new Lotr!',
		tweetCount: randomize()
	},
	{
		category: 'Sports',
		content: 'Some team won something!',
		tweetCount: randomize()
	}
];
