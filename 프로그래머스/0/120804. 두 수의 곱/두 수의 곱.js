function solution(num1, num2) {
    let answer = 0;
    if(0 <= num1 && num2 <= 100){
        answer = num1 * num2;
        return answer;
    } else {
        alert("❌");
    }
    
}
solution(3,4);
solution(27,19);