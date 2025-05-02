// function solution(strlist) {
//     let answer = [];
//     for(let i = 0; i < strlist.length; i++){
//         answer.push(strlist[i].length)
//     }
//     return answer;
// }

function solution(strlist) {
    let answer = strlist.map((str) => str.length);
    return answer;
}