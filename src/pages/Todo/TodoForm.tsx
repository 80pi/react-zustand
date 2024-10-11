import { useState, useEffect } from "react";
import { todoStoreProps, useTodoStore } from "../../store/todoStore";
import { v4 as uuid } from "uuid";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const [newId, setNewId] = useState("");

  useEffect(() => {
    const newUuid = uuid();
    setNewId(newUuid);
  }, [newTodo]);
  const exisitingTods = useTodoStore((state: todoStoreProps) => state.todos);
  const handleSetTodo = useTodoStore((state: todoStoreProps) => state.setTodos);
  const handleAddTodo = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedTodo: any = [
      ...exisitingTods,
      { todoName: newTodo, todoId: newId },
    ];
    console.log("new ttt", updatedTodo);
    handleSetTodo(updatedTodo);
    setNewTodo("");
  };
  return (
    <>
      <label htmlFor="todo-label">Add your Todo</label>
      <input
        type="text"
        name="todo-input"
        id="todo-input"
        placeholder="Todo Name"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e?.target?.value);
        }}
      />
      <button onClick={handleAddTodo} disabled={!newTodo}>
        Add
      </button>
    </>
  );
};
export default TodoForm;
