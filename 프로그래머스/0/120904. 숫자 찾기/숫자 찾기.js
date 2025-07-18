function solution(num, k) {
    // let index = num.toString().indexOf(k.toString())
    // let index = num.toString().split('').map((e)=> Number(e)).indexOf(k)
    // return index === -1 ? -1 : index + 1 ;
   return (" " + num).indexOf(k);
}