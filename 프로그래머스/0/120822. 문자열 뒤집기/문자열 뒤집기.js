function solution(my_string) {
    let answer = '';
    console.log(my_string); //문자열
    answer = [...my_string].reverse().join('');
    return answer;
}