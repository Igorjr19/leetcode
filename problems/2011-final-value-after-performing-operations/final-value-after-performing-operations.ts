function finalValueAfterOperations(operations: string[]): number {
    return operations.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.at(1) == '+' ? 1 : -1),
        0,
    );
};