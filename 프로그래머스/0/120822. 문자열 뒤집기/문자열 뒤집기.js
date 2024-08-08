// function solution(my_string) {
//     let reverse = '';
//     console.log(my_string); //문자열
//     // reverse = [...my_string].reverse().join('');
//     reverse = my_string.split('').reverse().join('');
//     return reverse;
// }

const solution = (my_string) => [...my_string].reverse().join('');