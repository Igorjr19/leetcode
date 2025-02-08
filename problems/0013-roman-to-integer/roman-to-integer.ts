const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  function romanToInt(s: string): number {
    let num = 0;
    let i = s.length - 1;
    let last = 0;
    while (i >= 0) {
      const cur = romanToIntMap[s.charAt(i) as keyof typeof romanToIntMap];
  
      if (cur < last) {
        num -= cur;
      } else {
        num += cur;
      }
      i--;
      last = cur;
    }
    return num;
  };