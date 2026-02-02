import (
	"math"
	"strings"
)

func myAtoi(s string) int {
	min32 := int(math.MinInt32)
	max32 := int(math.MaxInt32)

	s = strings.TrimSpace(s)

	if len(s) == 0 {
		return 0
	}

	i := 0

	sign := 1
	if s[0] == '-' {
		sign = -1
		i++
	} else if s[0] == '+' {
		i++
	}

	t := 0
	for i < len(s) {
		if sign == 1 && t > max32 {
			return int(max32)
		}

		if sign == -1 && -t < min32 {
			return int(min32)
		}

		if s[i] < '0' || s[i] > '9' {
			break
		}

		c := int(s[i] - '0')
		t = t*10 + c

		i++
	}

	if sign == 1 && t > max32 {
		return int(max32)
	}
	if sign == -1 && -t < min32 {
		return int(min32)
	}

	return int(t) * sign
}
