function solution(my_string) {
    let answer = 0;
    for(let char of my_string){
        if(!isNaN(char) && char !== ''){
            answer += Number(char)
        }
    }
    return answer;
}