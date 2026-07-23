import { ListTodo } from "lucide-react";
import React from "react";
function ToDo() {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl ">
      
      {/* title  */}
      <div className="flex items-center mt-6 gap-2 justify-center">
        <ListTodo size={25}/>
        <h1 className="text-3xl font-bold">ToDo List</h1>
      </div>
    </div>
  );
}

export default ToDo;
