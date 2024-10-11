/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  newTodoProps,
  todoStoreProps,
  useTodoStore,
} from "../../store/todoStore";
import React from "react";
import { Popover } from "@mui/material";

const TodosList = () => {
  const todosList = useTodoStore((state: todoStoreProps) => state.todos);
  const [displayedTodos, setDisplayedTodos] = useState(todosList);
  const updateNewTodo = useTodoStore((state: todoStoreProps) => state.setTodos);
  const handleDeleteTodo = (id: number) => {
    const filteredTodo = todosList.filter(
      ({ todoId }: newTodoProps) => todoId !== id
    );
    updateNewTodo(filteredTodo);
  };
  const [newTodoValue, setNewTodoValue] = useState("");
  const [selectedId, setSelectedId] = useState<number>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    todoId: number,
    todoName: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(todoId);
    setNewTodoValue(todoName);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "editPanel-popover" : undefined;
  useEffect(() => {
    setDisplayedTodos(todosList);
  }, [todosList, displayedTodos]);

  const handleUpdateTodo = () => {
    todosList.forEach((item: newTodoProps) => {
      if (item.todoId === selectedId) return (item.todoName = newTodoValue);
    });
    updateNewTodo(todosList);
    handleClose();
  };

  return (
    <>
      <h3>List of Added Todos</h3>
      {displayedTodos.length > 0 ? (
        <>
          {displayedTodos.map(({ todoId, todoName }: newTodoProps) => {
            return (
              <div
                key={todoId}
                style={{
                  backgroundColor: "lightblue",
                  width: "auto",
                  display: "flex",
                  margin: "1rem",
                  padding: "0.25rem",
                  wordBreak: "break-all",
                }}
              >
                <p>{todoName}</p>
                <button
                  style={{
                    height: "2rem",
                    marginTop: "0.5rem",
                    marginLeft: "0.5rem",
                  }}
                  onClick={(e) => handleClick(e, todoId, todoName)}
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
                <button
                  style={{
                    height: "2rem",
                    marginTop: "0.5rem",
                    marginLeft: "0.5rem",
                  }}
                  onClick={() => handleDeleteTodo(todoId)}
                >
                  Del
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <h5>Currently U don't have any todos to view</h5>
      )}
    </>
  );
};
export default TodosList;
