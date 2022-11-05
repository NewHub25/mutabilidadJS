const tablaColor = [
  "IndianRed",
  "LightCoral",
  "Salmon",
  "DarkSalmon",
  "LightSalmon",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "PaleVioletRed",
  "LightSalmon",
  "Coral",
  "Tomato",
  "OrangeRed",
  "DarkOrange",
  "Orange",
  "Gold",
  "Yellow",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Khaki",
  "DarkKhaki",
  "Lavender",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "MediumPurple",
  "RebeccaPurple",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "DarkMagenta",
  "Purple",
  "Indigo",
  "SlateBlue",
  "DarkSlateBlue",
  "MediumSlateBlue",
  "GreenYellow",
  "Chartreuse",
  "LawnGreen",
  "Lime",
  "LimeGreen",
  "PaleGreen",
  "LightGreen",
  "MediumSpringGreen",
  "SpringGreen",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "YellowGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "MediumAquamarine",
  "DarkSeaGreen",
  "LightSeaGreen",
  "DarkCyan",
  "Teal",
  "Aqua",
  "Cyan",
  "LightCyan",
  "PaleTurquoise",
  "Aquamarine",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "CadetBlue",
  "SteelBlue",
  "LightSteelBlue",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DeepSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "MediumSlateBlue",
  "RoyalBlue",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "MidnightBlue",
  "Cornsilk",
  "BlanchedAlmond",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "SaddleBrown",
  "Sienna",
  "Brown",
  "Maroon",
  "White",
  "Snow",
  "HoneyDew",
  "MintCream",
  "Azure",
  "AliceBlue",
  "GhostWhite",
  "WhiteSmoke",
  "SeaShell",
  "Beige",
  "OldLace",
  "FloralWhite",
  "Ivory",
  "AntiqueWhite",
  "Linen",
  "LavenderBlush",
  "MistyRose",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "SlateGray",
  "DarkSlateGray",
  "Black",
];
export function colorRandom() {
  const random = () => Math.floor(Math.random() * 255);
  const r = random().toString(16);
  const g = random().toString(16);
  const b = random().toString(16);
  return "#" + r + g + b;
}
export function colorRandomLight() {
  const random = () => Math.floor(Math.random() * 200) + 55;
  const r = random().toString(16);
  const g = random().toString(16);
  const b = random().toString(16);
  return "#" + r + g + b;
}
export function colorName() {
  return tablaColor[Math.floor(Math.random() * tablaColor.length)];
}
