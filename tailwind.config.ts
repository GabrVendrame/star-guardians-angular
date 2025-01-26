import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,ts}", "./src/app/components/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Montserrat"],
      },
    },
  },
  plugins: [],
} satisfies Config;
