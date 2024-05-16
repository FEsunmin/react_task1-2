import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./App.css";
import Swal from "sweetalert2";
import FormComp from "./components/FormComp/FormComp";
import ListComp from "./components/TodoListComp/ListComp";
import ScrollTopComp from "./components/ScrollComp/ScrollTopComp";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  const addList = (newTodo) => {
    if (!newTodo.title || !newTodo.cont) {
      Swal.fire({
        title: "Error!",
        text: "이름과 나이 모두 입력해주세요",
        confirmButtonText: "확인",
      });
      return;
    }

    const id = Date.now();
    const todoInfo = {
      id: id,
      title: newTodo.title,
      cont: newTodo.cont,
      isDone: false,
    };
    setTodo([...todo, todoInfo]);
  };

  const toggleDone = (id) => {
    const updatedTodoList = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    const updatedTodo = updatedTodoList.filter((item) => !item.isDone);
    const updatedDone = updatedTodoList.filter((item) => item.isDone);
    setTodo(updatedTodo);
    setDone((prevDone) => [...prevDone, ...updatedDone]);
  };

  const toggleCancle = (id) => {
    const updatedDoneList = done.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    const updatedTodo = updatedDoneList.filter((item) => !item.isDone);
    const updatedDone = updatedDoneList.filter((item) => item.isDone);
    setTodo((prevTodo) => [...prevTodo, ...updatedTodo]);
    setDone(updatedDone);
  };

  const onRemove = (id) => {
    setTodo(todo.filter((cards) => cards.id !== id));
    setDone(done.filter((cards) => cards.id !== id));
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="layout">
        <header className="headerBar">
          <h1 className="pageTitle">My To Do List</h1>
        </header>

        <FormComp addList={addList} />

        <ListComp
          todo={todo}
          done={done}
          toggleDone={toggleDone}
          toggleCancle={toggleCancle}
          onRemove={onRemove}
        />

        <ScrollTopComp />
      </div>
    </React.Fragment>
  );
};

export default App;
