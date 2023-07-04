/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{tsx,ts}', './components/**/*.{tsx,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Raleway: ['Raleway', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
				Nunito: ['Nunito', 'sans-serif'],
				Manrope: ['Manrope', 'sans-serif'],
				Inter: ['Inter', 'sans-serif'],
				sans: ['Montserrat', 'sans-serif']
			},
			screens: {
				sm: '640px',
				// => @media (min-width: 576px) { ... }

				md: '768px',
				// => @media (min-width: 960px) { ... }

				mdl:'1080px',
				// Ipad horizontal

				lgs:'1280px',

				lgm:'1368px',

				lg: '1601px'
				// => @media (min-width: 1440px) { ... }
			}
		}
	},
	plugins: [],
};
