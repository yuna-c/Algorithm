function solution(strings, n) {
    let answer = [];
    console.log(strings);
    console.log(answer);
    console.log(n);
    
    for(let i = 0; i < strings.length; i++){
        
        console.log('1',strings[i], '2',strings[i][n]);
        strings[i] = strings[i][n] + strings[i];
        // answer.push(strings[i]);
        
    }
    
    strings.sort();
    
    for(let j = 0; j < strings.length; j++){
        // console.log('3',strings[j])
        strings[j] = strings[j].replace(strings[j][0],'');
        answer.push(strings[j]);
        
    }
    return answer;
}

// function solution(strings, n) {
//     return strings.sort((a, b) => {
//         // a[n]이 b[n]보다 크면 1을 반환하고 // 내림차순
//       if (a[n] > b[n]) return 1;
 
//         // a[n]이 b[n]보다 작으면 -1을 반환하고 // 오름차순
//       else if (a[n] < b[n]) return -1;
 
//         // a[n]이 b[n]과 같으면 사전순으로 정렬한다.
//       else return a > b ? 1 : -1;
//     });
//   }