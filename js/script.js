const d = document;

const $main = d.querySelector(".main");

const colores = [
  {
    name: "1. Divertido y Profesional",
    codigos: [
      ["Fresh", "#4abdac"],
      ["Vermillion", "#fc4a1a"],
      ["Sunshine", "#f7b733"],
      ["Clean", "#dfdce3"],
    ],
  },

  {
    name: "2. Inspirado en la Historia del Arte",
    codigos: [
      ["Sunflowers", "#ffce00"],
      ["Starry Night", "#0375b4"],
      ["Irises", "#007849"],
      ["Evening", "#262228"],
    ],
  },

  {
    name: "3. Tonos Apagados",
    codigos: [
      ["Pale Gold", "#c0b283"],
      ["Silk", "#dcd0c0"],
      ["Paper", "#f4f4f4"],
      ["Charcoal", "#373737"],
    ],
  },

  {
    name: "4. Moderno y Limpio",
    codigos: [
      ["Tangerine", "#e37222"],
      ["Teal", "#07889b"],
      ["Powder", "#66b9bf"],
      ["Tan", "#eeaa7b"],
    ],
  },

  {
    name: "5. Tonos Neón y Fuerte Contraste",
    codigos: [
      ["Void", "#0e0b16"],
      ["Fuschia", "#a239ca"],
      ["Jewel", "#4717f6"],
      ["Stark", "#e7dfdd"],
    ],
  },

  {
    name: "6. Apagado y Minimalista",
    codigos: [
      ["Dusty", "#96858f"],
      ["Lavendar", "#6d7993"],
      ["Overcast", "#9099a2"],
      ["Paper", "#d5d5d5"],
    ],
  },

  {
    name: "7. Cálido y Llamativo",
    codigos: [
      ["Black", "#000000"],
      ["Ink", "#062f4f"],
      ["Posy", "#813772"],
      ["Embers", "#b82601"],
    ],
  },

  {
    name: "8. Limpio y Resaltado",
    codigos: [
      ["Sky", "#caebf2"],
      ["Carbon", "#a9a9a9"],
      ["Watermelon", "#ff3b3f"],
      ["Neutral", "#efefef"],
    ],
  },

  {
    name: "9. Tonos Cálidos",
    codigos: [
      ["Grain", "#d7cec7"],
      ["Blackboard", "#565656"],
      ["Oxblood", "#76323f"],
      ["Tan", "#c09f80"],
    ],
  },

  {
    name: "10. Fino y Moderno",
    codigos: [
      ["Electric", "#3cc47c"],
      ["Forest", "#1e392a"],
      ["Light", "#e9c893"],
      ["Tin", "#828081"],
    ],
  },

  {
    name: "11. Frìo vs. Càlido",
    codigos: [
      ["Navy Blue", "#18121e"],
      ["Gunmetal", "#233237"],
      ["Rusty Red", "#984b43"],
      ["Warm Yellow", "#eac67a"],
    ],
  },

  {
    name: "12. Pasteles Bonitos",
    codigos: [
      ["Powder", "#8fd8d2"],
      ["Peach", "#fedcd2"],
      ["Warm", "#df744a"],
      ["Lemon", "#dcb239"],
    ],
  },

  {
    name: "13. Intenso e Impactante",
    codigos: [
      ["Papaya", "#e24e42"],
      ["Mustard", "#e9b000"],
      ["Blush", "#eb6e80"],
      ["Aqua", "#008f95"],
    ],
  },

  {
    name: "14. Matices y Tono",
    codigos: [
      ["Grape", "#94618e"],
      ["Eggplant", "#49274a"],
      ["Sand", "#f4decb"],
      ["Shell", "#f8eee7"],
    ],
  },

  {
    name: "15. Toque de Color",
    codigos: [
      ["Cerulean", "#4484ce"],
      ["Aluminuim", "#d9d9d9"],
      ["Light", "#f9cf00"],
      ["Tangerine", "#f19f4d"],
    ],
  },

  {
    name: "16. Elegante y Sofisticado",
    codigos: [
      ["Prussian Blue", "#0b3c5d"],
      ["Sky Blue", "#328cc1"],
      ["Gold Leaf", "#d9b310"],
      ["Ivory Black", "#1d2731"],
    ],
  },

  {
    name: "17. Inspirado en el Verano",
    codigos: [
      ["Summer Sky", "#286da8"],
      ["Warm Peach", "#cd5360"],
      ["Field", "#b37d4e"],
      ["Breeze", "#438496"],
    ],
  },

  {
    name: "18. Profesional y Moderno",
    codigos: [
      ["Screen", "#c5c1c0"],
      ["Steel", "#0a1612"],
      ["Denim", "#1a2930"],
      ["Marigold", "#f7ce3e"],
    ],
  },

  {
    name: "19. Negros Intensos y Resaltados Vibrantes",
    codigos: [
      ["Black", "#000000"],
      ["Pink", "#ec576b"],
      ["Aqua", "#4ec5c1"],
      ["Lime", "#e5e338"],
    ],
  },

  {
    name: "20. Degradados Limpios y Azules Frescos",
    codigos: [
      ["Feather", "#77c9d4"],
      ["Marine", "#57bc90"],
      ["Forest", "#015249"],
      ["sleek Grey", "#a5a5af"],
    ],
  },

  {
    name: "21. Divertido y Elegante",
    codigos: [
      ["Blueberry", "#6b7a8f"],
      ["Apricot", "#f7882f"],
      ["Citrus", "#f7c331"],
      ["Apple Core", "#dcc7aa"],
    ],
  },

  {
    name: "22. Lujoso y Moderno",
    codigos: [
      ["Navy Blue", "#0f1626"],
      ["Leather", "#ab987a"],
      ["Coral", "#ff533d"],
      ["Eggshell", "#f5f5f5"],
    ],
  },

  {
    name: "23. Único e Impresionante",
    codigos: [
      ["Crimson Sky", "#cf6766"],
      ["Indigo", "#30415d"],
      ["Ultramarine", "#031424"],
      ["Light Blue", "#8eaebd"],
    ],
  },

  {
    name: "24. Combinaciones Inesperadas de Colores",
    codigos: [
      ["Violet", "#6e3667"],
      ["Electric Lime", "#88d317"],
      ["Deep Plum", "#1a0315"],
      ["Shadow", "#535353"],
    ],
  },

  {
    name: "25. Inspirado en lo Retro",
    codigos: [
      ["Blutter", "#fedc3d"],
      ["Black", "#000000"],
      ["Azure", "#01abaa"],
      ["Peach", "#fea680"],
    ],
  },

  {
    name: "26. Antiguo y Limpio",
    codigos: [
      ["Rust", "#b56357"],
      ["Mint", "#b4dbc0"],
      ["Slate", "#eae3ea"],
      ["Sea Foam", "#a7b3a5"],
    ],
  },

  {
    name: "27. Sorprendente y Enérgico",
    codigos: [
      ["Magenta", "#f81b84"],
      ["Yellow", "#f5ce28"],
      ["Cyan", "#43c0f6"],
      ["Beige", "#f2eee2"],
    ],
  },

  {
    name: "28. Fresco y Lleno de Vida",
    codigos: [
      ["Electric", "#4cdef5"],
      ["Pea", "#a4d555"],
      ["Blush", "#ff5992"],
      ["Orchid", "#841983"],
    ],
  },

  {
    name: "29. Limpio y Nítido",
    codigos: [
      ["Ice", "#99d3df"],
      ["Fresh Water", "#88bbd6"],
      ["Plaster", "#cdcdcd"],
      ["Linen", "#e9e9e9"],
    ],
  },

  {
    name: "30. Colorido Sin Choques",
    codigos: [
      ["Salmon", "#fa7c92"],
      ["Rain", "#6ec4db"],
      ["Buttermilk", "#fff7c0"],
      ["Leaf", "#66ab8c"],
    ],
  },

  {
    name: "31. Fresco y Apacible",
    codigos: [
      ["Aqua", "#6bbaa7"],
      ["Sunshine", "#fba100"],
      ["Lavender", "#6c648b"],
      ["Dusty Rose", "#b6a19e"],
    ],
  },

  {
    name: "32. Moderno y Apagado",
    codigos: [
      ["Grey Blue", "#a9b7c0"],
      ["Minty", "#c7d8c6"],
      ["Light", "#efd9c1"],
      ["Powder", "#cccdc6"],
    ],
  },

  {
    name: "33. Terroso y Fresco",
    codigos: [
      ["Terracota", "#945d60"],
      ["Herb", "#626e60"],
      ["Chilli", "#af473c"],
      ["Charcoal", "#3c3c3c"],
    ],
  },

  {
    name: "34. Saturación y Energía Elevadas",
    codigos: [
      ["Hot Pink", "#fe65b7"],
      ["Corn", "#e9c904"],
      ["Grass", "#8fc33a"],
      ["Cyan", "#62edd6"],
    ],
  },

  {
    name: "35. Cálido y Maravilloso",
    codigos: [
      ["Sky", "#7cdbd5"],
      ["Bright Coral", "#f53240"],
      ["Golden", "#f9be02"],
      ["Aquamarine", "#02c8a7"],
    ],
  },

  {
    name: "36. Encanto Clásico",
    codigos: [
      ["Gold", "#cda34f"],
      ["Daisy", "#e9e7da"],
      ["Stem", "#636b46"],
      ["Greenery", "#373f27"],
    ],
  },

  {
    name: "37. Tonos Brillantes Fríos",
    codigos: [
      ["Blue Topaz", "#67aeca"],
      ["Amethyst", "#675682"],
      ["Jewel", "#5f0f4e"],
      ["Rose", "#e52a6f"],
    ],
  },

  {
    name: "38. Matices Tempestuosos",
    codigos: [
      ["Stormy", "#494e6b"],
      ["Cloud", "#98878f"],
      ["Sunset", "#985e6d"],
      ["Evening", "#192231"],
    ],
  },

  {
    name: "39. Limpio y Colegial",
    codigos: [
      ["Powder Blue", "#4c6d9f"],
      ["Cotton", "#99ced4"],
      ["Blush", "#eeb6b7"],
      ["Smoke", "#6e7376"],
    ],
  },

  {
    name: "40. Simple y Fresco",
    codigos: [
      ["Matte", "#414141"],
      ["Fresh", "#ccdfcb"],
      ["Watermelon", "#ff6a5c"],
      ["Teal", "#056571"],
    ],
  },

  {
    name: "41. Tonos Tropicales",
    codigos: [
      ["Ocean", "#1fb58f"],
      ["Sand", "#eab126"],
      ["Cocktail", "#f24c4e"],
      ["Palm", "#1b7b34"],
    ],
  },

  {
    name: "42. Colores Distintivos Intensos",
    codigos: [
      ["Coral", "#e14658"],
      ["Navy", "#22252c"],
      ["Mountain", "#3f3250"],
      ["Scrub", "#c0b3a0"],
    ],
  },

  {
    name: "43. Tonos Antiguos",
    codigos: [
      ["Bluebell", "#155765"],
      ["Olive", "#57652a"],
      ["Ornate", "#ab9353"],
      ["Plum", "#4d2c3d"],
    ],
  },

  {
    name: "44. Neón e Intenso",
    codigos: [
      ["Peal", "#d48cfa"],
      ["Shrub", "#0e8044"],
      ["Grass", "#b5e582"],
      ["Canopy", "#08302f"],
    ],
  },

  {
    name: "45. Simple pero Intenso",
    codigos: [
      ["Fresh", "#f7ef6a"],
      ["Vermillion", "#93c178"],
      ["Sunshine", "#465c8b"],
      ["Clean", "#eff9fa"],
    ],
  },

  {
    name: "46. Corporativo y Elegante",
    codigos: [
      ["Fresh", "#f7f5e6"],
      ["Vermillion", "#333a56"],
      ["Sunshine", "#52658f"],
      ["Clean", "#e8e8e8"],
    ],
  },

  {
    name: "47. Moderno y Minimalista",
    codigos: [
      ["Ochre", "#c06014"],
      ["Pastel Peach", "#eddbcd"],
      ["Black", "#000000"],
      ["Cool Grey", "#cdcdcd"],
    ],
  },

  {
    name: "48. Divertido y Alegre",
    codigos: [
      ["Clean", "#a7d2cb"],
      ["Butter", "#f2d388"],
      ["Salmon", "#c98474"],
      ["Eggplant", "#874c62"],
    ],
  },

  {
    name: "49. Soleado y Tranquilo",
    codigos: [
      ["Morning Sky", "#cae4db"],
      ["Honey", "#dcae1d"],
      ["Cerulean", "#00303f"],
      ["Mist", "#7a9d96"],
    ],
  },

  {
    name: "50. Arte Pop",
    codigos: [
      ["Lemon", "#d7dd35"],
      ["Grape", "#575da9"],
      ["Fuschia", "#e42d9f"],
      ["Blue", "#02558b"],
    ],
  }
];

colores.forEach((el) => {
  const element = d.createElement("div");
  const containerColor = d.createElement("div");
  const h1 = d.createElement("h2");
  h1.innerText = el.name;
  element.classList.add("container-color");
  el.codigos.forEach((el) => {
    const elementChild = d.createElement("div");
    elementChild.classList.add("color");
    elementChild.setAttribute("data-color", el[1]);
    elementChild.style.backgroundColor = el[1];
    elementChild.innerHTML = `
    <span class="btn-copy">COPIAR</span>
    <span class="name-color">${el[0]}</span>
    `;
    containerColor.appendChild(elementChild);
  });
  element.appendChild(h1);
  element.appendChild(containerColor);
  $main.appendChild(element);
});
