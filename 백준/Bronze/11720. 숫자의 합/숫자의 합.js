let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numCount = +input[0];
const numArray = input[1];

function solution(numCount, numArray) {
    let sum = 0;
    
    for (let i = 0; i < numCount; i++) {
        sum += +numArray[i]; 
    }
    
    return sum;
}

console.log(solution(numCount, numArray));
