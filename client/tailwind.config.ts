import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },

      // 🎨 Your V3 color palette
      colors: {
        background: "#fafafa",     // light cream background
        primary: "#ff7849",        // vibrant orange
        accent: "#ffb347",         // orange-yellow accent
        secondary: "#1a1a1a",      // dark heading color
        muted: "#6b7280",          // gray text
        border: "#e5e7eb",         // subtle divider
      },

      // 🧩 Font families
      fontFamily: {
        sans: ["Inter", "sans-serif"],               // body / default
        serif: ["Lora", "serif"],                    // subtitles
        display: ["Playfair Display", "serif"],      // big titles / hero
      },

      // Rounded corners
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },

      // Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};

export default config;
