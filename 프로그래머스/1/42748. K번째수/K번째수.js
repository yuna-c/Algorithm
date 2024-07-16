function solution(array, commands) {
    let answer = [];
    //slice(자르고) sort((a-b) => b-a)(정렬) push (answer에 넣기 위해)
    for(let i = 0; i < commands.length; i++){
        let sliceList = array.slice(commands[i][0] - 1, commands[i][1]); //자르기
        sliceList.sort((a, b) => a - b); //정렬
        answer.push(sliceList[commands[i][2]-1]);
    }
    return answer;
}