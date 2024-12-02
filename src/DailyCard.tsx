import React from "react";

import { Card, Flex, Text } from "@radix-ui/themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface DailyCardProps {
  day: number;
  title: string;
  codeSolution: string;
  isThemeDark: boolean;
}

const DailyCard: React.FC<DailyCardProps> = ({
  day,
  title,
  codeSolution,
  isThemeDark,
}) => {
  return (
    <Card>
      <Flex direction={"column"} gap={"2"}>
        <Text as="div" size="5" weight={"bold"}>
          Day {day}: {title}
        </Text>
        <a href={`https://adventofcode.com/2024/day/${day}`} target="_blank">
          Link to Advent of Code day {day}
        </a>
        <SyntaxHighlighter
          language="javascript"
          style={isThemeDark ? a11yDark : docco}
        >
          {codeSolution}
        </SyntaxHighlighter>
      </Flex>
    </Card>
  );
};

export default DailyCard;
