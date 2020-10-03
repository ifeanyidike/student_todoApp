import React from "react";
import { Alert, Button } from "react-bootstrap";

const Todos = ({ index, completeTodos, removeTodos, todo }) => {
  return (
    <Alert
      variant={todo.isCompleted ? "danger" : "success"}
      className='todos'
      key={index}
      // style={{
      //   textDecoration: todo.isCompleted ? "line-through" : "none"
      // }}
      style={{ textDecoration: todo.isCompleted && "line-through" }}
    >
      <div className='todo__item'>{todo.item}</div>

      <div className='todo__buttons'>
        <Button variant='light' onClick={() => completeTodos(index)}>
          <i class='fas fa-check'></i>
        </Button>
        <Button variant='light' onClick={() => removeTodos(index)}>
          <i class='fas fa-times'></i>
        </Button>
      </div>
    </Alert>
  );
};

export default Todos;
