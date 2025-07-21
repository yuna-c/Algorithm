function solution(num_list) {
    let answer = [];
    let newArr = [];
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0) newArr.push(i)     
    }
    // console.log(newArr.length, num_list.length - newArr.length)
    
    return answer = [newArr.length, num_list.length - newArr.length]
}