export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  timeSpent: number;
}

export interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
  updateTodo: (id: string, title: string, timeSpent: number) => void;
}

export interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
  updateTodo: (id: string, title: string, timeSpent: number) => void;
}

export interface AddTodoProps {
  addTodo: (title: string, timeSpent: number) => void;
}

export interface FooterProps {
  todos: Todo[];
}
