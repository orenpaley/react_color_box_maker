import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    { height: 250, width: 250, backgroundColor: "red", id: uuid() },
    { height: 150, width: 350, backgroundColor: "orange", id: uuid() },
    { height: 350, width: 150, backgroundColor: "green", id: uuid() },
  ];
  const [Boxes, SetBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    SetBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const removeBox = (boxToRemove) => {
    SetBoxes((Boxes) => Boxes.filter((b) => b.id !== boxToRemove.id));
  };
  return (
    <div>
      <h1>Box Maker</h1>
      <NewBoxForm addBox={addBox} />
      <div className="BoxList">
        {Boxes.map(({ width, height, backgroundColor, id }) => (
          <Box
            key={id}
            id={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            remove={removeBox}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
