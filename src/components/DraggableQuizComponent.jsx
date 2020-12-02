import React, { useState } from "react";

//
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragAndDropComponent from "./DragAndDropComponent";
//

export default function DraggableQuizComponent({ quiz }) {
  const [unorderImages, setUnorderImages] = useState(quiz.assets);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    // console.log({ destination, source, draggableId });
    if (!destination) {
      return;
    }

    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }

    // copying
    const newOrderAssets = Array.from(quiz.assets);
    console.log(newOrderAssets, draggableId, "<<< neworder");
    newOrderAssets.splice(source.index, 1);
    newOrderAssets.splice(source.index, 0, draggableId);

    const newColumn = {
      ...newOrderAssets,
    };
    // setUnorderImages([
    //   {
    //     value: 3,
    //     image:
    //       "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/3.jpg",
    //   },
    //   {
    //     value: 6,
    //     image:
    //       "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/6.jpg",
    //   },
    //   {
    //     value: 7,
    //     image:
    //       "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/7.jpg",
    //   },
    //   {
    //     value: 9,
    //     image:
    //       "https://storage.googleapis.com/ikhsangama-gallery/AStar-Test/9.jpg",
    //   },
    // ]);
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
