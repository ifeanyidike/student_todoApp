import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const TodoForm = ({ addNewItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      addNewItem(item);
    }
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        type='text'
        placeholder='Type a Todo item'
        className='mr-sm-2'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
