import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const tasks = data.tasks || [];

  return (
    <div className="mt-10 p-4">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Your Tasks</h2>

      {/* Task container */}
      {tasks.length > 0 ? (
        <div
          id="tasklist"
          className=" flex overflow-x-auto flex-nowrap gap-6 py-2 scrollbar-hide"
        >
          {tasks.map((elem, idx) => {
            if (elem.active) return <AcceptTask key={idx} data={elem} />;
            if (elem.newTask) return <NewTask key={idx} data={elem} />;
            if (elem.completed) return <CompleteTask key={idx} data={elem} />;
            if (elem.failed) return <FailedTask key={idx} data={elem} />;
            return null;
          })}
        </div>
      ) : (
        <div className="w-full bg-gray-800 text-gray-300 py-10 rounded-xl text-center">
          <p className="text-sm">No tasks assigned yet 🚀</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
