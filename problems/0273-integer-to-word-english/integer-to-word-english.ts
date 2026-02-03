type NumberWord = Record<number, string>;

const belowTwenty: NumberWord = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
};

const tens: NumberWord = {
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
};

const thousands: NumberWord = {
  100: "Hundred",
  1000: "Thousand",
  1000000: "Million",
  1000000000: "Billion",
};

function numberToParts(num: number): number[] {
  if (num === 0) return [];

  const parts: number[] = [];

  if (num >= 1e9) {
    const billions = Math.floor(num / 1e9);
    parts.push(...numberToParts(billions));
    parts.push(1e9);
    parts.push(...numberToParts(num % 1e9));
    return parts;
  }

  if (num >= 1e6) {
    const millions = Math.floor(num / 1e6);
    parts.push(...numberToParts(millions));
    parts.push(1e6);
    parts.push(...numberToParts(num % 1e6));
    return parts;
  }

  if (num >= 1e3) {
    const thousandsPart = Math.floor(num / 1e3);
    parts.push(...numberToParts(thousandsPart));
    parts.push(1e3);
    parts.push(...numberToParts(num % 1e3));
    return parts;
  }

  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    parts.push(hundreds);
    parts.push(100);
    parts.push(...numberToParts(num % 100));
    return parts;
  }

  if (num >= 20) {
    const tensPart = Math.floor(num / 10) * 10;
    parts.push(tensPart);
    parts.push(...numberToParts(num % 10));
    return parts;
  }

  return [num];
}

function mapToWord(num: number): string | null {
  if (belowTwenty[num]) return belowTwenty[num];
  if (tens[num]) return tens[num];
  if (thousands[num]) return thousands[num];
  return null;
}

function numberToWords(num: number): string {
  const parts = numberToParts(num);
  if (parts.length === 0) return mapToWord(0)!;
  return parts.map(mapToWord).join(" ");
}
