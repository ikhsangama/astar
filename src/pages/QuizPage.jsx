import React, { useEffect, useState } from "react";
import {
  AnswerButtonComponent,
  CountingImageComponent,
  OneImageComponent,
  // QuestionComponent,
  QuizDraggableComponent,
  QuizSingleCorrectComponent,
  QuizMultipleCorrectComponent,
  QuizShortResponseComponent,
  ScoreBannerComponent,
} from "../components";

import { Container, Center, Text, VStack } from "@chakra-ui/react";
//
import { fetchQuizes } from "../services/quizServices";

export default function QuizPage() {
  const [quizes, setQuizes] = useState();
  const [quiz, setQuiz] = useState();
  const [yourAnswer, setYourAnswer] = useState();
  const [track, setTrack] = useState([]);
  const [quizNumber, setQuizNumber] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

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
      setTrack(new Array(quizes.length).fill(null));
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
      case "image":
        return (
          <>
            <OneImageComponent quiz={quiz} />
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
      case "shortResponse":
        return (
          <>
            <QuizShortResponseComponent
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
    tracking();
    // go to next quiz
    if (quizNumber < quizes.length - 1) {
      setQuizNumber(quizNumber + 1);
    } else {
      // if finish
      setIsFinished(true);
    }
  };

  /**
   *  tracking either answer right or wrong
   */
  const tracking = () => {
    let items = [...track];
    items[quizNumber] = checkAnswer();
    setTrack(items);
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
      case "shortResponse":
        return (
          String(quiz.answer.value).toLowerCase() ===
          String(yourAnswer.toLowerCase())
        );
      default:
        return false;
    }
  };

  /**
   *
   */
  const renderResult = () => {
    return (
      <>
        <h1>Finishhh</h1>
      </>
    );
  };
  // Quiz Page
  return (
    <>
      <ScoreBannerComponent track={track} />
      {JSON.stringify([isFinished, "<< quiz"])}
      {JSON.stringify(quiz?.answer?.type)}
      {JSON.stringify(yourAnswer)}
      {JSON.stringify(track)}
      <Container maxW="xl" centerContent>
        {isFinished ? (
          renderResult()
        ) : (
          <VStack spacing={10}>
            <Text fontSize="xl"> {quiz?.question.text} </Text>
            {renderQuestionType(quiz?.question?.type)}
            {renderAnswerType(quiz?.answer?.type)}
            <AnswerButtonComponent onNext={onNext} />
          </VStack>
        )}
      </Container>
    </>
  );
}
