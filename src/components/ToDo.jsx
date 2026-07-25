import { ListTodo } from "lucide-react";
import React from "react";
import ToDoList from "./ToDoList";
import {useRef} from "react"

function ToDo() {

  const inputRef = useRef()

  const add =()=> {
    const inputText = inputRef.current.value
    console.log(inputText);
  }
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
        <button className="bg-indigo-600 hover:bg-indigo-700 rounded-full w-32 h-14 text-white text-lg font-medium cursor-pointer">
          ADD +
        </button>
      </div>

      {/* List Component  */}
      <div>
        <ToDoList text="Learn Coding"/>
        <ToDoList text="Learn Codind with Moeeeeezzzz"/>
      </div>
    </div>
  );
}

export default ToDo;
