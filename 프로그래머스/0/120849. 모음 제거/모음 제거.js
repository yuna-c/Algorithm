// function solution(my_string) {
//     let answer = '';
//     let vowels = ['a','e','i','o','u'];
    
//     for(let i = 0; i < my_string.length; i++){
//         if(!vowels.includes(my_string[i])){
//             answer += my_string[i]
//         }
//     }
//     return answer;
// }

// const solution = (my_string) => my_string.replace(/[aeiou]/g, '');

const solution = (my_string) => Array.from(my_string).filter(t => !['a','e','i','o','u'].includes(t)).join('')