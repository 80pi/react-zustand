import {
  newTodoProps,
  todoStoreProps,
  useTodoStore,
} from "../../store/todoStore";

const TodosList = () => {
  const todosList = useTodoStore((state: todoStoreProps) => state.todos);
  const updateNewTodo = useTodoStore((state: todoStoreProps) => state.setTodos);
  const handleDeleteTodo = (id: number) => {
    const filteredTodo = todosList.filter(
      ({ todoId }: newTodoProps) => todoId !== id
    );
    updateNewTodo(filteredTodo);
    // console.log("id", id, filteredTodo);
  };

  return (
    <>
      {todosList.length > 0 ? (
        <>
          <h3>List of Added Todos</h3>
          {todosList.map(({ todoId, todoName }: newTodoProps) => {
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
                  onClick={() => handleDeleteTodo(todoId)}
                >
                  X
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <h3>Currently U don't have any todos to view</h3>
      )}
    </>
  );
};
export default TodosList;
