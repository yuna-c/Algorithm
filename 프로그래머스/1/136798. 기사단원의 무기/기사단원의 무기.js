function solution(number, limit, power) {
    let answer = 0;
    
    for(let i = 0; i <= number; i++){
        let count = 0; // 약수의 개수 저장
        const sqrt = Math.sqrt(i);
        
        for(let idx = 1; idx <= sqrt; idx++){
            if(i % idx === 0){
                if(i / idx === idx){
                    count += 1;
                } else{
                    count += 2;
                }
            } 
        }
        if(count > limit){
            answer += power     
        }
        else{
            answer += count;
        }
    }
    return answer;
}