function isPalindrome(x: number): boolean {
    const numAsString = x.toString();
    let l = 0;
    let r = numAsString.length - 1;
    while (r >= l) {
      if (numAsString.charAt(l) != numAsString.charAt(r)) {
        return false;
      }
      l++;
      r--;
    }
    return true;
};