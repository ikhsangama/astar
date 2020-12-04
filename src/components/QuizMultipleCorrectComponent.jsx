import React, { useState } from "react";
import { SimpleGrid, Box, Image, Checkbox } from "@chakra-ui/react";

export default function QuizMultipleCorrectComponent({ quiz, setYourAnswer }) {
  const [currentAnswer, setCurrentAnswer] = useState(
    quiz.answer.assets.map((asset) => {
      let object = {};
      object.value = asset.value;
      object.isChecked = false;
      return object;
    })
  );
  /**
   * update yourAnswer state from checkbox
   * @param {*} event
   */
  const handleCheck = (event) => {
    const copyCurrentAnswer = Array.from(currentAnswer);
    copyCurrentAnswer.forEach((el) => {
      if (el.value == [event.target.value]) {
        el.isChecked = event.target.checked;
      }
    });
    let answer = copyCurrentAnswer.flatMap((element) => {
      if (element.isChecked) return element.value;
      return [];
    });
    setYourAnswer(answer);
  };

  return (
    <>
      {/* {JSON.stringify(quiz)} */}
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        {quiz.answer.assets.map((asset) => (
          <Checkbox
            key={asset.value}
            value={asset.value}
            onClick={(e) => handleCheck(e)}
          >
            <Box bg="" maxH="120px" maxW="120px">
              <Image src={asset.image} />
            </Box>
          </Checkbox>
        ))}
      </SimpleGrid>
    </>
  );
}
