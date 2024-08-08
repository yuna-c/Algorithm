function solution(my_string) {
    let reverse = '';
    // solution 1 : for()
    for(let i = 1; i <= my_string.length; i++){
        reverse += my_string[my_string.length-i]
    }
    return reverse;
    // solution 2 : reverse()
    // return reverse = my_string.split('').reverse().join('');
    
    // solution 3 : spead
    // return reverse = [...my_string].reverse().join('');
}