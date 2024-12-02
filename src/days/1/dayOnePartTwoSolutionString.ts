export const dayOnePartTwoSolutionString = `const getDayOnePartTwoSolution = (
  firstList: number[],
  secondList: number[]
): number => {
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

  return similarityScore;
};

export { getDayOnePartTwoSolution };
`;
