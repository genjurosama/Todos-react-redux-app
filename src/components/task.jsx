import React from "react";
import { Button } from "react-bootstrap";
import { Input } from "travix-ui-kit";

export const Task = ({ task }) => {
  return [
    <td>
      <span className="todoTitle">{task.title}</span>
    </td>,
    <td>
      <span className="todoDesc">{task.description}</span>
    </td>
  ];
};
