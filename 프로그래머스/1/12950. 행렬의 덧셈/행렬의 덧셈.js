function solution(arr1, arr2) {
    let answer = [[]];
    // return arr1.map((array, index) => array.map((e, idx) => e + arr2[index][idx]));
    return arr1.map((num1,idx1) => num1.map((num2,idx2) => num2 + arr2[idx1][idx2]));
}