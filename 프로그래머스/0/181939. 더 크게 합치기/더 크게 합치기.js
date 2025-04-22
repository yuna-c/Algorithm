// function solution(a, b) {
//     let ab = Number(`${a}${b}`);
//     let ba = Number(`${b}${a}`);
//     return ab >= ba ? ab : ba;
// }

const solution = (a, b) => Math.max(Number(`${a}${b}`), Number(`${b}${a}`));