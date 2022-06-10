import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filter, setFilter] = useState('')
  const catSetFilter = (cat) => {
    setFilter(cat)
  }
  const [tasks, setTASKS] = useState(TASKS)
  const onTaskFormSubmit = (task) => {
    setTASKS([...tasks, task])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES = {CATEGORIES} catSetFilter = {catSetFilter}/>
      <NewTaskForm CATEGORIES = {CATEGORIES} onTaskFormSubmit = {onTaskFormSubmit}/>
      <TaskList TASKS={tasks} filter = {filter}/>
    </div>
  );
}

export default App;
