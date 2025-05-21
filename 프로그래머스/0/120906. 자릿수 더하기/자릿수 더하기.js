function solution(n) {
    let answer = n.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
    return answer;
}