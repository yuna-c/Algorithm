// 1.num1/num2 나눈다
// 2.*1000을 곱한다
// 3.소숫점을 버린다
function solution(num1, num2) {
    const answer = Math.floor((num1/num2)* 1000)
    return answer;
}
