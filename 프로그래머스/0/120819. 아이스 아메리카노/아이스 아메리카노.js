// function solution(money) {
//     const americano = 5500;
//     const cups = Math.floor(money/americano);
//     const change = (money % americano)
//     return [cups, change];
// }

// function solution(money) {
//     const answer = [];
//     const americano = 5500;
//     const cups = Math.floor(money/americano);
//     const change = (money % americano)
//     answer.push(cups, change)
//     return answer;
// }

function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}
