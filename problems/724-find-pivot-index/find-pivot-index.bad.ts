function pivotIndex(nums: number[]): number {
    for (let pivotIndex = 0; pivotIndex < nums.length; pivotIndex++) {
        const left = nums.slice(0, pivotIndex).reduce((acc, cur) => acc + cur, 0);
        const right = nums.slice(pivotIndex + 1).reduce((acc, cur) => acc + cur, 0);

        if (left === right) return pivotIndex;
    }

    return -1
};