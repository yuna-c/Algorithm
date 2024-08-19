function solution(nums) {
    let answer = 0;
 
    // 1. 배열을 순서대로 반복을 해서 1을 골라야 함
    for(let i = 0; i < nums.length -2; i++){
        // console.log('i',i);
        // 2. 배열을 또 다시 순차적으로 반복해서 2를 골라야함
        for(let j = i+1; j < nums.length -1; j++){
        // console.log('j',j);
        // 3. 배열을 또 다시 반복해서 3번째 숫자를 골라야함
            for(let k = j+1; k < nums.length; k ++){
                // 4. 1+2+3의 숫자를 다 더해야 함
                // console.log('i',i,'j',j,'k',k);
                let sum = nums[i] + nums[j] + nums[k];
                // console.log(sum);
                let count = 0;
                // 5. 더해서 소수인지 아닌지 판단해서 
                for(let l = 2; l <= sum; l++){
                    // 6. 소수의 개수를 return 해야함
                    if(sum % l === 0){
                        count++;
                    }
                }
                
                if(count === 1){
                    answer++; 
                }     
            }
        }    
    }
    
    return answer;
}