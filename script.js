/**
 * Setup ==============================================================
 */
const MTG_COLOR = {
  WHITE: {
    color: "#F8F6D8",
    label: "White",
    symbol: "W",
  },
  BLUE: {
    color: "#C1D7E9",
    label: "Blue",
    symbol: "U",
  },
  BLACK: {
    color: "#CAC5C0",
    label: "Black",
    symbol: "B",
  },
  RED: {
    color: "#E49977",
    label: "Red",
    symbol: "R",
  },
  GREEN: {
    color: "#A3C095",
    label: "Green",
    symbol: "G",
  },
  MULTICOLOR: {
    color: "linear-gradient(135deg, #F8F6D8, #C1D7E9, #CAC5C0, #E49977, #A3C095)",
    label: "Multicolor",
    symbol: "M",
  },
  COLORLESS: {
    color:
      "repeating-conic-gradient( #CAC5C0 0% 25%, #ffffff 25% 50%, #CAC5C0 50% 75%, #ffffff 75% 100%)",
    label: "Colorless",
    symbol: "C",
  },
};

const MTG_RARITY = {
  COMMON: {
    color: "#16161D",
    label: "Common",
    symbol: "C",
  },
  UNCOMMON: {
    color: "#6C848C",
    label: "Uncommon",
    symbol: "U",
  },
  RARE: {
    color: "#C19C00",
    label: "Rare",
    symbol: "R",
  },
  MYTHIC: {
    color: "#F64800",
    label: "Mythic",
    symbol: "M",
  },
};

const BOOSTER_COUNT = 24;

const SIMULATOR_COLOR_ORDER = [
  MTG_COLOR.WHITE.label,
  MTG_COLOR.BLUE.label,
  MTG_COLOR.BLACK.label,
  MTG_COLOR.RED.label,
  MTG_COLOR.GREEN.label,
  MTG_COLOR.MULTICOLOR.label,
  MTG_COLOR.COLORLESS.label,
];

/**
 * Library source as of 2026-06-01 (ManaBox).
 *
 * Total should equal 523 (excluding 10 SPG cards, 400 basic lands, 0 and non-playable cards).
 */
const BLB_LIBRARY_BREAKDOWN = {
  [MTG_RARITY.COMMON.label]: {
    [MTG_COLOR.WHITE.label]: 39,
    [MTG_COLOR.BLUE.label]: 39,
    [MTG_COLOR.BLACK.label]: 39,
    [MTG_COLOR.RED.label]: 39,
    [MTG_COLOR.GREEN.label]: 39,
    [MTG_COLOR.MULTICOLOR.label]: 30,
    [MTG_COLOR.COLORLESS.label]: 12 + 6, // colorless + non-basic lands
  },
  [MTG_RARITY.UNCOMMON.label]: {
    [MTG_COLOR.WHITE.label]: 32,
    [MTG_COLOR.BLUE.label]: 32,
    [MTG_COLOR.BLACK.label]: 32,
    [MTG_COLOR.RED.label]: 32,
    [MTG_COLOR.GREEN.label]: 32,
    [MTG_COLOR.MULTICOLOR.label]: 20,
    [MTG_COLOR.COLORLESS.label]: 10 + 10, // colorless + non-basic lands
  },
  [MTG_RARITY.RARE.label]: {
    [MTG_COLOR.WHITE.label]: 8,
    [MTG_COLOR.BLUE.label]: 9,
    [MTG_COLOR.BLACK.label]: 8,
    [MTG_COLOR.RED.label]: 9,
    [MTG_COLOR.GREEN.label]: 10,
    [MTG_COLOR.MULTICOLOR.label]: 13,
    [MTG_COLOR.COLORLESS.label]: 0 + 3, // colorless + non-basic lands
  },
  [MTG_RARITY.MYTHIC.label]: {
    [MTG_COLOR.WHITE.label]: 3,
    [MTG_COLOR.BLUE.label]: 3,
    [MTG_COLOR.BLACK.label]: 3,
    [MTG_COLOR.RED.label]: 3,
    [MTG_COLOR.GREEN.label]: 2,
    [MTG_COLOR.MULTICOLOR.label]: 6,
    [MTG_COLOR.COLORLESS.label]: 0, // no mythic colorless cards
  },
};

