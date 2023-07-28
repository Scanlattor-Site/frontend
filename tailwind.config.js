/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3368df',
        secondary: '#c369b6',
        tertiary: '#16264c',
        // primary: '#11131a',
        // secondary: '#ed4613',
        // tertiary: '#ffffff',
        quaternary: '#2f3e5e',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}
