import { ListTodo } from "lucide-react";
import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import { useRef, useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodos((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  };

  useEffect(()=>{
    console.log(todos)

  },[todos])
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl ">
      {/* title  */}
      <div className="flex items-center mt-6 gap-2 justify-center">
        <ListTodo size={25} />
        <h1 className="text-3xl font-bold">ToDo List</h1>
      </div>

      {/* Input Box  */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600"
        />
        <button
          onClick={add}
          className="bg-indigo-600 hover:bg-indigo-700 rounded-full w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* List Component  */}
      <div>
        {todos.map((item, index) => {
          return (
            <ToDoList
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
