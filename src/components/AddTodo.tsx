import React, { useState } from "react";
import { AddTodoProps } from "./types";
import { Button, Input, TextField } from "@mui/material";

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, timeSpent);
      setTitle("");
      setTimeSpent(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <Input
        defaultValue="todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="outlined-number"
        label="time spent"
        type="number"
        defaultValue={0}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setTimeSpent(Number(e.target.value))}
        value={timeSpent}
        color="secondary"
      />
      <Button variant="contained" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
