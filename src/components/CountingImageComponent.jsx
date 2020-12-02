import React, { useState } from "react";

export default function CountingImageComponent({ quiz }) {
  // if they dont have assets image, no need to use quizImage
  console.log(quiz.question.count, "<> quiz");
  const [quizImage, setQuizImage] = useState(quiz.question.assets);
  return (
    <>
      {
        // if there's an image in quiz, do render
        quiz.question.count && (
          <div>
            {[...Array(quiz.question.count)].map((e, index) => {
              return (
                <img
                  src={quizImage}
                  key={index}
                  style={{
                    display: "inline-block",
                    maxWidth: "60px",
                    maxHeight: "60px",
                  }}
                />
              );
            })}
          </div>
        )
      }
    </>
  );
}
