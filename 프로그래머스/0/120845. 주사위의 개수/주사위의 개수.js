function solution(box, n) {
    const box0 = Math.floor(box[0]/n);
    const box1 = Math.floor(box[1]/n);
    const box2 = Math.floor(box[2]/n);
    const answer = box0*box1*box2
    return answer;
}