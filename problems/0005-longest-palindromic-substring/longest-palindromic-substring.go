func expandFromMiddle(s string, left int, right int) int {
	for left >= 0 && right < len(s) && s[left] == s[right] {
		left--
		right++
	}
	return right - left - 1
}

func longestPalindrome(s string) string {
	if len(s) < 1 {
		return ""
	}

	start, end := 0, 0

	for i := 0; i < len(s); i++ {
		len1 := expandFromMiddle(s, i, i)

		len2 := expandFromMiddle(s, i, i+1)

		maxLen := len1
		if len2 > maxLen {
			maxLen = len2
		}

		if maxLen > (end - start) {
			start = i - (maxLen-1)/2
			end = i + maxLen/2
		}
	}

	return s[start : end+1]
}
