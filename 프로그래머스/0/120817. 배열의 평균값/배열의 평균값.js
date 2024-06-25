function solution(numbers) {
    // const answer = numbers.reduce((acc, cur) => acc + cur, 0);
    // return answer / numbers.length;
    
    let answer = 0;
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i] / numbers.length;
    }
    return answer;
}