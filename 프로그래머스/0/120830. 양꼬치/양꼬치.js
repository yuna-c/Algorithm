function solution(n, k) {
    let free = Math.floor(n/10);
    let bill = (n * 12000) + ((k - free) * 2000)
    return bill;
}