import React from "react";
import { Button } from "@chakra-ui/react";

export default function AnswerButtonComponent({ onNext }) {
  return (
    <>
      <Button marginTop="20px" onClick={() => onNext()}>
        Lanjut
      </Button>
    </>
  );
}
