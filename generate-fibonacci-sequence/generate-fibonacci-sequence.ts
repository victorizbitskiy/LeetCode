function* fibGenerator(): Generator<number, any, number> {
    yield 0;
    yield 1;

    let previous = 0;
    let current = 1;

    while (true) {
        const next = previous + current;
        previous = current;
        current = next;
        yield next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */