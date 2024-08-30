function solution(babbling) {
    const canSay = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    
    //발음 가능한 단어 
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        // 발음 가능 한 단어들 반복 시 (yeye) 문자열 유효 X 종료
        for(let j = 0; j < canSay.length; j++){
            if(babble.includes(canSay[j].repeat(2))){
                break;
            }
            // 반복이 아닌 경우 발음 가능한 단어 문자열 제거
            babble = babble.split(canSay[j]).join(" ");
        }
        // 남은 부분이 빈 문자열일 때 +1
        if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
    }
    

    return answer;
}