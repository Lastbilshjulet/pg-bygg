/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#f2f2f2",
					dark: "#141d17"
				},
				secondary: {
					DEFAULT: "#000",
					dark: "#fff"
				}
			}
		}
	}
};
