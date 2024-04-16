/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	prefix: 'tw-',
	important: '#root',
	separator: '_',
	theme: {
		colors: {
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
		},
	},
	plugins: [],
};
