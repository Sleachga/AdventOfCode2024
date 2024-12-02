import { Flex, Grid, Theme } from "@radix-ui/themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useLocalStorage } from "@uidotdev/usehooks";

import DailyCard from "./DailyCard";

import {
  // input,
  // getDayOneSolution,
  dayOneSolutionString,
  // getDayOnePartTwoSolution,
  dayOnePartTwoSolutionString,
} from "./days/1";

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Day 1
  // const { firstList, secondList } = getDayOneSolution(input);
  // const similarityScore = getDayOnePartTwoSolution(firstList, secondList);

  return (
    <Theme appearance={isDarkMode ? "dark" : "light"}>
      <Flex
        width={"100%"}
        direction={"row"}
        justify="center"
        align="center"
        gap={"5"}
      >
        <h1>Sanford's Advent of Code Solutions 2024</h1>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
      </Flex>

      <Grid columns="2" gap="3" width="auto">
        <DailyCard
          day={1}
          title="Historian Hysteria"
          codeSolution={dayOneSolutionString}
          isThemeDark={isDarkMode}
        />
        <DailyCard
          day={1}
          title="Historian Hysteria Part 2"
          codeSolution={dayOnePartTwoSolutionString}
          isThemeDark={isDarkMode}
        />
      </Grid>
    </Theme>
  );
}

export default App;
