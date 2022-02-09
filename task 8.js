// Fibonacci was an Italian mathematician who came up with the Fibonacci
// sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 …
// Where every number is the sum of the two previous ones.
//     e.g. 0, 1, 1, 2, 3, 5 comes from
// 0 + 1 = 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 2 = 5 etc.
//     Create a function where you can call it by writing the code
function fibonacciGenerator(n) {
    let first = 0;
    let second = 1;
    const array = [];
    for(let i = 0; i < n; i++){
        if(i == 0){
            array.push(first);
        } else if (i == 1){
            array.push(second);
        } else {
            let temp = second + first;
            array.push(temp);
            first = second;
            second = temp;
        }
    }
    return array;
}

console.log(fibonacciGenerator(15));
