const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim().split("\n");

function solution(word) {
    const count = {};
    const upperWord = word.toUpperCase();

    for (let char of upperWord) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    let maxCount = 0;
    let maxChar = '';

    for (let char in count) {
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        } else if (count[char] === maxCount) {
            maxChar = '?';
        }
    }

    return maxChar;
}

console.log(solution(input[0]));