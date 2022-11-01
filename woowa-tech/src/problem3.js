function problem3(number) {
  let answer = 0;

  // 3/6/9를 포함한 수 식별
  const checkNum = (type, number) => {
    for (var i = 1; i <= number; i++) {
      let changedText = i.toString();

      let checkArr = [...changedText];
      let index = 0;

      while (index < checkArr.length) {
        if (checkArr[index].includes(`${type}`)) {
          answer += 1;
        }
        index += 1;
      }
    }
  };

  // 3
  checkNum(3, number);

  // 6
  checkNum(6, number);

  // 9
  checkNum(9, number);

  return answer;
}

module.exports = problem3;
