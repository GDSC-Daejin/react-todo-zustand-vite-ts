// todo type입니다.

export interface ITodoType {
  content: string;
  id: number;
  date: number;
  isCompleted: boolean;
}

export interface ITodoStoreType {
  todos: ITodoType[];
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, content: string) => void;
  toggleCompletedTodo: (id: number) => void;
}
