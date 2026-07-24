import React from "react";
import { CircleCheck, Trash2 } from "lucide-react";

function ToDoList({text}) {
  return (
    <div className="flex items-center my-3 gap-2">

      <div className="flex flex-1 items-center cursor-pointer">
        <CircleCheck className="w-7"/>
        <p className="text-slate-700 ml-4 text-[17px]">
            {text}
        </p>
      </div>

      <div>
        <Trash2  className="text-slate-500"/>
      </div>
    </div>
  );
}

export default ToDoList;
