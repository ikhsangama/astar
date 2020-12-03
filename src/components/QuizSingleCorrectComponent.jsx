import React, { useState } from "react";
import { Stack, Text, Box, RadioGroup, Radio } from "@chakra-ui/react";
// import "./QuizSingleCorrectComponent.css";

export default function SingleCorrectQuizComponent({ quiz, setYourAnswer }) {
  // if they dont have assets image, no need to use quizImage
  // const [quizImage, setQuizImage] = useState(quiz.assets?.image);
  const onAnswer = (event) => {
    setYourAnswer(event);
  };
  return (
    <>
      <Stack spacing="10" align="center">
        <RadioGroup onChange={(e) => onAnswer(e)}>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </>
  );
}
