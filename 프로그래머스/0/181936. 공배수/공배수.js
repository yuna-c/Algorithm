// function solution(number, n, m) {
//     return number % n === 0 && number % m === 0 ? 1 : 0;
// }
// +(숫자로 바꿔줌) !논리 연산자 부정(1true/0false) 
const solution = (number, n, m) => (number % n === 0 && number % m === 0) ? 1 : 0;