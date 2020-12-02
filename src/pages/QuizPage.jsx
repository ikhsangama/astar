import React, { useEffect, useState } from "react";
import { DraggableQuizComponent, QuestionComponent } from "../components";
//
import { fetchQuizes } from "../services/quizServices";

export default function QuizPage() {
  const [quizes, setQuizes] = useState();
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    let getQuizesFromServices = fetchQuizes();
    let getRandomQuizOrder = shuffle(getQuizesFromServices);
    setQuizes(getRandomQuizOrder);
  }, []);

  useEffect(() => {
    if (quizes) {
      setQuiz(quizes[0]);
    }
  }, [quizes]);

  /**
   *
   * @param {Array} array
   * return shuffled array
   */
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  /**
   *
   * @param {String} quizType
   * return quiz component based on quiz type
   */
  const renderByQuizType = (quizType) => {
    switch (quizType) {
      case "draggable":
        return (
          <>
            <DraggableQuizComponent quiz={quiz} />
          </>
        );
        break;

      default:
        break;
    }
  };

  // Quiz Page
  return (
    <>
      {JSON.stringify(quiz?.type)}
      {/* <QuestionComponent question={quiz?.question} /> */}
      {renderByQuizType(quiz?.type)}
    </>
  );
}
