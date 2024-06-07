function solution(num1, num2) {
    let answer = 0;
    if(0 <= num1 && num1 <= 100 && 0 <= num2 && num2 <= 100){
        answer = Math.floor(num1 / num2);
        return answer;
    } else {
        alert("❌");
    }
}

solution(10,5);
solution(7,2);