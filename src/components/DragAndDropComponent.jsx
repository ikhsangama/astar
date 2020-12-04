// functionality
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function DragAndDropComponent({ asset, index }) {
  return (
    <Draggable draggableId={`asset-${index}`} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="ImageContainer"
        >
          <img src={asset.image} alt={asset.image} />
        </div>
      )}
    </Draggable>
  );
}
