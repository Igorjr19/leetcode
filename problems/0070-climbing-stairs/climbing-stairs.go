func climbStairs(n int) int {
	a, b := 1, 1
	for n > 0 {
		a, b = b, a+b
		n--
	}
	return a
}