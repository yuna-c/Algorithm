function solution(n) {
//     let answer = 0;
//     let sqrt = Math.sqrt(n); //제곱식 구하기
//     console.log(sqrt);
    
//     if(sqrt % 1 === 0){ answer += Math.pow(sqrt+1,2); } //제곱근일 경우
//     else{ answer = -1; } //제곱근이 아닐 경우
//     console.log(answer);
    
//     return answer;
    
    return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n)+1,2) : -1;
}

console.log("결과 : " + solution(121));
console.log("결과 : " + solution(3));