// function solution(n, k) {
//     let free = Math.floor(n/10);
//     let bill = (n * 12000) + ((k - free) * 2000)
//     return bill;
// }

// function solution(n, k) {
//     k -= Math.floor(n / 10);
//     return (n * 12000) + (k * 2000);
// }

// 1.10인분 서비스 1개
function solution (n, k){
    let free = Math.floor(n/10)
    let cost = (n * 12000) + ((k - free) * 2000)
    return cost
} 