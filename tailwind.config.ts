import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-0)",
        foreground: "var(--parchment)",
        border: "var(--leather)",
        
        parchment: {
          DEFAULT: "var(--parchment)",
          dim: "var(--parchment-dim)",
        },
        
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
          bright: "var(--gold-bright)",
        },
        
        leather: "var(--leather)",
        ink: "var(--ink)",
        
        western: {
          red: "var(--red)",
          green: "var(--green)",
          sky: "var(--sky)",
        },
      },
      fontFamily: {
        display: ['Rye', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Special Elite"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'western-gradient': 'linear-gradient(to bottom, var(--bg-0), var(--bg-2))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
