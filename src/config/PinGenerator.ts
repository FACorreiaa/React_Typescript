export async function GenerateNumber() {
  let containArr: number[][] = [];
  let pinArr: number[] = [];
  let min: number = 0;
  let max: number = 9;

  while (pinArr.length < 3) {
    let value: number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (pinArr.indexOf(value) === -1) pinArr.push(value);

    if (containArr.length < 4 && !checkArrayInsideArray(containArr, pinArr)) {
      containArr.push(pinArr);
    }
  }

  return await containArr;
}

function checkArrayInsideArray(arr: number[][], item: number[]) {
  const itemString = JSON.stringify(item);

  let contains = arr.some(function(ele) {
    return JSON.stringify(ele) === itemString;
  });
  return contains;
}
