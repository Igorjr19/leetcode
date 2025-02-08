function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const rest = target - nums[i];
        const idx = map.get(nums[i]);
        map.set(rest, i);
        if (idx != undefined && idx != i) {
            return [idx, i];
        }
    }
};