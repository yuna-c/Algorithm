function solution(k, m, score) {
    // console.log(`최저 사과 점수k=>`,k, `한상자에 들어가는 사과 수m=>`,m, `사과 점수score=>`,score)
    //  ( / ) score의 개수를 m개로 나눔 : 한 상자에 4개씩 담아 포장한다 
    // .sort() 내림차순으로 정렬해 : 사과의 높은 점수를 구한다
    // for() : m개씩 그룹으로 나눠 상자 구성하고 상자의 수만
    // 각 상자의 최저점수 가져오기
    // 상자의 이익 계산하고 누적
    
    const sortFruitArray = score.sort((a, b)=> b - a);
    let maxSale = 0
      
    for(let i = 0; i <= sortFruitArray.length - m; i += m){ // i를 m만큼 증가시킴
        let fruitScoreMin = sortFruitArray[i + m - 1]; // 각 상자의 최저 점수
        maxSale += fruitScoreMin * m; // 이익 더하기
        
    }
    return maxSale;
}