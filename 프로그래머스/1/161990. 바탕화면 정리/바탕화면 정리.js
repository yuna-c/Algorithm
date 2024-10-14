function solution(wallpaper) {
    // 위치 변수
    let lux = wallpaper.length; // 맨위
    let luy = wallpaper[0].length; // 맨왼쪽
    let rdx = 0; // 맨아래
    let rdy = 0; // 맨오른
    
    // 최소 범위 파일 위치
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i);
                rdy = Math.max(rdy, j);
            }
        }
    }
    // 맨 아래 파일 포함 끝점
    return [lux, luy, rdx + 1, rdy + 1];
}