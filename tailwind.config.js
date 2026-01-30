/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       extend: {
      /* -----------------------------
       ANIMATIONS (Tailwind + CSS3)
      ----------------------------- */
      animation: {
        /* ===== Tailwind defaults ===== */
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',

        /* ===== CSS3-style entry ===== */
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'fade-out': 'fadeOut 0.2s ease-in forwards',

        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.3s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.3s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.3s ease-out forwards',

        /* ===== Slide ===== */
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'slide-left': 'slideLeft 0.3s ease-out forwards',
        'slide-right': 'slideRight 0.3s ease-out forwards',

        /* ===== Scale / zoom ===== */
        'zoom-in': 'zoomIn 0.25s ease-out forwards',
        'zoom-out': 'zoomOut 0.25s ease-in forwards',

        /* ===== Rotate ===== */
        'rotate-in': 'rotateIn 0.3s ease-out forwards',

        /* ===== Attention ===== */
        shake: 'shake 0.4s ease-in-out',
        flash: 'flash 1s linear',
           wobble: 'wobble 0.6s ease-in-out',
        
           'bg-move': 'moveGradient 8s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
      },

      /* -----------------------------
       KEYFRAMES
      ----------------------------- */
      keyframes: {
        /* ===== Tailwind defaults ===== */
        
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        ping: {
          '75%,100%': { transform: 'scale(2)', opacity: '0' },
        },
        pulse: {
          '50%': { opacity: '.5' },
        },
        bounce: {
          '0%,100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },

        /* ===== Fade ===== */
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },

        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },

        /* ===== Slide ===== */
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        slideDown: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        slideRight: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },

        /* ===== Zoom ===== */
        zoomIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        zoomOut: {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' },
        },

        /* ===== Rotate ===== */
        rotateIn: {
          from: { opacity: '0', transform: 'rotate(-10deg)' },
          to: { opacity: '1', transform: 'rotate(0)' },
        },

        /* ===== Attention ===== */
        shake: {
          '0%,100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        flash: {
          '0%,50%,100%': { opacity: '1' },
          '25%,75%': { opacity: '0' },
        },
        wobble: {
          '0%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-6px) rotate(-3deg)' },
          '30%': { transform: 'translateX(6px) rotate(3deg)' },
          '45%': { transform: 'translateX(-6px) rotate(-3deg)' },
          '60%': { transform: 'translateX(6px) rotate(3deg)' },
          '75%': { transform: 'translateX(-4px) rotate(-1deg)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

