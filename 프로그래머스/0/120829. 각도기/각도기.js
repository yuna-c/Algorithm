// return [0, 90, 91, 180].filter(x => angle>=x).length;
// return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;

function solution(angle) {
    let answer = 0;
    if(angle < 90) answer = 1
    else if(angle == 90) answer = 2
    else if(angle < 180) answer = 3
    else answer = 4
    return answer
}