# 🌏 Baekjoon Algorithm in JS - 01

알고리즘 스터디 문제풀이 - 01 (기초반) <br/>

자바스크립트로 백준 온라인 저지 문제를 푸는 레포지토리입니다.

<br/>

## ✨ 백준 Node.js 환경 Javascript 템플릿

- 제출시 경로는 "/dev/stdin" 으로 변환해야함
- 테스트 케이스는 test.txt에 작성하여 Node.js 환경에서 동작시킬 수 있음

<br/>

```javascript
// 이 두 줄을 최상단에 필수로 작성
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
```
<br/>

### Template #1
```javascript
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function solution(arr) {
  const [a, b] = arr[0].split(' ');
  return Number(a) + Number(b);
}

console.log(solution(input));
```
<br/>

### Template #2
```javascript
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

/*
    const x = Number(input[0]);
    const [y, z] = input[1].split(' ').map(v => Number(v));
    const arr = input[2].split(' '); 
*/

function solution(x, y, z, arr) {
  const answer = [];
  return answer.join('\n');
}

console.log(solution(x, y, z, arr));
```
<br/>
