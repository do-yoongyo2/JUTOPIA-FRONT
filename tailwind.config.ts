import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ttlaundrygothicb: ["TTLaundryGothicB", "sans-serif"],
      colors: {
        "shinhan-blue": "#0446ff", //신한 색
        "shinhan-back": "#EBF1FF", //버튼 백그라운드 회색
        "shinhan-gray": "#BEBEBE", //텍스트 gray
        "shinhan-button": "#293FEB", //버튼 진한 블루
        "shnhan-whitegray-back": "#F6F5FA",
      },
      width: {
        "2/5": "40%",
        "3/5": "60%",
        "1/2": "50%",
      },
      fontSize: {
        custom: "0.65rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
