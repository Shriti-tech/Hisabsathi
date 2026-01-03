/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        star:"#FCCC1C",
        inputBorder:"#E4E4E7",
        textgray:"#8C8C8C",
        primary:"#465FFF",
        primaryTwo:"#F0F2FF",
        primaryThree:"#FAFBFF",
        secondary:"#161950",
        sidebar:"#5F6368",
        input:"#71717A",
        borderInput:"#E4E4E7",
        background:"#F9FBFF",
        destructive:"#DC2626",
        tertiary:"#F6A221",
        success:"#16A34A",
        foreground: 'hsl(var(--foreground))',
    
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
      },
        fontSize: {
        '24': '24px',
        '84':'84px',
      },
      
   borderRadius: {
  lg: 'var(--radius)',           
  md: 'calc(var(--radius) - 2px)', 
  sm: 'calc(var(--radius) - 4px)', 
},
      boxShadow: {
        '2xs': 'var(--shadow-2xs)',
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
     
    
    },
  },
  plugins: [],
};