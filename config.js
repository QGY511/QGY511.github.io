// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'I\'m Guanyu Qian (钱冠宇) ',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good Night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '34.05611',
	defaultLongitude: '-118.42972',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/QGY511',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mails',
			link: 'mailto:gyqian@ucla.edu',
		},
		{
			id: '3',
			name: '',
			icon: 'audio-lines',
			link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		},
		{
			id: '4',
			name: 'CV',
			icon: 'notebook-text',
			link: "assets/cv/Guanyu Qian_CV.pdf",
		},
		{
			id: '5',
			name: 'Google Scholar',
			icon: 'graduation-cap',
			link: 'https://scholar.google.com/',
		},
		{
			id: '6',
			name: 'Lab',
			icon: 'briefcase',
			link: 'https://sites.google.com/umich.edu/xiaofancui/people?authuser=0',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	textBoxes: [
		'Text Box 1 Content',
		'Text Box 2 Content',
		'Text Box 3 Content',
		// Add more text box contents as needed
	],


	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	// firstlistsContainer: [
	// 	{
	// 		icon: 'music',
	// 		id: '1',
	// 		links: [
	// 			{
	// 				name: 'Inspirational',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 			{
	// 				name: 'Classic',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 			{
	// 				name: 'Oldies',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 			{
	// 				name: 'Rock',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		icon: 'coffee',
	// 		id: '2',
	// 		links: [
	// 			{
	// 				name: 'Linkedin',
	// 				link: 'https://www.linkedin.com',
	// 			},
	// 			{
	// 				name: 'Dribbble',
	// 				link: 'https://www.dribbble.com',
	// 			},
	// 			{
	// 				name: 'Trello',
	// 				link: 'https://www.trello.com',
	// 			},
	// 			{
	// 				name: 'Slack',
	// 				link: 'https://www.slack.com',
	// 			},
	// 		],
	// 	},
	// ],

	// Second Links Container
	// secondListsContainer: [
	// 	{
	// 		icon: 'binary',
	// 		id: '1',
	// 		links: [
	// 			{
	// 				name: 'Spotify',
	// 				link: 'https://www.spotify.com',
	// 			},
	// 			{
	// 				name: 'Reddit',
	// 				link: 'https://www.reddit.com',
	// 			},
	// 			{
	// 				name: 'Hashnode',
	// 				link: 'https://www.hashnode.com',
	// 			},
	// 			{
	// 				name: 'Pocket',
	// 				link: 'https://www.pocket.com',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		icon: 'github',
	// 		id: '2',
	// 		links: [
	// 			{
	// 				name: 'Front',
	// 				link: 'https://www.reddit.com/r/Frontend/',
	// 			},
	// 			{
	// 				name: 'Rust',
	// 				link: 'https://www.reddit.com/r/rust/',
	// 			},
	// 			{
	// 				name: 'Go',
	// 				link: 'https://www.reddit.com/r/golang/',
	// 			},
	// 			{
	// 				name: 'Repos',
	// 				link: 'https://github.com/migueravila',
	// 			},
	// 		],
	// 	},
	// ],
};
