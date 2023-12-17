module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "smp-sky": "#006793",
        "smp-dark-gray": "#404040",
        "smp-gray": "#A4A4A4",
        "smp-light-gray": "#353535",
        "smp-black": "#1A1A1A",
        "smp-semi-black": "#222323",
        "smp-white": "#FAFAFA",
        "smp-blue": "#008ECB",
        "smp-shadow": "#00000029"
      },
      boxShadow: {
        "smp-nav": "2px 2px 3px black",
        "smp-card": "0px 1px 16px black",
      }
    },
  },
  plugins: [],
};
