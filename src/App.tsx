import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import axios from "axios";
import { Todo } from "./components/types";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
  });

  useEffect(() => {
    if (todos.length == 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          const initialTodos = response.data.slice(0, 10).map((todo: any) => ({
            ...todo,
            timeSpent: 0,
          }));
          setTodos(initialTodos);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string, timeSpent: number) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      completed: false,
      timeSpent,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const updateTodo = (id: string, title: string, timeSpent: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, timeSpent } : todo,
      ),
    );
  };

  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <h1>TODO List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default App;
