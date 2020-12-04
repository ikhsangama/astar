import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

export default function FinishComponent({ track }) {
  const totalQuiz = track.length;
  const totalTrue = track.filter((el) => el).length;
  const percentage = totalTrue / totalQuiz;

  /**
   * give color custom based on score, color weight from chakra default theme
   */
  const giveGreenColor = () => {
    const fullColor = 1000;
    let color = percentage * fullColor - 100;
    if (percentage == 0.1) color = 100;
    return `green.${color}`;
  };

  return (
    <CircularProgress
      value={percentage * 100}
      size={80}
      color={giveGreenColor()}
    >
      <CircularProgressLabel>
        Your Score:
        <b>{percentage * 100}</b>
      </CircularProgressLabel>
    </CircularProgress>
  );
}
