import React from "react";

export default function OneImageComponent({ quiz }) {
  return (
    <>
      {/* if there's an image in quiz, do render */}
      <img
        src={quiz.question.assets}
        style={{
          display: "inline-block",
          maxWidth: "60px",
          maxHeight: "60px",
        }}
      />
    </>
  );
}
