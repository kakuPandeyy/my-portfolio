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
blue:"#00dbde",
nav:{ 
  black:"rgba(0, 81, 255, 0.03)"
}

      },
      backgroundImage: {
        
        "background-theme": "linear-gradient(to right, #fc00ff, #00dbde)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
