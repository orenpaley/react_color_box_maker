import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    height: 250,
    width: 250,
    backgroundColor: "green",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, key: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="range"
        name="height"
        min="25"
        max="500"
        step={50}
        placeholder="Box Height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="range"
        name="width"
        min="25"
        max="500"
        step={50}
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