/**
 * Play Booster contents (ignoring basic land and non-playable card slots).
 *
 * - Play booster contents info sourced from [Collecting Bloomburrow](https://magic.wizards.com/en/news/feature/collecting-bloomburrow).
 * - Rarity slot distribution info sourced from:
 *    - [MTG Wiki - Play Booster](https://mtg.fandom.com/wiki/Play_Booster).
 *    - Play Booster packaging: "Includes 1-4 cards of rarity Rare or higher (2: 23%, 3: 1%, 4: <1%) and 3-5 Uncommon, 6-9 Common, and 1 Land cards."
 */
const PLAY_BOOSTER_CONTENTS = {
  slots: [
    [
      {
        description: "Common",
        percentage: 100,
        rarity: MTG_RARITY.COMMON.label,
      },
    ],
    [
      {
        description: "Common",
        percentage: 100,
        rarity: MTG_RARITY.COMMON.label,
      },
    ],
    [
      {
        description: "Common",
        percentage: 100,
        rarity: MTG_RARITY.COMMON.label,
      },
    ],
    [
      {
        description: "Common",
        percentage: 100,
        rarity: MTG_RARITY.COMMON.label,
      },
    ],
    [
      {
        description: "Common",
        percentage: 100,
        rarity: MTG_RARITY.COMMON.label,
      },
    ],
    [
      {
        description: "Common",
        percentage: 100,
        rarity: MTG_RARITY.COMMON.label,
      },
    ],
    [
      {
        description: "Common or The List",
        percentage: 98.5,
        rarity: MTG_RARITY.COMMON.label,
      },
      {
        description: "Common or The List",
        percentage: 1.5,
        rarity: MTG_RARITY.MYTHIC.label,
      },
    ],
    [
      {
        description: "Uncommon",
        percentage: 100,
        rarity: MTG_RARITY.UNCOMMON.label,
      },
    ],
    [
      {
        description: "Uncommon",
        percentage: 100,
        rarity: MTG_RARITY.UNCOMMON.label,
      },
    ],
    [
      {
        description: "Uncommon",
        percentage: 100,
        rarity: MTG_RARITY.UNCOMMON.label,
      },
    ],
    [
      {
        description: "Rare or mythic rare",
        percentage: 87.5,
        rarity: MTG_RARITY.RARE.label,
      },
      {
        description: "Rare or mythic rare",
        percentage: 12.5,
        rarity: MTG_RARITY.MYTHIC.label,
      },
    ],
    [
      {
        description: "Wildcard of any rarity",
        percentage: 59.5,
        rarity: MTG_RARITY.COMMON.label,
      },
      {
        description: "Wildcard of any rarity",
        percentage: 27.5,
        rarity: MTG_RARITY.UNCOMMON.label,
      },
      {
        description: "Wildcard of any rarity",
        percentage: 11,
        rarity: MTG_RARITY.RARE.label,
      },
      {
        description: "Wildcard of any rarity",
        percentage: 2,
        rarity: MTG_RARITY.MYTHIC.label,
      },
    ],
    [
      {
        description: "Wildcard of any rarity",
        percentage: 64.5,
        rarity: MTG_RARITY.COMMON.label,
      },
      {
        description: "Wildcard of any rarity",
        percentage: 25,
        rarity: MTG_RARITY.UNCOMMON.label,
      },
      {
        description: "Wildcard of any rarity",
        percentage: 9,
        rarity: MTG_RARITY.RARE.label,
      },
      {
        description: "Wildcard of any rarity",
        percentage: 1.5,
        rarity: MTG_RARITY.MYTHIC.label,
      },
    ],
  ],
};

