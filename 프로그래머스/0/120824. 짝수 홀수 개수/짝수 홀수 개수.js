function solution(num_list) {
    let answer = [];
    let numArr = [];
 
    for(let i = 0; i < num_list.length; i++){
        // 짝수로 나누었을 때의 값을 numArr에 넣어준다.
        if(num_list[i] % 2 === 0) numArr.push(i);     
    }
    // console.log(numArr.length, num_list.length-numArr.length); 짝수, 홀수
    return answer = [numArr.length, num_list.length-numArr.length];
}