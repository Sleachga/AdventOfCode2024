export const dayOneSolutionString = `export const getDayOneSolution = (input: number[]) => {
  const firstList: number[] = [];
  const secondList: number[] = [];

  input.forEach((item, index) => {
    if (index % 2 === 0) {
      firstList.push(item);
    } else {
      secondList.push(item);
    }
  });

  firstList.sort((a, b) => a - b);
  secondList.sort((a, b) => a - b);

  let difference = 0;

  firstList.forEach((item, index) => {
    difference += Math.abs(item - secondList[index]);
  });

  return { firstList, secondList, difference };
};`;
