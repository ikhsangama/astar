import React, { useState } from "react";

//
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragAndDropComponent from "./DragAndDropComponent";
//

export default function DraggableQuizComponent({ quiz }) {
  const [unorderImages, setUnorderImages] = useState(quiz.assets);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    console.log({ source, destination, draggableId });
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
    // swapping
    [copyUnorderImages[source.index], copyUnorderImages[destination.index]] = [
      copyUnorderImages[destination.index],
      copyUnorderImages[source.index],
    ];
    // update state
    setUnorderImages(copyUnorderImages);
  };

  return (
    <>
      {JSON.stringify(quiz)}
      <h5>{quiz.question}</h5>
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
