let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const inputVal = input[0];

function solution(input) {
  const [a, b] = input.split(" ").map(Number);

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b, gcdValue) {
    return (a * b) / gcdValue;
  }

  const gcdValue = gcd(a, b);
  const lcmValue = lcm(a, b, gcdValue);

  return [gcdValue, lcmValue];
}

const [gcdValue, lcmValue] = solution(inputVal);

console.log(gcdValue); // 최대 공약수 출력
console.log(lcmValue); // 최소 공배수 출력