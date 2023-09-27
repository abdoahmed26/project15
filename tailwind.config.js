/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        'mainBack': "url('/imgs/background-features.5f7a9ac9.jpg')",
        'twoBack': "url('/imgs/background-faqs.55d2e36a.jpg')",
      }
    },
  },
  plugins: [],
};
