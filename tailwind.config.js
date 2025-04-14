/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure all src files are covered
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#e0f2e9",      // Lighter, but darker than original
         100: "#c1e5d3",     // Darker mint green
         200: "#a3d9bd",     // Medium light green
         300: "#70c097",     // Medium green
         400: "#48a474",     // Darker medium green
         500: "#2a8c54",     // Dark green
         600: "#1a7540",     // Darker green (replaces #16a34a)
         700: "#126034",     // Very dark green
         800: "#0c4d2a",     // Forest green
         900: "#083d20"      // Very dark forest green
        },
        amber: {
          50: "#fff8e1",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ffa000",
          800: "#ff8f00",
          900: "#ff6f00",
        },
        sage: {
          50: "#f0f4f0",
          100: "#dbe5db",
          200: "#bcd2bc",
          300: "#97b897",
          400: "#7d9a68",
          500: "#5a7a5a",
          600: "#4c6b4c",
          700: "#3f573f",
          800: "#324432",
          900: "#2b392b",
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 10px rgba(0, 0, 0, 0.05)',
        'deep': '0 10px 20px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};