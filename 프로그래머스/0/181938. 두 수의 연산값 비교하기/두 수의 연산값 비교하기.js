function solution(a, b) {
    const plus = Number(`${a}${b}`);
    const multiply = 2 * a * b;
    return plus >= multiply ? plus : multiply;
}