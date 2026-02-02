function lengthOfLastWord(s: string): number {
    return s.split(' ').filter((w) => Boolean(w)).at(-1).length;
};