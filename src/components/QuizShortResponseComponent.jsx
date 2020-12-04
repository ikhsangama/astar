import React, { useEffect, useState } from "react";
import { Input, NumberInput, NumberInputField } from "@chakra-ui/react";

export default function QuizShortResponseComponent({
  quiz,
  setYourAnswer,
  yourAnswer,
}) {
  /**
   * Update yourAnswer state
   * @param {*} event
   */
  const onTyping = (event) => {
    setYourAnswer(event.target.value);
  };

  /**
   * Render input box based on answer type
   */
  const renderByAnswerType = () => {
    if (typeof quiz.answer.value == "number") {
      return (
        <NumberInput
          maxW={20}
          max={999}
          keepWithinRange={true}
          clampValueOnBlur={true}
        >
          <NumberInputField
            placeholder="0-999"
            onChange={(e) => onTyping(e)}
            value={yourAnswer || null}
          />
        </NumberInput>
      );
    }
    return (
      <Input
        onChange={(e) => onTyping(e)}
        placeholder="Jawab.."
        maxW={80}
        value={yourAnswer || ""}
      />
    );
  };
  return <>{renderByAnswerType()}</>;
}
