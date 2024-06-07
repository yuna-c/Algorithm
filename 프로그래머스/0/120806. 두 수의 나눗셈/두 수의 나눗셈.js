function solution(num1, num2) {
   let answer = 0;
    if (0 <= num1 && num2 <= 100) {
        answer = Math.floor((num1 / num2)*1000);
        return answer;
    } else{
        console.log('범위를 초과하였습니다.')
    }
}
