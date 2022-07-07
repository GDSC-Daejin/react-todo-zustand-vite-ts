import create from 'zustand';
import { ITodoStoreType } from '../types/todo';

const date = new Date();
export const todoStore = create<ITodoStoreType>((set) => ({
  //Todo 기본 데이터
  todos: [],
  //Todo 추가
  addTodo: (content: string) =>
    set((state) => ({
      todos: [
        {
          content: content,
          id: Math.random() * 100,
          date: date.getUTCDate(),
          isCompleted: false,
        },
        ...state.todos,
      ],
    })),
  //Todo 삭제
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  //Todo 업데이트
  updateTodo: (id: number, content: string) =>
    set((state) => {
      // const foundTodo = state.todos.find((todo) => todo.id === id);
      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, content: content } : todo,
        ),
      };
    }),
  //Todo 완료 토글
  toggleCompletedTodo: (id: number) =>
    set((state) => {
      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        ),
      };
    }),
}));
