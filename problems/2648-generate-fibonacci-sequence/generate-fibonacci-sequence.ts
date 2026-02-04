function* fibGenerator(): Generator<number, any, number> {
  let f1 = 0;
  let f2 = 1;

  while (true) {
    yield f1;
    [f1, f2] = [f2, f1 + f2];
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
