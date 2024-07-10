function solution(sizes) {
    let answer = [0,0]
    for(let i = 0 ; i < sizes.length;i++){
        let [w,h] = sizes[i].sort((a,b) => b - a)
        if(w > answer[0]){ answer[0] = w; }
        if(h > answer[1]){ answer[1] = h; }
    }
    return answer[0] * answer[1];
}