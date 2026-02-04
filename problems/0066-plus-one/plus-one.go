func plusOne(digits []int) []int {
	for i := len(digits) - 1; i >= 0; i-- {
		cur := digits[i] + 1

		if cur > 9 {
			digits[i] = 0
			if i-1 < 0 {
				digits = append([]int{1}, digits...)
				break
			}
			continue
		}

		digits[i] = cur
		break
	}

	return digits
}