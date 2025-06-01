function solution(numbers, num1, num2) {
    let answer = [];
     for (let i = num1; i < num2+1; i++) {
        answer.push(numbers[i])
    }
    
    // let answer = numbers.slice(num1, num2+1);

    return answer;
}