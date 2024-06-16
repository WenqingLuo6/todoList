import React, { useEffect, useState } from "react";
import { TodoItemProps } from "./types";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Button, Checkbox, IconButton, Input, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  toggleComplete,
  updateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [timeSpent, setTimeSpent] = useState(todo.timeSpent);

  const handleSave = () => {
    updateTodo(todo.id, title, timeSpent);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            <Input
              defaultValue="todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </StyledTableCell>
          <StyledTableCell align="right">
            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-number"
                label="time spent"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setTimeSpent(Number(e.target.value))}
                value={timeSpent}
                color="secondary"
              />
              <span style={{ alignContent: "center" }}> mins</span>
            </div>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Checkbox
              onChange={() => toggleComplete(todo.id)}
              color="default"
              checked={todo.completed}
            />
          </StyledTableCell>
          <StyledTableCell align="right">
            <Button onClick={handleSave}>save</Button>
          </StyledTableCell>
          <StyledTableCell align="right">
            <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
      ) : (
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            {todo.title}
          </StyledTableCell>
          <StyledTableCell align="right">{todo.timeSpent} mins</StyledTableCell>
          <StyledTableCell align="right">
            <Checkbox
              onChange={() => toggleComplete(todo.id)}
              color="default"
              checked={todo.completed}
            />
          </StyledTableCell>
          <StyledTableCell align="right">
            <Button onClick={() => setIsEditing(true)}>edit</Button>
          </StyledTableCell>
          <StyledTableCell align="right">
            <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
      )}
    </>
  );
};

export default TodoItem;
