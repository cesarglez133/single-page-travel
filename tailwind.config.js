/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#0aabba',
        'secondary': '#fe8b05',
        'danger': '#fe0557',
      }),
      textColor: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'norway': "url('../public/img/norway.jpg')",
        'sanFrancisco': "url('../public/img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../public/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../public/img/yosemite.jpg')",
			  'LA': "url('../public/img/LA.jpg')",
			  'seattle': "url('../public/img/seattle.jpg')",
			  'new_york': "url('../public/img/new_york.jpg')",
			  'sydney': "url('../public/img/sydney.jpg')",
			  'miami': "url('../public/img/miami.jpg')",
			  'switzerland': "url('../public/img/switzerland.jpg')",
			  'bali': "url('../public/img/bali.jpg')",
			  'norway': "url('../public/img/norway.jpg')",
			  'chicago': "url('../public/img/chicago.jpg')",
			  'europe': "url('../public/img/europe.jpg')",
			  'iceland': "url('../public/img/iceland.jpg')",
      }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
},
}
