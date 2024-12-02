import "./App.css";

import { input } from "../inputs/1";

function App() {
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

  // ***** //
  // DAY 2 //
  // ***** //

  let similarityScore = 0;

  const occurrences = secondList.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  firstList.forEach((item) => {
    if (occurrences[item]) {
      similarityScore += item * occurrences[item];
    }
  });

  return (
    <>
      <div>Day 1: {difference}</div>
      <div>Day 2: {similarityScore}</div>
    </>
  );
}

export default App;
