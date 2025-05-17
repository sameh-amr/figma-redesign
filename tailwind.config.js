/** @type {import('tailwindcss').Config} */
module.exports = {
  // The content array tells Tailwind where to look for class names
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src
    // If you have other files outside src that use Tailwind classes, add them here
  ],
  theme: {
    container: { // Standard Shadcn container config
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: { // Map Tailwind class names to CSS variables defined in globals.css
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Keep user's custom accent colors if they are separate from Shadcn defaults
        accent1: "#B0FFA0",
        accent2: "#FFA0AC",
        accent3: "#A700FF",
         // Add chart colors if used directly as classes
        'chart-1': 'hsl(var(--chart-1))',
        'chart-2': 'hsl(var(--chart-2))',
        'chart-3': 'hsl(var(--chart-3))',
        'chart-4': 'hsl(var(--chart-4))',
        'chart-5': 'hsl(var(--chart-5))',

        // Add sidebar colors if used directly as classes
        'sidebar-background': 'hsl(var(--sidebar-background))',
        'sidebar-foreground': 'hsl(var(--sidebar-foreground))',
        'sidebar-primary': 'hsl(var(--sidebar-primary))',
        'sidebar-primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        'sidebar-accent': 'hsl(var(--sidebar-accent))',
        'sidebar-accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        'sidebar-border': 'hsl(var(--sidebar-border))',
        'sidebar-ring': 'hsl(var(--sidebar-ring))',
      },
      borderRadius: { // Standard Shadcn border radius config using CSS variable
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: { // User's custom fonts
        "dm-sans": ["DM Sans", "sans-serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      fontWeight: { // User's custom font weights
        extralight: 200,
        light: 300,
      },
      fontSize: { // Further adjusted font size values (decreased again)
        xs: ["0.8rem", { lineHeight: "1.2rem" }], // approx 12.8px
        sm: ["1.0rem", { lineHeight: "1.5rem" }], // approx 16px
        base: ["1.2rem", { lineHeight: "1.8rem" }], // approx 19.2px
        lg: ["1.4rem", { lineHeight: "2.1rem" }], // approx 22.4px
        xl: ["1.6rem", { lineHeight: "2.4rem" }], // approx 25.6px
        "2xl": ["1.8rem", { lineHeight: "2.6rem" }], // approx 28.8px
        "3xl": ["2.2rem", { lineHeight: "3.0rem" }], // approx 35.2px
        "4xl": ["2.8rem", { lineHeight: "3.6rem" }], // approx 44.8px
        "5xl": ["3.4rem", { lineHeight: "4.2rem" }], // approx 54.4px
        "6xl": ["4.0rem", { lineHeight: "4.8rem" }], // approx 64px
      },
      spacing: { // More compact spacing scale
        0.5: "0.125rem", // 2px
        1: "0.25rem", // 4px
        1.5: "0.375rem", // 6px
        2: "0.5rem", // 8px
        2.5: "0.625rem", // 10px
        3: "0.75rem", // 12px
        3.5: "0.875rem", // 14px
        4: "1rem", // 16px
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Keep the animate plugin
    // Add other Shadcn plugins if you used them, e.g., require("@tailwindcss/forms")
  ],
};
