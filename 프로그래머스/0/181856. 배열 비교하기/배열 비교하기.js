function solution(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length; 
    let sum1 = arr1.reduce((a, b) => a + b, 0); 
    let sum2 = arr2.reduce((a, b) => a + b, 0); 

    return len1 !== len2 ? (len1 > len2 ? 1 : -1) 
         : sum1 !== sum2 ? (sum1 > sum2 ? 1 : -1) 
         : 0;
}

// function solution(arr1, arr2) {
//     if(arr1.length > arr2.length) return 1;
//     if(arr1.length < arr2.length) return -1;
    
//     let sum1 = arr1.reduce((a,b) => a + b, 0);
//     let sum2 = arr2.reduce((a,b) => a + b, 0);
    
//     if(sum1 > sum2) return 1;
//     if(sum1 < sum2 ) return -1;
//     return 0;
// }