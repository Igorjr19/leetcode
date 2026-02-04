type FooBar struct {
	n   int
	foo chan struct{}
	bar chan struct{}
}

func NewFooBar(n int) *FooBar {
	fb := &FooBar{
		n:   n,
		foo: make(chan struct{}, 1),
		bar: make(chan struct{}, 1),
	}
	fb.foo <- struct{}{}
	return fb
}

func (fb *FooBar) Foo(printFoo func()) {
	for i := 0; i < fb.n; i++ {
		<-fb.foo
		printFoo()
		fb.bar <- struct{}{}
	}
}

func (fb *FooBar) Bar(printBar func()) {
	for i := 0; i < fb.n; i++ {
		<-fb.bar
		printBar()
		fb.foo <- struct{}{}
	}
}