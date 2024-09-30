function solution(ingredient) {
  let stack = [];
  let count = 0;

  for (let item of ingredient) {
    stack.push(item);

    if (stack.slice(-4).join('') === '1231') {
      count++;
      stack.splice(-4);
    }
  }

  return count;
}