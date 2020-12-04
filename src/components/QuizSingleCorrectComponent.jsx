import React, { useState } from "react";
import {
  Stack,
  Text,
  Box,
  RadioGroup,
  Radio,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
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
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
              {/* if there is an image asset, load it */}
              {quiz.answer.assets.map((asset, index) => (
                <Radio value={asset.value} key={index}>
                  {asset.image ? (
                    <Image src={asset.image} alt={asset.value} maxH={40} />
                  ) : (
                    asset.value
                  )}
                </Radio>
              ))}
            </SimpleGrid>
          </Stack>
        </RadioGroup>
      </Stack>
    </>
  );
}
