import React from "react";
import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({ todos }) => {
  const totalUncompletedTime = todos
    .filter((todo) => !todo.completed)
    .reduce((sum, todo) => sum + todo.timeSpent, 0);

  return (
    <footer>
      <b>Total uncompleted time: {totalUncompletedTime} mins</b>
    </footer>
  );
};

export default Footer;