function createCubeState() {
  const cube = {};

  for (const rarity of Object.keys(BLB_LIBRARY_BREAKDOWN)) {
    cube[rarity] = { ...BLB_LIBRARY_BREAKDOWN[rarity] };
  }

  return cube;
}

function pickFromCube(cube, rarity) {
  const pool = cube[rarity];

  const entries = Object.entries(pool).filter(([, count]) => count > 0);

  if (entries.length === 0) {
    return MTG_COLOR.COLORLESS.label; // fallback safety
  }

  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  let roll = Math.random() * total;

  for (const [color, count] of entries) {
    roll -= count;

    if (roll <= 0) {
      cube[rarity][color]--;
      return color;
    }
  }

  const last = entries[entries.length - 1][0];
  cube[rarity][last]--;
  return last;
}

function generatePackRarities() {
  return PLAY_BOOSTER_CONTENTS.slots.map((slot) => {
    return slot.length === 1
      ? slot[0].rarity
      : weightedChoice(
          slot.map((option) => ({
            value: option.rarity,
            weight: option.percentage,
          })),
        );
  });
}

function weightedChoice(options) {
  const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);

  const roll = Math.random() * totalWeight;

  let cumulative = 0;

  for (const option of options) {
    cumulative += option.weight;

    if (roll <= cumulative) {
      return option.value;
    }
  }

  return options[options.length - 1].value;
}

function generatePack(cube) {
  const rarities = generatePackRarities();

  return rarities.map((rarity) => ({
    rarity,
    color: pickFromCube(cube, rarity),
  }));
}

function generateDraft() {
  const cube = createCubeState();

  const packs = [];

  for (let i = 0; i < BOOSTER_COUNT; i++) {
    packs.push(generatePack(cube));
  }

  return {
    packs,
    cube,
  };
}

function computeDemandSupply(draft, cube) {
  const demand = {};
  const supply = {};

  // count demand from draft
  for (const pack of draft) {
    for (const card of pack) {
      const r = card.rarity;
      const c = card.color;

      demand[r] = demand[r] || {};
      demand[r][c] = (demand[r][c] || 0) + 1;
    }
  }

  // remaining supply from cube
  for (const rarity of Object.keys(cube)) {
    supply[rarity] = { ...cube[rarity] };
  }

  return { demand, supply };
}

function evaluatePackScore(pack) {
  const required = [
    MTG_COLOR.WHITE.label,
    MTG_COLOR.BLUE.label,
    MTG_COLOR.BLACK.label,
    MTG_COLOR.RED.label,
    MTG_COLOR.GREEN.label,
    MTG_COLOR.MULTICOLOR.label,
  ];

  const seen = new Set(pack.map((c) => c.color));

  let missing = 0;

  for (const color of required) {
    if (!seen.has(color)) missing++;
  }

  return missing;
}

