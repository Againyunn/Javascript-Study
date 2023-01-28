function solution(k, score) {
  let queue = [];

  var answer = [];

  const compile = (s) => {
    queue.push(s);
    queue.sort((a, b) => a - b);

    if (queue.length > k) {
      queue.shift();
    }
    answer.push(queue[0]);
  };

  let i = 0;
  while (i < score.length) {
    compile(score[i]);
    i++;
  }

  return answer;
}
