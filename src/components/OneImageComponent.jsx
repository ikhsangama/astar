import React from "react";

export default function OneImageComponent({ quiz }) {
  return (
    <>
      <img
        src={quiz.question.assets}
        style={{
          display: "inline-block",
          maxWidth: "300px",
          maxHeight: "300px",
        }}
      />
    </>
  );
}
