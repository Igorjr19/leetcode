function convert(s: string, numRows: number): string {
    if (numRows == 1) {
        return s;
    }

    let table: Array<Array<string>> = Array.from({ length: numRows }, () => []);
    let row = 0;
    let col = 0;
    let down = true;
    for (let i = 0; i < s.length; i++) {
        if (row === 0) {
            down = true;
        }

        if (row === numRows - 1) {
            down = false;
        }

        table[row].push(s[i]);
        if (down) {
            row++;
        } else {
            row--;
            col++;
        }
    }

    let result = '';
    for (let i = 0; i < table.length; i++) {
        result += table[i].join('');
    }
    return result;
}