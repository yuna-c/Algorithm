function solution(keymap, targets) {
    // 최소 몇 번 눌러?
    const pressCount ={};
    // keymap 순회하며 각 문자 최소 눌러야 하는 횟수
    keymap.forEach((keys, index) =>{
    for(let i = 0; i < keys.length; i++){
        const char = keys[i];
        // 처음 등장하거나, 더 적은 횟수로 갱신
        if(!pressCount[char] || pressCount[char] > i + 1){
            pressCount[char] = i + 1;
        }
    }    
    })

    // 결과 배열 
    let answer = [];
    
    targets.forEach(target =>{
        let totalPress = 0;

        for(const char of target){
            // 문자를 입력할 수 없는 경우 -1 저장
            if(!pressCount[char]){
                totalPress = -1;
                break;
            }
             totalPress += pressCount[char];
        }
        // 해당 문자열 결과 저장
        answer.push(totalPress)
    })
    return answer;
}