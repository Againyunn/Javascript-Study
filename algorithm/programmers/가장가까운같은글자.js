function solution(s) {
  var answer = [];
  let stack = [];

  let sArray = s.split("");

  sArray.map((el, idx) => {
    let nowIdx = idx;

    let prevIdx = stack.lastIndexOf(el);

    answer.push(prevIdx === -1 ? -1 : nowIdx - prevIdx);
    stack.push(el);
  });

  return answer;
}
