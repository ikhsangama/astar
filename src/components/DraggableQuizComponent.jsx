import React, { useState } from "react";

//
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AnswerButtonComponent from "./AnswerButtonComponent";
import DragAndDropComponent from "./DragAndDropComponent";
//

export default function DraggableQuizComponent({ quiz, setYourAnswer }) {
  const [unorderImages, setUnorderImages] = useState(quiz.assets);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    // console.log({ source, destination, draggableId });
    // exit if it's out of the draggable area
    if (!destination) {
      return;
    }
    // exit if it's same position
    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }

    // copying
    const copyUnorderImages = Array.from(unorderImages);
    // splice and insert to destination index
    copyUnorderImages.splice(source.index, 1);
    copyUnorderImages.splice(destination.index, 0, unorderImages[source.index]);
    // update state
    setUnorderImages(copyUnorderImages);
    const answer = getAnswer(copyUnorderImages);
    // set the answer
    setYourAnswer(answer);
  };

  /**
   * get answer after drag and drop
   * @param {Array} answerImages
   */
  const getAnswer = (answerImages) => {
    let answerList = answerImages.map((image) => image.value);
    return answerList;
  };

  return (
    <>
      {/* {JSON.stringify(quiz)} */}
      <h1>{quiz.question}</h1>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {unorderImages.map((asset, index) => {
                  return (
                    <DragAndDropComponent
                      asset={asset}
                      index={index}
                      key={index}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}
