// function solution(n) {
//     let answer = [];
//     for(let i = 1; i <= n; i++){
//         if(n % i === 0) answer.push(i)
//     }
//     return answer;
// }

// const solution = (n) => {
//     return Array(n) // 길이 n의 배열 생성
//         .fill(0) // 모든 요소를 0으로 채움
//         .map((x, i) => x + i + 1) // 1부터 n까지의 숫자 배열 생성
//         .filter((d) => n % d === 0); // n을 d로 나누었을 때 나머지가 0인 값만 필터링 (약수만 남김)
// }

const solution = (n) => {
    return Array(n)              // 길이 n짜리 배열 생성
        .fill(1)                 // 모든 요소를 1로 채움 (사실 어떤 값이든 상관없음)
        .map((_, i) => i + 1)    // 1부터 n까지 숫자 배열 생성
        .filter((d) => n % d === 0); // n의 약수만 필터링
}
