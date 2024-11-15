/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Onest", "sans-serif"],
			},
			colors: {
				til: "#287279",
			},
			screens: {
				xxl: "1920px",
			},
		},
	},
	plugins: [],
};
