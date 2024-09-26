function solution(s, skip, index) {
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    let answer = '';
    
    for(let i = 0; i < s.length; i++){
        let char = s[i]; // s 문자
        let currIndex = alphabet.indexOf(char); // 현재문자 인덱스
        let steps = 0; // 이동 카운트

        for(let j = 0; steps < index; j++){
            currIndex = (currIndex + 1) % 26; // z-> a
            if(!skip.includes(alphabet[currIndex])){    // skip 포함 안되면 이동 카운트 증가
                steps++
            }
        }
        answer += alphabet[currIndex] // 변환 문자 추가
        
    }
    return answer;
}