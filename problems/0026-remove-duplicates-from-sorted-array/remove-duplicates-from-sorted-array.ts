function removeDuplicates(nums: number[]): number {
    let k = nums.length;
    if (k == 1) {
        return k;
    }
    let i = 1, j = 1;
    while (j < k) {
        if (nums[j] != nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};