interface UnitPower {
  unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  power: 0 | 1 | 2 | 3;
}

const unitPowerMap: Record<
  UnitPower["unit"],
  Record<UnitPower["power"], string>
> = {
  0: {
    0: "",
    1: "",
    2: "",
    3: "",
  },
  1: {
    0: "I",
    1: "X",
    2: "C",
    3: "M",
  },
  2: {
    0: "II",
    1: "XX",
    2: "CC",
    3: "MM",
  },
  3: {
    0: "III",
    1: "XXX",
    2: "CCC",
    3: "MMM",
  },
  4: {
    0: "IV",
    1: "XL",
    2: "CD",
    3: "MMMM",
  },
  5: {
    0: "V",
    1: "L",
    2: "D",
    3: "MMMMM",
  },
  6: {
    0: "VI",
    1: "LX",
    2: "DC",
    3: "MMMMMM",
  },
  7: {
    0: "VII",
    1: "LXX",
    2: "DCC",
    3: "MMMMMMM",
  },
  8: {
    0: "VIII",
    1: "LXXX",
    2: "DCCC",
    3: "MMMMMMMM",
  },
  9: {
    0: "IX",
    1: "XC",
    2: "CM",
    3: "MMMMMMMMM",
  },
};

function intToParts(num: number): UnitPower[] {
  const str = num.toString();
  const len = str.length;
  return str.split("").map((n, i) => ({
    unit: Number(n) as UnitPower["unit"],
    power: (len - i - 1) as UnitPower["power"],
  }));
}

function intToRoman(num: number): string {
  const parts = intToParts(num);
  const roman = parts.map((p) => unitPowerMap[p.unit][p.power]).join("");
  return roman;
}
