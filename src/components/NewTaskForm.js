import React, { useState } from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {
  const optionEle = (category) => {
    if (category === 'All'){
      return (<option key={category} style={{display:'none'}}></option>)
    } 
    return (<option key={category}>{category}</option>)
  }
  const formSubmit = (e) => {
    e.preventDefault()
    const obj = {text: taskDetails, category: taskCat}
    onTaskFormSubmit(obj)
    setTaskCat('')
    setTaskDetails('')
  }
  const [taskDetails, setTaskDetails] = useState('')
  const [taskCat, setTaskCat] = useState('')

  return (
    <form className="new-task-form" onSubmit={e => formSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value={taskDetails} onChange={e => setTaskDetails(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value ={taskCat} onChange={e => setTaskCat(e.target.value)}>
          {CATEGORIES.map(category => {return optionEle(category)})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
