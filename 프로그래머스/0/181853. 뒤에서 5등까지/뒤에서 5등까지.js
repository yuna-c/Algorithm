// function solution(num_list) {
//     let answer = num_list.sort((a, b)=> a - b).slice(0, 5);
//     return answer;
// }

// const solution = (num_list) => num_list.sort((a, b)=> a - b).slice(0, 5) 

const solution = (num_list) => {
    let answer = [];
    num_list.sort((a, b) => a - b);
    for (let i=0; i<5; i++) {answer.push(num_list[i]);}
    return answer;
}