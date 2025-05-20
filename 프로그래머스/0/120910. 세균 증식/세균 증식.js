function solution(n, t) {
    // let answer = n * Math.pow(2, t);
    // let answer = n * 2 ** t;
    let answer = n << t; // 비트 연산자
    return answer;
}