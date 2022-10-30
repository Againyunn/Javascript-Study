function problem1(pobi, crong) {
  var answer = null;

  // 연산 결과 함수
  const calculationFunction = (atom) => {
    let plusResult = 0;
    let multipleResult = 1;

    atom.some((e) => {
      let target = Number(e);

      if (target <= 0 || target >= 400) {
        answer = -1;
        return true;
      }

      plusResult += target;
      multipleResult *= target;
    });

    return Math.max(plusResult, multipleResult);
  };

  // 개인의 최대 점수 얻기
  const getMaxResult = (array) => {
    let left = calculationFunction(String(array[0]).split(""));
    let right = calculationFunction(String(array[1]).split(""));

    return Math.max(left, right);
  };

  let pobiScore = getMaxResult(pobi);
  let crongScore = getMaxResult(crong);

  // 예외 발생
  if (answer === -1) {
    return answer;
  }

  // 정상적인 연산의 결과
  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else if (pobiScore === crongScore) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
