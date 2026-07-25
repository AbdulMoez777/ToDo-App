import React from "react";
import { Circle, CircleCheck, Trash2 } from "lucide-react";

function ToDoList({ text, id, isComplete, deleteTodo, toggle }) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? (
          <CircleCheck className="w-7 text-green-700" />
        ) : (
          <Circle className="w-7 text-gray-400" />
        )}{" "}
        <p
          className={`ml-4 text-[17px] ${
            isComplete ? "line-through text-gray-400" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>

      <div>
        <Trash2
          onClick={() => {
            deleteTodo(id);
          }}
          size={18}
          className="text-slate-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ToDoList;
