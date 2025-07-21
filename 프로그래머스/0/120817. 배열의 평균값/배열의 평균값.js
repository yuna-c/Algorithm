// const answer = numbers.reduce((acc, cur) => acc + cur, 0);
// return answer / numbers.length;

function solution(n) {
    let answer = 0;
    for(let i = 0; i < n.length; i++){
         answer += n[i] / n.length
        // n[i] n의 i번째 요소를 배열의 길이로 나누고 누적덧셈
    }
        
    return answer;
}
