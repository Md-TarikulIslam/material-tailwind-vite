const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-darker": "#cc5600",
      "primary-dark": "#fe601f",
      primary: "#f28020",
      "primary-light": "#feba85",
      "primary-lighter": "#fef2e9",
      bs: "#eff3f7", //bg-secondary
      bp: "#fafafa", //bg-primary
      tp: "#212121", //text-primary
      ts: "#757575", //text-secondary
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
