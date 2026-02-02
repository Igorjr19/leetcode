func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sMatch := make(map[byte]byte)
	tMatch := make(map[byte]byte)
	for i := 0; i < len(s); i++ {
		sM := sMatch[s[i]]
		tM := tMatch[t[i]]

		if sM == 0 && tM == 0 {
			sMatch[s[i]] = t[i]
			tMatch[t[i]] = s[i]
			continue
		}

		if sM != t[i] || tM != s[i] {
			return false
		}
	}

	return true
}