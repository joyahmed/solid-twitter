/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const generateSizeClass = (upToSize, startAt = 80) => {
	const classes = {};
	for (let i = startAt; i < upToSize / 4; i += 4) {
		classes[i] = `${(i * 4) / 16}rem`;
	}

	return classes;
};

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xxs: '300px',
			xs: '475px',
			...defaultTheme.screens
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			width: generateSizeClass(1024),
			minHeight: generateSizeClass(1024, 0),
			maxHeight: generateSizeClass(1024, 0),
			maxWidth: generateSizeClass(1024, 0),
			minWidth: generateSizeClass(1024, 0),
			borderWidth: {
				1: '1px'
			},
			animation: {
				'loader-border': 'loaderBorder 1.5s linear infinite',
				'loader-text': 'loaderText 1.5s linear infinite'
			},
			keyframes: {
				loaderBorder: {
					'0%': { borderColor: 'white' },
					'50%': { borderColor: '#737ccf' },
					'100%': { transform: 'rotate(360deg)' }
				},

				loaderText: {
					'0%, 100%': { transform: 'scale(0)', opacity: 0 },
					'50%': { transform: 'scale(1)', opacity: 1 }
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
