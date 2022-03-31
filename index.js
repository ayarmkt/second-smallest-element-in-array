//const arr = [5, 2, 1, 3, 4]; //answer: 2
const arr = [2, 1, 1, 3, 5, 6]; //answer: 1 (because there are two 1s)

const getSecondMinimumElement = () => {
  let min = Math.min(...arr);
  let minIndex = arr.indexOf(min);
  let secondMin = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min && i !== minIndex) {
      secondMin = arr[i];
    } else if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] > min && arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }

  console.log(secondMin);
  return secondMin;
};

getSecondMinimumElement();
