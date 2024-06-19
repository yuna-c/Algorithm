function solution(seoul) {
    let answer = seoul.indexOf('Kim');
    // console.log(typeof + 'answer', answer);
    return "김서방은 " + answer + "에 있다";
}

console.log(solution(["red", "Tod", "Kim"]));
console.log(solution(["Jane", "Kim"]));