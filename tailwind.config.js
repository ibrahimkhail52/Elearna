/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/bg-img.webp')",
        blackOverlay: "absolute inset-0 bg-black z-0",
        blogImg: "url('/blog-bg-img.webp')",
      customBg: "url('/path-to-your-image.jpg')"
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};


  