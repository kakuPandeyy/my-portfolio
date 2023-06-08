/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
dark:"#1b1b1b",
light:"#f5f5f5",
dark2:"rgb(28,28,28)",
dark3:"rgb(47,47,47)",
gro:"rgb(142,210,169)",
gro2:"rgb(87,230,217)",
blue:"#00dbde",
blue2:"rgb(11,102,194)",
blue3:"#60a5fa",
nav:{ 
  black:"rgba(0, 81, 255, 0.03)"
}

      },
      backgroundImage: {
        
        "background-theme": "linear-gradient(to right, #fc00ff, #00dbde)",
        "background-noon": "linear-gradient(to right, #9796f0, #fbc7d4)",
        "background-green2": "linear-gradient(to right, #000046, #1cb5e0)",
        "background-green3": "linear-gradient(to right, #44a08d, #093637)",

"background-noon2": "linear-gradient(to right, #C5796D, #DBE6F6)" ,

        "background-blue": "linear-gradient(to right, #4b6cb7, #182848)",
        "background-green": "linear-gradient(to right, #20002c, #cbb4d4)",
        "background-blueGreen": "linear-gradient(to right, #614385, #516395)",
        "background-brown": "linear-gradient(to right, #603813, #b29f94)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
