/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: [
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "ui-sans-serif",
          "system-ui",
        ],
        karla: [
          "Karla",
          "Helvetica",
          "Arial",
          "sans-serif",
          "ui-sans-serif",
          "system-ui",
        ],
        markazi: [
          "Markazi",
          "Helvetica",
          "Arial",
          "sans-serif",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      borderRadius: {
        "3xl": "calc(var(--radius) * 2)",
        "2xl": "calc(var(--radius) * 1.5)",
        xl: "calc(var(--radius) * 1.25)",
        lg: "var(--radius)",
        md: "calc(var(--radius) * 0.75)",
        sm: "calc(var(--radius) * 0.5)",
        capsule: "100vw",
        circle: "50%",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          1: "hsl(var(--chart-1) / <alpha-value>)",
          2: "hsl(var(--chart-2) / <alpha-value>)",
          3: "hsl(var(--chart-3) / <alpha-value>)",
          4: "hsl(var(--chart-4) / <alpha-value>)",
          5: "hsl(var(--chart-5) / <alpha-value>)",
        },
        theme: {
          darkgrey: "hsl(var(--darkgrey) / <alpha-value>)",
          grey: "hsl(var(--grey) / <alpha-value>)",
          lightgrey: "hsl(var(--lightgrey) / <alpha-value>)",
          yellow: "hsl(var(--yellow) / <alpha-value>)",
          lightred: "hsl(var(--lightred) / <alpha-value>)",
          darkgreen: "hsl(var(--darkgreen) / <alpha-value>)",
        },
      },
      width: {
        content: "var(--max-width)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
