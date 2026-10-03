/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0813",
        surface: "#19152C",
        primary: "#40345E",
        text: "#B3AFBC",
        textSecondary: "#9A95A5",
        textMuted: "#827D8E",
      },

      dropShadow: {
        "star-glow": "0 0 8px #827D8E, 0 0 18px #827D8E",
      },

      fontFamily: {
        sans: ['"Varela Round"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },

      fontSize: {
        hero: ["3rem", { lineHeight: "3.5rem", fontWeight: "700" }],

        "heading-1": ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "heading-2": ["1.875rem", { lineHeight: "2.25rem", fontWeight: "700" }],
        "heading-3": ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],

        "subheading-1": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "subheading-2": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "600" }],

        "body": ["1rem", { lineHeight: "2rem", fontWeight: "200" }],
        "body-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "200" }],
      },
    },
  },
  plugins: [],
}