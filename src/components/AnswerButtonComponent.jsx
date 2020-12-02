import React from "react";
import { Button } from "@chakra-ui/react";

export default function AnswerButtonComponent({ onNext }) {
  return (
    <>
      <Button onClick={() => onNext()}>Lanjut</Button>
    </>
  );
}
