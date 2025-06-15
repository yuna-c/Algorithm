// function solution(price) {
//     if(price >= 500000) price = price * 0.8
//     else if(price >= 300000) price = price * 0.9
//     else if(price >= 100000) price = price * 0.95
//     return Math.floor(price);
// }

const solution = (price) => Math.floor(price >= 500000 ? price * 0.8 : price >= 300000 ? price * 0.9 : price >= 100000 ? price * 0.95 : price)
