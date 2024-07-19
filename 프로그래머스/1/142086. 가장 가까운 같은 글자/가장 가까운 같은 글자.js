function solution(s) {
    let answer = [];
    let temp = []; 
    // s : for문 or map 돌리기
    // if else or 삼항연산자로 
    // push 로 배열 안에 넣기
    // includes로 포함된 문자 찾기
    // console.log(answer); //빈배열
    // console.log(s); //문자가 들어가 있다
    
    for(let i = 0; i < s.length; i++){
        //answer.push(s[i]);
        // console.log(answer.push(s[i])); // s의 lenght를 여섯번 돌린다
        // console.log(temp.push(s[i])); // s의 lenght를 여섯번 돌린다
        
        if(!temp.includes(s[i])){
            answer.push(-1);
            temp.push(s[i]);
        } 
        else if(temp.includes(s[i])){
            answer.push(i - temp.lastIndexOf(s[i]));
            temp.push(s[i]);
        }
        // console.log(answer.push(s[i])); // 배열 여섯번 확인
        // console.log(temp);
    }
    return answer;
}