import React, { useEffect, useState } from "react";
import {
  AnswerButtonComponent,
  CountingImageComponent,
  // QuestionComponent,
  QuizDraggableComponent,
  QuizSingleCorrectComponent,
  QuizMultipleCorrectComponent,
} from "../components";

import { Container, Center, Text } from "@chakra-ui/react";
//
import { fetchQuizes } from "../services/quizServices";

export default function QuizPage() {
  const [quizes, setQuizes] = useState();
  const [quiz, setQuiz] = useState();
  const [yourAnswer, setYourAnswer] = useState();
  const [score, setScore] = useState(0);
  const [quizNumber, setQuizNumber] = useState(0);

  // first time render
  useEffect(() => {
    let getQuizesFromServices = fetchQuizes();
    let getRandomQuizOrder = shuffle(getQuizesFromServices);
    setQuizes(getRandomQuizOrder);
  }, []);

  // set quiz after fetch
  useEffect(() => {
    if (quizes) {
      setQuiz(quizes[quizNumber]);
    }
  }, [quizes]);

  // automatically change quiz after clicking "lanjut"
  useEffect(() => {
    setQuiz(quizes?.[quizNumber]);
  }, [quizNumber]);

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

  const renderQuestionType = (type) => {
    switch (type) {
      case "counting":
        return (
          <>
            <CountingImageComponent quiz={quiz} />
          </>
        );

      default:
        break;
    }
  };

  /**
   *
   * @param {String} quizType
   * return quiz component based on quiz type
   */
  const renderAnswerType = (type) => {
    switch (type) {
      case "draggable":
        return (
          <>
            <QuizDraggableComponent quiz={quiz} setYourAnswer={setYourAnswer} />
          </>
        );
      case "singleCorrectOptions":
        return (
          <>
            <QuizSingleCorrectComponent
              quiz={quiz}
              setYourAnswer={setYourAnswer}
            />
          </>
        );
      case "multipleCorrectOptions":
        return (
          <>
            <QuizMultipleCorrectComponent
              quiz={quiz}
              setYourAnswer={setYourAnswer}
            />
          </>
        );
      default:
        break;
    }
  };

  /**
   * go to the next question
   */
  const onNext = () => {
    scoring();
    // go to next quiz
    // console.log(quizNumber);
    setQuizNumber(quizNumber + 1);
  };

  /**
   *  if answer is true, give score + 10
   */
  const scoring = () => {
    if (checkAnswer()) {
      setScore(score + 10);
    }
  };

  /**
   * check answer based on question type
   */
  const checkAnswer = () => {
    switch (quiz.answer.type) {
      case "draggable":
        return JSON.stringify(quiz.answer.value) === JSON.stringify(yourAnswer);
      case "singleCorrectOptions":
        return quiz.answer.value === yourAnswer;
      case "multipleCorrectOptions":
        return JSON.stringify(quiz.answer.value) === JSON.stringify(yourAnswer);
      default:
        return false;
    }
  };

  // Quiz Page
  return (
    <>
      {JSON.stringify(quiz?.answer?.type)}
      {JSON.stringify(yourAnswer)}
      {JSON.stringify(score)}
      <Container maxW="xl" centerContent>
        <Text> {quiz?.question.text} </Text>
        {renderQuestionType(quiz?.question?.type)}
        {renderAnswerType(quiz?.answer?.type)}
        <AnswerButtonComponent onNext={onNext} />
      </Container>
    </>
  );
}
