/* eslint-disable @typescript-eslint/no-explicit-any */
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import {
  newTodoProps,
  todoStoreProps,
  useTodoStore,
} from "../../store/todoStore";

function TodoPopOverEditPanel({
  popOverId,
  popOverValue,
  todosList,
  setUpdatedTodos,
}: any) {
  const updateNewTodo = useTodoStore((state: todoStoreProps) => state.setTodos);
  const [newTodoValue, setNewTodoValue] = useState(popOverValue);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUpdateTodo = () => {
    todosList.forEach((item: newTodoProps) => {
      if (item.todoId === popOverId) return (item.todoName = newTodoValue);
    });
    updateNewTodo(todosList);
    handleClose();
    setUpdatedTodos(todosList);
  };
  console.log("too ", todosList);

  const open = Boolean(anchorEl);
  const id = open ? "editPanel-popover" : undefined;

  return (
    <div>
      <button
        style={{
          height: "2rem",
          marginTop: "0.5rem",
          marginLeft: "0.5rem",
        }}
        onClick={handleClick}
      >
        Edit
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <label htmlFor="todo-label">Edit your Todo</label>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          placeholder="Todo Name"
          value={newTodoValue}
          onChange={(e) => {
            setNewTodoValue(e?.target?.value);
          }}
        />
        <button onClick={() => handleUpdateTodo()}>Save</button>
        <button onClick={handleClose}>Cancel</button>
      </Popover>
    </div>
  );
}
export default TodoPopOverEditPanel;
