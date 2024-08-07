let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let string = input[0];

function solution(S) {
    let result = '';
    let temp = '';
    let inTag = false;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '<') {
            result += temp.split('').reverse().join('');
            temp = '';
            inTag = true;
            result += S[i];
        } else if (S[i] === '>') {
            inTag = false;
            result += S[i];
        } else if (inTag) {
            result += S[i];
        } else if (S[i] === ' ') {
            result += temp.split('').reverse().join('') + ' ';
            temp = '';
        } else {
            temp += S[i];
        }
    }

    result += temp.split('').reverse().join('');

    return result;
}


console.log(solution(string));