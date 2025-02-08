function judgeSquareSum(c: number): boolean {
    function calcHypotenuse(a: number, b: number) {
      return a * a + b * b;
    }
  
    let a = Math.round(Math.sqrt(c));
    let b = 0;
    while (a >= b) {
        const hypotenuse = calcHypotenuse(a, b)
        if (hypotenuse == c) {
          return true;
        }
        if (hypotenuse < c) {
          b++;
        } else {
          a--;
        }
  
    }
  
    return false;
  };