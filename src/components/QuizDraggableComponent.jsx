import React, { useEffect, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
//
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DragAndDropComponent } from "./index";
//

export default function DraggableQuizComponent({ quiz, setYourAnswer }) {
  const [unorderImages, setUnorderImages] = useState(quiz.answer.assets);

  useEffect(() => {
    setUnorderImages(quiz.answer.assets);
  }, [quiz]);

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
      <Stack spacing="10" align="center">
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
      </Stack>
    </>
  );
}
