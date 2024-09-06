function solution(X, Y) {
    let answer = "";
    X = X.split('');
    Y = Y.split('');
    
    for(let i = 0; i < 10; i++) {
        let xCountForI = X.filter(x => Number(x) === i).length; // X 안에 i가 몇개 있는지 알아냄
        let yCountForI = Y.filter(y => Number(y) === i).length; // Y 안에 i가 몇개 있는지 알아냄
        answer += i.toString().repeat(Math.min(xCountForI, yCountForI)); // 두개의 숫자중 더 적은게 겹치는 숫자 입니다.
    }    
    
    if(answer === "") { // 겹치는게 없을 경우 -1
        return "-1";
    }
    else if(answer.split('').filter(x => x === "0").length === answer.length) { // 전부 0 밖에 없다면 0
        return "0";
    }
    else {
        return answer.split('').sort().reverse().join(''); // 내림차순 정렬해서 return
    }
    // 기가 막힌 방법이네요 확 와닿지는 않네요
    
}