function renderDraftGrid(draft) {
  const container = document.getElementById("draft-grid");
  container.innerHTML = "";

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  const svgNS = "http://www.w3.org/2000/svg";
  const defsId = "card-shape";

  /**
   * SVG SYMBOL (only inject once)
   */
  if (!document.querySelector(`#${defsId}`)) {
    const svgDefs = document.createElementNS(svgNS, "svg");
    svgDefs.setAttribute("style", "display:none");

    const symbol = document.createElementNS(svgNS, "symbol");
    symbol.setAttribute("id", defsId);
    symbol.setAttribute("viewBox", "0 0 800 800");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
      "d",
      "M399.3 111.2c-.4.7-2.2 4.4-4.1 8.2-6.7 14.1-17.9 29.4-31.2 42.6-6.9 6.9-14 13.7-15.9 15-1.9 1.4-3.9 3-4.5 3.5-4.2 4-16.6 11.5-31.8 19.3l-10.7 5.5 4.2 8.1c5.5 10.6 10.7 23.5 13.2 33.1 2.9 11.1 3.6 22.9 1.8 32.6-1.9 10.3-5.7 17.5-13.7 25.4-9.4 9.3-16.6 12.9-34.6 17.2-1.4.4-7.2.6-13 .7-15.7 0-24.6-3.8-35.3-14.9-4.3-4.5-10.3-15.2-12.8-22.5-2.8-8.4-3.9-14.5-4.6-25-.2-4.7-.9-8.9-1.4-9.4-.5-.6-2.3-.5-4.6.2-7 2-11.8 3.1-16.3 3.7-2.4.4-4.7.8-5 1-1.2.7-19.3 2-29 2-10.8 0-27.8-1.3-29.4-2.3-.5-.3-2.3-.6-4-.8-3.3-.4-8.7-1.8-15.1-4-6.2-2.1-6.7-1.9-6 2.3.4 2.1.9 4.5 1.2 5.3.4.8.8 2.8 1 4.5.3 1.6.8 3.5 1.3 4 .5.6 1.1 2.8 1.4 5 .3 2.2 1.1 7.4 1.8 11.5 2.1 12.8 1.5 52.3-.9 56.3-.2.4-.6 2-.9 3.5-.3 1.5-.7 3.4-1.1 4.2-.3.8-.7 2.2-.9 3-.2.8-.8 2.4-1.3 3.7-.6 1.3-1.5 3.3-2 4.5-.5 1.3-1.3 3.5-1.9 5-1 2.5-.9 2.7 1.8 3.3 1.6.4 3.2.6 3.5.6.2 0 1.9.5 3.7 1 1.8.6 4.1 1.2 5.1 1.4 4.1.9 17.6 5.9 22.2 8.2 8.1 4.2 13.6 8.2 21 15.7 13.4 13.5 20 30.6 20 51.2-.1 12.9-2.5 21.3-9.8 33.7-2.3 3.8-18.3 20.7-19.7 20.7-.4 0-2 1.1-3.6 2.5s-3.4 2.5-4 2.5c-.6 0-1.9.9-2.8 1.9-1.7 1.9-1.7 2.3.8 9.8 1.4 4.3 2.8 8.9 3.1 10.3.2 1.4.9 4.5 1.5 7 1.7 7.9 2 9.4 2.7 14 1.8 11.4.5 46.7-1.9 50.6-1.6 2.5 1.3 3.2 15.2 3.9 8 .4 14.7.8 15.1 1 .3.2 2.8.7 5.5 1 16.3 2.1 32.5 7.9 50.3 18 2.2 1.2 2.9 1 10-3.8 9.9-6.7 10.1-6.9 20.1-11.7 14.2-7 22.8-9.8 38.5-12.9 6.2-1.2 37.1-1.3 41.6-.1 1.9.5 4.8 1.1 6.4 1.4 4.3.7 14.7 3.5 17 4.6 15.7 7.1 19.1 7.6 17.5 2.1-1.2-3.9-10.1-22.5-15.2-31.6-2.5-4.4-5.7-10.3-7.3-13-26.8-47.9-78.4-113.9-130.2-166.6-7.8-8-14.3-14.9-14.3-15.4s1.2.3 2.8 1.6c1.5 1.4 9.5 8.6 17.7 15.9 36.5 32.6 83 81.8 111.1 117.5 15.2 19.3 36.7 50.3 43.3 62.5 9.5 17.3 10.1 17.5 10.1 3.2 0-6 .9-42.8 2-81.8s2.4-88.5 3-109.9c.5-21.5 1.2-45.5 1.5-53.5.2-8 .7-26.3 1.1-40.8.4-14.4.9-26.1 1.1-25.9.4.5 1 17.8 1.8 49.2.7 29.2 1.4 53.8 2 73.5.3 8.5.7 25.2 1 37 .5 21.3 1.2 45.1 2 71 .2 7.4.8 25.6 1.2 40.5.4 14.8.7 28.6.8 30.5 0 1.9.2 7.4.3 12.2.1 4.9.6 8.8 1 8.8.5 0 1.9-1.9 3.2-4.3 22.9-41.1 59.5-89 100.4-131.4 6.2-6.5 12.5-13.2 13.9-14.9 5.6-6.6 60.5-57.4 64.7-59.9.8-.4-3.2 4.1-9 10.1-60 62.1-101 114.6-135.1 172.4-9.1 15.5-19.9 39.1-19.9 43.3.1 3.5 1.6 3.8 7.1 1.4 9.9-4.4 19.1-7.2 31.9-9.7 6.3-1.2 35-1.2 40.7 0 2.1.5 5.2 1.1 6.8 1.4 4.8.8 14.7 3.5 18 5 1.7.7 6.2 2.6 10 4.1 3.9 1.6 7.5 3.2 8 3.6.6.4 3.3 1.9 6 3.4 2.8 1.5 8 4.9 11.7 7.6l6.8 4.9 3.2-2c8-4.9 24.3-11.8 31.8-13.5.8-.2 3-.8 4.8-1.4 1.8-.5 3.5-1 3.7-1 .3 0 1.5-.3 2.8-.6 1.2-.2 3.6-.6 5.2-.9 1.7-.2 4.8-.7 7-1.1 4.5-.7 13.7-1.2 23.8-1.4l6.9-.1-.6-2.7c-.4-1.6-.9-3.9-1.2-5.3-2.9-13.3-2.6-38 .6-54 1.2-5.7 2.4-10.8 2.7-11.3.3-.4.7-2.3 1-4 .2-1.8.9-3.6 1.4-4.2.5-.5.9-1.9.9-3.1 0-1.3.4-2.5.9-2.8.5-.3 1.1-1.9 1.3-3.6.4-2.7 0-3.3-4.5-6.1-6.6-4-7-4.4-15.1-12.4-12.8-12.6-16.7-19.2-20.5-34.7-2.9-11.8-2.8-15.6 1-31.8 1.3-5.4 1.8-6.8 5.5-14.5 6.2-12.8 16.6-23.4 29.9-30.5 1.7-.9 3.9-2.1 5-2.7 1.1-.6 3.1-1.5 4.5-2.1 1.4-.5 4.2-1.7 6.2-2.6 2-.9 5.1-1.9 7-2.2 1.8-.3 4.2-.9 5.3-1.4 1.1-.5 4.4-1.4 7.3-2 2.8-.7 5.2-1.4 5.2-1.6 0-.3-.7-1.8-1.5-3.4-.9-1.7-1.3-3-1-3 .3 0 0-1-.7-2.3-.6-1.2-1.3-3.1-1.5-4.1-.2-1.1-.8-2.4-1.3-3-.5-.7-1.1-2.3-1.3-3.6-.2-1.4-.6-3.2-1-4-.5-1.4-.8-3-2.7-16-.7-5.3-.5-32.8.3-38 .3-1.4.7-4.1 1.1-6 .3-1.9.8-4.7 1-6.3.3-1.5.7-3.5 1-4.5.3-.9.7-2.8 1-4.2.5-2.7 1.3-5.8 2.2-9.3.3-1.2.8-3.7 1.1-5.4.5-3.3.5-3.3-2.8-2.7-1.9.4-3.8 1-4.4 1.4-1 .7-3.8 1.4-12.5 2.8-2.5.4-5 1.1-5.5 1.4-1.6 1-18.3 2.3-29 2.3-10 0-28.3-1.3-29.7-2.2-.4-.2-2.9-.7-5.5-1-2.7-.3-5.6-1-6.5-1.5-1-.5-1.8-.7-1.8-.4 0 .3-2.1-.1-4.7-.9-7.1-2.2-7.3-2.1-7.3 3.1 0 11.5-3.9 27.8-9.4 39.4-3.7 7.8-4.6 9-11.4 15.7-13.1 12.9-31.4 16.2-54 9.7-26.9-7.8-41-25.5-41-51.2 0-12 3.6-27.4 9.5-41.2 2.9-6.6 8.2-17.2 9.4-18.6 2.2-2.7 1.1-3.7-10.1-8.8-6.5-3-16.5-8.7-18.2-10.4-.7-.7-1.8-1.2-2.5-1.2s-1.3-.5-1.3-1c0-.6-.7-1-1.5-1s-1.5-.3-1.5-.8c0-.4-1.8-1.8-4-3.2-2.2-1.4-4-2.8-4-3.2 0-.4-.9-.9-1.9-1.3-3.1-.9-25.8-24.1-32.3-32.9-6.8-9.1-15.8-24.1-18.3-30.4-1.8-4.3-2.8-5.1-4.2-3zM401.8 631c-.3.8-1.3 7.3-2.3 14.4-2.1 15.7-7.1 37.4-12 52.1-5.8 17.5-12.9 31.4-23.1 45.2-1.5 2.1-1.5 2.5-.1 4.7 2.8 4.2 23.5 25.2 30.7 31.1l7 5.7 4.7-4c6.3-5.2 34.3-33.8 34.3-35 0-1.2-6.3-9.2-7.2-9.2-.4 0-.8-.6-.8-1.4 0-.7-.7-1.9-1.5-2.6-.9-.7-2.2-2.9-3.1-4.9-.9-2-2.9-6.8-4.6-10.6-4.4-10.1-4.4-10.1-7.7-20.5-5.7-18.1-11.8-46.9-13.4-63-.2-2-.5-2.8-.9-2z",
    );

    symbol.appendChild(path);
    svgDefs.appendChild(symbol);
    document.body.appendChild(svgDefs);
  }

  /**
   * ROWS (packs)
   */
  const maxSlots = Math.max(...draft.map((pack) => pack.length));

  draft.forEach((pack, packIndex) => {
    const row = document.createElement("tr");

    const rowHeader = document.createElement("th");
    rowHeader.textContent = packIndex + 1;
    row.appendChild(rowHeader);

    for (let slot = 0; slot < maxSlots; slot++) {
      const cell = document.createElement("td");

      const card = pack[slot];

      if (card) {
        // background color
        cell.style.background = MTG_COLOR[card.color.toUpperCase()].color;
        if (card.color === MTG_COLOR.COLORLESS.label) {
          cell.style.backgroundSize = "10px 10px";
        }

        // readable text color
        cell.style.color = card.color === MTG_COLOR.BLACK.label ? "#fff" : "#000";

        cell.style.fontWeight = "600";

        // SVG rarity icon
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "24");
        svg.setAttribute("height", "24");
        svg.setAttribute("fill", MTG_RARITY[card.rarity.toUpperCase()].color);

        const use = document.createElementNS(svgNS, "use");
        use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${defsId}`);

        svg.appendChild(use);
        cell.appendChild(svg);
      } else {
        cell.textContent = "-";
        cell.style.opacity = "0.3";
      }

      row.appendChild(cell);
    }

    const resultCell = document.createElement("td");

    const packScore = evaluatePackScore(pack);

    resultCell.textContent =
      packScore === 0
        ? "Contains all colors"
        : `Missing ${packScore} color${packScore > 1 ? "s" : ""}`;

    resultCell.style.fontWeight = "700";
    resultCell.style.background =
      packScore === 0 ? "#d4edda" : packScore === 1 ? "#fff3cd" : "#f8d7da";
    resultCell.style.color = packScore === 0 ? "#155724" : packScore === 1 ? "#856404" : "#721c24";
    resultCell.style.border = "1px solid #ccc";
    resultCell.style.padding = "6px";

    row.appendChild(resultCell);

    table.appendChild(row);
  });

  container.appendChild(table);
}

function renderDemandSupplyReport(report) {
  const container = document.getElementById("demand-supply-report");
  container.innerHTML = "";

  const table = document.createElement("table");

  const header = document.createElement("tr");
  ["Rarity", "Color", "Needed", "Remaining", "Surplus"].forEach((h) => {
    const th = document.createElement("th");
    th.textContent = h;
    header.appendChild(th);
  });

  table.appendChild(header);

  for (const rarity of Object.keys(report.demand)) {
    for (const color of Object.keys(report.demand[rarity])) {
      const needed = report.demand[rarity][color] || 0;
      const remaining = report.supply?.[rarity]?.[color] || 0;
      const surplus = remaining - needed;

      const row = document.createElement("tr");

      [rarity, color, needed, remaining, surplus].forEach((v) => {
        const td = document.createElement("td");
        td.textContent = v;
        row.appendChild(td);
      });

      table.appendChild(row);
    }
  }

  container.appendChild(table);
}

function getExpectedColorDistribution() {
  const totals = {};
  let grandTotal = 0;

  for (const rarity of Object.values(BLB_LIBRARY_BREAKDOWN)) {
    for (const [color, count] of Object.entries(rarity)) {
      totals[color] = (totals[color] || 0) + count;
      grandTotal += count;
    }
  }

  return Object.fromEntries(
    Object.entries(totals).map(([color, count]) => [color, (count / grandTotal) * 100]),
  );
}

function drawCard(cube, rarity) {
  const pool = cube[rarity];

  const options = Object.entries(pool)
    .filter(([, count]) => count > 0)
    .map(([color, count]) => ({
      value: color,
      weight: count,
    }));

  if (!options.length) return null;

  const color = weightedChoice(options);

  cube[rarity][color]--;

  return { rarity, color };
}

function generateDepletedPack(cube) {
  const rarities = generatePackRarities();

  const pack = [];

  for (const rarity of rarities) {
    const card = drawCard(cube, rarity);

    // fallback if cube runs dry (important for long sims)
    if (card) {
      pack.push(card);
    }
  }

  return pack;
}

function runSimulation(packCount = 10000) {
  const cube = createCubeState();

  const results = {
    color: {},
    totalCards: 0,
    depleted: false,
  };

  for (let i = 0; i < packCount; i++) {
    const pack = generateDepletedPack(cube);

    if (!pack.length) {
      results.depleted = true;
      break;
    }

    for (const card of pack) {
      results.totalCards++;

      results.color[card.color] = (results.color[card.color] || 0) + 1;
    }
  }

  return results;
}

function renderSimulation(results) {
  const container = document.getElementById("simulation-results");
  container.innerHTML = "";

  const expected = getExpectedColorDistribution();

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  // header
  const header = document.createElement("tr");

  ["Color", "Expected %", "Actual %", "Delta"].forEach((h) => {
    const th = document.createElement("th");
    th.textContent = h;
    th.style.border = "1px solid #ccc";
    th.style.padding = "6px";
    header.appendChild(th);
  });

  table.appendChild(header);

  // rows in fixed order
  SIMULATOR_COLOR_ORDER.forEach((color) => {
    const actualCount = results.color[color] || 0;
    const actualPct = (actualCount / results.totalCards) * 100;

    const expectedPct = expected[color] || 0;
    const delta = actualPct - expectedPct;

    const row = document.createElement("tr");

    const cells = [
      color,
      expectedPct.toFixed(2) + "%",
      actualPct.toFixed(2) + "%",
      (delta >= 0 ? "+" : "") + delta.toFixed(2) + "%",
    ];

    cells.forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      td.style.border = "1px solid #ccc";
      td.style.padding = "6px";
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  container.appendChild(table);
}

document.getElementById("run-simulation").addEventListener("click", () => {
  const results = runSimulation(10000);
  renderSimulation(results);
});

const { packs, cube } = generateDraft();

renderDraftGrid(packs);

const report = computeDemandSupply(packs, cube);
renderDemandSupplyReport(report);
