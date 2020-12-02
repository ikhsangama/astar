// functionality
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// css
import "./DragAndDropComponent.css";

export default function DragAndDropComponent({ asset, index }) {
  return (
    // <div className="ImageContainer">
    <Draggable draggableId={`asset-${index}`} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // innerRef={provided.innerRef}
          ref={provided.innerRef}
          className="ImageContainer"
        >
          <img src={asset.image} alt={asset.image} />
        </div>
      )}
    </Draggable>
    //{" "}
    // </div>
  );
}
