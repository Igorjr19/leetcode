function longestCommonPrefix(strs: string[]): string {
    let lcp = strs.at(0)!;
    for (const str of strs.slice(1)) {
        lcp = lcp.slice(0, str.length);
        for (let i = 0; i < str.length; i++) {
            if (str[i] != lcp[i]) {
                lcp = lcp.slice(0, i);
                break;
            }
        }
        if (lcp === "") {
            break;
        }
    }
    return lcp;
};