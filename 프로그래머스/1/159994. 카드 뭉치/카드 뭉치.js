function solution(cards1, cards2, goal) {
    // for of, shift()
    // for of로 goal에 있는 idx를 순차적으로 잘라 w로 반복을 돌려준 후,
    // cards1의 0번째 순서부터 시작하여 글자가 w와 같으면 shift를 통해 삭제해준다.
    // cards2 역시 0번째 순서부터 시작하여 글자가 w와 같으면 shift를 통해 삭제해준다.
    // 그 후, 단어 순서가 맞지 않는 cards2에는 'no'를, 단어 순서가 맞는 cards1에는 'yes'를 리턴한다.
    console.log(cards2);
    for(let w of goal){
        if(cards1[0] === w) cards1.shift();
        else if(cards2[0] === w) cards2.shift(); 
        else return 'No';      
    }
    return 'Yes';
}