type ZeroEvenOdd struct {
	n    int
	zero chan struct{}
	even chan struct{}
	odd  chan struct{}
}

func NewZeroEvenOdd(n int) *ZeroEvenOdd {
	zeo := &ZeroEvenOdd{
		n:    n,
		zero: make(chan struct{}, 1),
		even: make(chan struct{}),
		odd:  make(chan struct{}),
	}
	zeo.zero <- struct{}{}
	return zeo
}

func (z *ZeroEvenOdd) Zero(printNumber func(int)) {
	for i := 1; i <= z.n; i++ {
		<-z.zero
		printNumber(0)
		if i%2 == 1 {
			z.odd <- struct{}{}
		} else {
			z.even <- struct{}{}
		}
	}
}

func (z *ZeroEvenOdd) Even(printNumber func(int)) {
	for i := 2; i <= z.n; i += 2 {
		<-z.even
		printNumber(i)
		z.zero <- struct{}{}
	}

}

func (z *ZeroEvenOdd) Odd(printNumber func(int)) {
	for i := 1; i <= z.n; i += 2 {
		<-z.odd
		printNumber(i)
		z.zero <- struct{}{}
	}
}