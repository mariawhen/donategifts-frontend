export const navItems: {
	style: string;
	items: {
		text: string;
		link: string;
	}[];
} = {
	style:
		'font-quicksand font-medium text-xl font-quicksand transition ease-in-out background-transparent px-3 py-1 outline-none focus:outline-none text-primary hover:text-primary-hover',
	items: [
		{
			text: 'Wish Cards',
			link: '/wishcards',
		},
		{
			text: 'Mission',
			link: '/mission',
		},
		{
			text: 'How To',
			link: '/howto',
		},
		{
			text: 'Sign up',
			link: '/users/signup',
		},
		{
			text: 'Login',
			link: '/users/login',
		},
	],
};
