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
      /***************************Light Scheme***********************/

      //++++++++++++++++Primary Colors+++++++++++++++++++++//

      pl40: "#285bb4", //Primary Color
      plt: "#ffffff", //Primary Text Color
      pl90: "#d9e2ff", //Primary Container Color
      pl10: "#001943", //Primary Container Text Color

      //++++++++++++++++Secondary Colors+++++++++++++++++++++//

      sl40: "#006495", //Secondary Color
      slt: "#ffffff", //Secondary Text Color
      sl90: "#cbe6ff", //Secondary Container Color
      sl10: "#001e30", //Secondary Container Text Color

      //++++++++++++++++Tertiary Colors+++++++++++++++++++++//

      tl40: "#725573", //Tertiary Color
      tlt: "#ffffff", //Tertiary Text Color
      tl90: "#fcd7fb", //Tertiary Container Color
      tl10: "#2a132d", //Tertiary Container Text Color

      //++++++++++++++++Error Colors+++++++++++++++++++++//

      el40: "#ba1a1a", //Error Color
      elt: "#ffffff", //Error Text Color
      el90: "#ffdad6", //Error Container Color
      el10: "#410002", //Error Container Text Color

      //++++++++++++++++Background Colors+++++++++++++++++++++//

      bl40: "#fefbff", //Background Color
      blt: "#1b1b1f", //Background Text Color
      bl90: "#fefbff", //Background Container Color
      bl10: "#1b1b1f", //Background Container Text Color

      //++++++++++++++++Outline Colors+++++++++++++++++++++//

      ol40: "#757780", //Outline Color
      ol90: "#e1e2ec", //Outline Container Color
      ol10: "#44464f", //Outline Container Text Color

      /***************************Dark Scheme***********************/

      //++++++++++++++++Primary Colors+++++++++++++++++++++//

      pd40: "#afc6ff", //Primary Color
      pdt: "#002d6c", //Primary Text Color
      pd90: "#004398", //Primary Container Color
      pd10: "#d9e2ff", //Primary Container Text Color

      //++++++++++++++++Secondary Colors+++++++++++++++++++++//

      sd40: "#90cdff", //Secondary Color
      sdt: "#003450", //Secondary Text Color
      sd90: "#004b71", //Secondary Container Color
      sd10: "#cbe6ff", //Secondary Container Text Color

      //++++++++++++++++Tertiary Colors+++++++++++++++++++++//

      td40: "#dfbbde", //Tertiary Color
      tdt: "#402743", //Tertiary Text Color
      td90: "#593e5a", //Tertiary Container Color
      td10: "#fcd7fb", //Tertiary Container Text Color

      //++++++++++++++++Error Colors++++++++++++++++++++//

      ed40: "#ffb4ab", //Error Color
      edt: "#690005", //Error Text Color
      ed90: "#93000a", //Error Container Color
      ed10: "#ffdad6", //Error Container Text Color

      //++++++++++++++++Background Colors+++++++++++++++++++++//

      bd40: "#1b1b1f", //Background Color
      bdt: "#e3e2e6", //Background Text Color
      bd90: "#1b1b1f", //Background Container Color
      bd10: "#e3e2e6", //Background Container Text Color

      //++++++++++++++++Outline Colors+++++++++++++++++++++//

      ol40: "#8f9099", //Outline Color
      ol90: "#44464f", //Outline Container Color
      ol10: "#c5c6d0", //Outline Container Text Color
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
