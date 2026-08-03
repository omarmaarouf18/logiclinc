/**
 * Logic Link EG - Tailwind Config
 * Microsoft Fluent-inspired enterprise theme extensions.
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#0D2137",
        navyHover: "#163152",
        teal: "#0A9396",
        brandCyan: "#00a3ad",
        brandCyanHover: "#008e97"
      },
      boxShadow: {
        fluent: "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)",
        fluentHover: "0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        fluentDark: "0 2px 8px -2px rgba(0, 0, 0, 0.4)",
        fluentDarkHover: "0 12px 32px -4px rgba(0, 0, 0, 0.5)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 26s linear infinite"
      }
    }
  }
};
