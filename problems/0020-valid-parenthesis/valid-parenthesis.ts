
function isValid(s: string): boolean {
    const stack = [];
      for (let i = 0; i < s.length; i++) {
        const cur = s[i];
    
        if (cur == '{') {
          stack.push('}');
          continue;
        }
    
        if (cur == '(') {
          stack.push(')');
          continue;
        }
    
        if (cur == '[') {
          stack.push(']');
          continue;
        }
    
        const top = stack.pop();
        if (top !== cur) {
          return false;
        }
      }
      
      if (stack.length != 0) {
        return false;
      }
    
      return true;
    };