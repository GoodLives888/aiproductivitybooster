/** @type {import(\'tailwindcss\').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: \'var(--radius)\',
        md: \'calc(var(--radius) - 2px)\',
        sm: \'calc(var(--radius) - 4px)\'
      },
      colors: {
        brand: {
          primary: \'#1A2E4C\', // Deep Blue
          secondary: \'#3A5F8A\', // Lighter Blue
          accent: \'#48D1CC\',    // Cool Mint Accent (CTA)
        },
        background: {
          main: \'#FDFEFE\',      // Off-White
          // You might want a slightly darker background for some sections too
        },
        text: {
          primary: \'#343A40\',   // Text Dark
          light: \'#FFFFFF\',     // Text Light (already default white)
          // secondary: \'#6c757d\', // Example for a lighter text color if needed
        },
        border: {
          subtle: \'#CED4DA\',    // Neutral Light Gray
        },
        // Preserving existing sidebar colors if they are still relevant
        sidebar: {
          DEFAULT: \'hsl(var(--sidebar-background))\',
          foreground: \'hsl(var(--sidebar-foreground))\',
          primary: \'hsl(var(--sidebar-primary))\',
          \'primary-foreground\': \'hsl(var(--sidebar-primary-foreground))\',
          accent: \'hsl(var(--sidebar-accent))\',
          \'accent-foreground\': \'hsl(var(--sidebar-accent-foreground))\',
          border: \'hsl(var(--sidebar-border))\',
          ring: \'hsl(var(--sidebar-ring))\'
        }
      },
      fontFamily: {
        sans: [\'Open Sans\', \'sans-serif\'], // Body font
        heading: [\'Montserrat\', \'sans-serif\'] // Heading font
      },
      keyframes: {
        \'accordion-down\': {
          from: {
            height: \'0\'
          },
          to: {
            height: \'var(--radix-accordion-content-height)\'
          }
        },
        \'accordion-up\': {
          from: {
            height: \'var(--radix-accordion-content-height)\'
          },
          to: {
            height: \'0\'
          }
        }
      },
      animation: {
        \'accordion-down\': \'accordion-down 0.2s ease-out\',
        \'accordion-up\': \'accordion-up 0.2s ease-out\'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

