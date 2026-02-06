import React, { useState } from "react";
import TaskForm from "./TaskForm";

function TaskItem({ task, updateTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <TaskForm
          existingTask={task}
          onUpdate={(updatedTask) => {
            updateTask(updatedTask);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div onClick={() => toggleComplete(task.id)}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </div>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
