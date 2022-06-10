import React from "react";
import Task from "./Task";

function TaskList({TASKS, filter}) {
  console.log(TASKS)
  const filterTask = TASKS.filter(task => filter === 'All' || task.category.includes(filter))
  const tasks = filterTask.map(task => {return <Task text={task.text} category={task.category} key={task.text}/>})
  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;
