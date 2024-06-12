function solution(numbers) {
    const answer = numbers.reduce((acc, cur) => acc + cur, 0);
    return answer / numbers.length;
}