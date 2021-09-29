module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    safelist: [
      'headline-website',
      'headline-title',
      'headline-subtitle',
      'headline-kicker'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#F2F0E3',
      'green': '#B3CBB9',
      'blue': '#84A9C0',
      'purple-light': '#6A66A3',
      'purple': '#542E71'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
