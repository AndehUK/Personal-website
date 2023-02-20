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
				python: "#FFDE57",
				psql: "#336791",
				redis: "#DC382B",
				php: "#777BB3",
				blade: "#DC382B",
				react: "#61DBFB",
				tailwind: "#336791",
			}
		},
	},
	plugins: [],
}
