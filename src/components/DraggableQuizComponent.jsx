import React from "react";

export default function DraggableQuizComponent({ quiz }) {
  return (
    <>
      {JSON.stringify(quiz)}
      <h5>{quiz.question}</h5>
      {quiz.assets}
    </>
  );
}
