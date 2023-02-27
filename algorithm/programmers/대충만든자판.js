function solution(keymap, targets) {
  var answer = [];
  let keyPressed = 0;

  for (let i = 0; i < targets.length; i++) {
    let tArr = targets[i].split("");

    for (let j = 0; j < tArr.length; j++) {
      // 개별 target 원소 tArr[j]
      let tUnit = tArr[j];
      let count = Infinity;

      for (let k = 0; k < keymap.length; k++) {
        let idx = keymap[k].indexOf(tUnit);

        if (idx > -1) {
          count = Math.min(count, idx + 1);
        }
      }
      keyPressed += count;
    }
    answer.push(keyPressed);
    keyPressed = 0;
  }

  answer = answer.map((x) => {
    if (x == Infinity) {
      x = -1;
    }
    return x;
  });

  return answer;
}

let keymap = ["ABACD", "BCEFD"];
let targets = ["ABCD", "AABB"];

let result = solution(keymap, targets);
console.log(result);
