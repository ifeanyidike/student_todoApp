import React, { useState } from "react";
import TodoStuff from "./todostuff";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todos";
import { Container } from "react-bootstrap";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(TodoStuff);

  const addItem = (item) => {
    const newTodos = [...todos, { item }];
    setTodos(newTodos);
  };

  //complete items
  const completeTodos = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  //remove itemsn

  const removeTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <Header />
      <Container className='py-4 app__content'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodos={completeTodos}
            removeTodos={removeTodos}
          />
        ))}

        <TodoForm addNewItem={addItem} />
      </Container>

      <Footer />
    </div>
  );
}
