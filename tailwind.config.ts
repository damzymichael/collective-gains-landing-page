import type { Config } from "tailwindcss"
import defautlTheme from "tailwindcss/defaultTheme"

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#172554",
        "primary-light": "#F0F4FF",
        secondary: "#FFDB43",
      },
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
        "acid-grotesk": ['"Acid-Grotesk"', ...defautlTheme.fontFamily.sans],
      },
    },
  },
}

export default config
