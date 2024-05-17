import React, { useState, useCallback, useMemo } from "react";
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

  const addList = useCallback((newTodo) => {
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
    setTodo((prevTodo) => [...prevTodo, todoInfo]);
  }, []);

  const updateLists = (list) => {
    const updatedTodo = [];
    const updatedDone = [];

    for (const item of list) {
      if (item.isDone) {
        updatedDone.push(item);
      } else {
        updatedTodo.push(item);
      }
    }

    return [updatedTodo, updatedDone];
  };

  const toggleDone = useCallback(
    (id) => {
      const updatedTodoList = todo.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      });

      const [updatedTodo, updatedDone] = updateLists(updatedTodoList);
      setTodo(updatedTodo);
      setDone((prevDone) => [...updatedDone, ...prevDone]);
    },
    [todo]
  );

  const toggleCancle = useCallback(
    (id) => {
      const updatedDoneList = done.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });

      const [updatedTodo, updatedDone] = updateLists(updatedDoneList);
      setTodo((prevTodo) => [...prevTodo, ...updatedTodo]);
      setDone(updatedDone);
    },
    [done]
  );

  const onRemove = useCallback((id) => {
    setTodo((prevTodo) => prevTodo.filter((cards) => cards.id !== id));
    setDone((prevDone) => prevDone.filter((cards) => cards.id !== id));
  }, []);

  const todoList = useMemo(() => todo, [todo]);
  const doneList = useMemo(() => done, [done]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="layout">
        <header className="headerBar">
          <h1 className="pageTitle">My To Do List</h1>
        </header>

        <FormComp addList={addList} />

        <ListComp
          todo={todoList}
          done={doneList}
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
