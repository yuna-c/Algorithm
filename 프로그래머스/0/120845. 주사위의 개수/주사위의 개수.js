function solution(box, n) {
    return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}


// function solution(box, n) {
//     let [width, length, height] = box;
//     let answer = Math.floor(width /n) * Math.floor(length /n) * Math.floor(height /n);
//     return answer;
// }

// function solution(box, n) {
//     const box0 = Math.floor(box[0]/n);
//     const box1 = Math.floor(box[1]/n);
//     const box2 = Math.floor(box[2]/n);
//     const answer = box0*box1*box2
//     return answer;
// }