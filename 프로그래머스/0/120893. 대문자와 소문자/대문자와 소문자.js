// function solution(my_string) {
//     let answer = '';
//     for(let i = 0; i < my_string.length; i++){
//         if(my_string[i] === my_string[i].toUpperCase()){
//             answer += my_string[i].toLowerCase()
//         } else {
//             answer += my_string[i].toUpperCase()
//         }
//     }
//     return answer;
// }


function solution(my_string) {
    return my_string.split('').map((i)=> i === 
                                   i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join('');
}