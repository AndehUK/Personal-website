/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				nav: "#161A1D",
				bg: "#202225",
				"brand-red": "#E5383B",
				card: "#202731",
			}
		},
	},
	plugins: [],
}
