function solution(s, skip, index) {
  var answer = "";
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // let realAlpha = []
  let skipArr = skip.split("");

  for (let i = 0; i < skipArr.length; i++) {
    let idx = alpha.indexOf(skipArr[i]);
    alpha.splice(idx, 1);
  }

  // realAlpha = [...realAlpha];

  // console.log(alpha)
  // let idx = index % realAlpha.length;

  const sArr = s.split("");

  let changedSArr = sArr.map((x) => {
    let sIdx = (alpha.indexOf(x) + index) % alpha.length;

    return alpha[sIdx];
  });

  answer = changedSArr.join("");

  return answer;
}

let s = "aukks";
let skip = "wbqd";
let index = 5;

let result = solution(s, skip, index);
console.log(result);
