import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = [...userData];

    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);

    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-lg rounded-2xl p-8 mt-6 border border-emerald-100"
    >
      <h2 className="text-xl font-semibold text-emerald-700 mb-6">
        ✨ Create New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:flex-row gap-6"
      >
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Task Title
            </label>
            <Input
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date
            </label>
            <Input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Assign To
            </label>
            <Input
              type="text"
              placeholder="Employee name"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <Input
              type="text"
              placeholder="design, dev, etc."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <Textarea
            placeholder="Write task details here..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className="h-40 rounded-xl"
          />
          <Button
            type="submit"
            className="mt-6 w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-lg"
          >
            Create Task
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateTask;
