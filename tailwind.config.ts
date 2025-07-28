import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'cyber': ['Space Grotesk', 'Orbitron', 'monospace'],
        'mono': ['Courier New', 'monospace'],
      },
      colors: {
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neon: {
          DEFAULT: "hsl(var(--neon))",
          foreground: "hsl(var(--neon-foreground))",
          glow: "hsl(var(--neon-glow))",
        },
        "neon-pink": {
          DEFAULT: "hsl(var(--neon-pink))",
          glow: "hsl(var(--neon-pink-glow))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--dark-foreground))",
        },
        glass: {
          DEFAULT: "hsl(var(--glass))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "data-stream": "data-stream 2s linear infinite",
        "hologram": "hologram 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
        "scan": "scan 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { 
            boxShadow: "0 0 5px hsl(var(--neon)), 0 0 10px hsl(var(--neon)), 0 0 15px hsl(var(--neon))",
            filter: "brightness(1)"
          },
          "100%": { 
            boxShadow: "0 0 10px hsl(var(--neon)), 0 0 20px hsl(var(--neon)), 0 0 30px hsl(var(--neon)), 0 0 40px hsl(var(--neon-glow))",
            filter: "brightness(1.2)"
          },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px hsl(var(--neon)), 0 0 10px hsl(var(--neon))",
            opacity: "1"
          },
          "50%": { 
            boxShadow: "0 0 20px hsl(var(--neon)), 0 0 30px hsl(var(--neon)), 0 0 40px hsl(var(--neon-glow))",
            opacity: "0.8"
          },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "data-stream": {
          "0%": { transform: "translateY(100vh) rotateX(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) rotateX(360deg)", opacity: "0" },
        },
        hologram: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        scan: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(hsl(var(--neon) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon) / 0.1) 1px, transparent 1px)',
        'hologram': 'linear-gradient(135deg, transparent, hsl(var(--neon) / 0.1), transparent, hsl(var(--neon-pink) / 0.1), transparent)',
        'neon-gradient': 'linear-gradient(45deg, hsl(var(--neon)), hsl(var(--neon-pink)))',
      },
      backgroundSize: {
        'cyber': '50px 50px',
        'hologram': '400% 400%',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      backdropBlur: {
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      boxShadow: {
        'neon': '0 0 5px hsl(var(--neon)), 0 0 10px hsl(var(--neon)), 0 0 15px hsl(var(--neon))',
        'neon-lg': '0 0 10px hsl(var(--neon)), 0 0 20px hsl(var(--neon)), 0 0 30px hsl(var(--neon))',
        'neon-xl': '0 0 20px hsl(var(--neon)), 0 0 40px hsl(var(--neon)), 0 0 80px hsl(var(--neon))',
        'pink': '0 0 5px hsl(var(--neon-pink)), 0 0 10px hsl(var(--neon-pink)), 0 0 15px hsl(var(--neon-pink))',
        'glass': 'inset 0 1px 0 0 hsl(var(--glass) / 0.2), 0 0 20px hsl(var(--neon) / 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
