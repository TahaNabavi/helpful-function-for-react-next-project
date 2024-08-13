export default function hexToRgba(hexColor, opacity = 1) {
    if (!hexColor.startsWith("#") || hexColor.length !== 7) {
      throw new Error("Invalid hex color code");
    }
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  