function reverse(x: number): number {
  const isNegative = x < 0;
  let num = Math.abs(x);

  let reversedNum = 0;
  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    reversedNum = reversedNum * 10 + digit;
  }

  if (reversedNum > 2 ** 31 - 1) {
    return 0;
  }
  return isNegative ? -reversedNum : reversedNum;
}