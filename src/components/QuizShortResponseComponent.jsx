import React from "react";
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function QuizShortResponseComponent({ quiz, setYourAnswer }) {
  /**
   * Update yourAnswer state
   * @param {*} event
   */
  const onTyping = (event) => {
    setYourAnswer(event.target.value);
  };

  /**
   *
   */
  const renderByAnswerType = () => {
    console.log(typeof quiz.answer.value == "number");
    if (typeof quiz.answer.value == "number") {
      return (
        <NumberInput
          maxW={20}
          max={999}
          keepWithinRange={true}
          clampValueOnBlur={true}
        >
          <NumberInputField placeholder="0-999" onChange={(e) => onTyping(e)} />
        </NumberInput>
      );
    }
    return (
      <Input onChange={(e) => onTyping(e)} placeholder="Jawab.." maxW={80} />
    );
  };
  return (
    <>
      {quiz.answer.value}
      {renderByAnswerType()}
    </>
  );
}
