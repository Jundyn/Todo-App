import React, { useState, useEffect } from "react";

function TaskForm({ addTask, existingTask, onUpdate, onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Pre-fill form when editing a task
  useEffect(() => {
    if (existingTask) {
      setName(existingTask.name);
      setDescription(existingTask.description);
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setError("Both fields are required!");
      return;
    }
    setError("");

    if (existingTask) {
      onUpdate({ ...existingTask, name, description });
    } else {
      addTask({ name, description });
    }

    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">{existingTask ? "Update Task" : "Add Task"}</button>
      {existingTask && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default TaskForm;
