// function solution(my_string, letter) {
//     let answer = my_string.replaceAll(letter, '');
//     return answer;
// }

function solution(my_string, letter) {
    return my_string.split(letter).join('');
}
