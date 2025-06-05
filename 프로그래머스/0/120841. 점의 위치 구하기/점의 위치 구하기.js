// function solution(dot) {
//     const [x,y] = dot;
//     if(x > 0 && y > 0) return 1;
//     if(x < 0 && y > 0) return 2;
//     if(x < 0 && y < 0) return 3;
//     if(x > 0 && y < 0) return 4;
// }

function solution(dot) {
    return dot[0] > 0
  ? (dot[1] > 0 ? 1 : 4)  // x > 0이면 → y > 0이면 1, 아니면 4
  : (dot[1] > 0 ? 2 : 3); // x <= 0이면 → y > 0이면 2, 아니면 3
}