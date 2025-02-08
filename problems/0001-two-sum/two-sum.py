class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i in range(len(nums)):
            rest = target - nums[i]
            idx = map.get(nums[i])
            map[rest] = i
            if idx != None  and idx != i:
                return [idx, i]
                