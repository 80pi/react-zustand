/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
export interface newTodoProps {
  todoName: string;
  todoId: number;
}

export type todoStoreProps = {
  todos: newTodoProps[];
  setTodos: (newTodo: newTodoProps[]) => void;
};

export const useTodoStore = create<todoStoreProps>((set) => ({
  todos: [],
  setTodos: (newTodo: newTodoProps[]) =>
    set(() => ({
      todos: newTodo,
    })),
}));
