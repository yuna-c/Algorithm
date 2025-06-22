function solution(my_string) {
    let answer = [];
    for(let i = 0; i < my_string.length; i++){
      let num = my_string[i]
      if(!isNaN(num)){
          answer.push(Number(num))
      }
    }
    answer.sort((a,b)=> a-b)
    return answer;
}