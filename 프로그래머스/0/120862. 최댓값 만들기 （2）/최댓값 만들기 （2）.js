function solution(numbers) {
    let maxProduct = numbers[0] * numbers[1];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const product = numbers[i] * numbers[j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    console.log(maxProduct);
    return maxProduct;
}