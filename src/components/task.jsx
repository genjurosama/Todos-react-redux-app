import React from "react";
import { Button } from "react-bootstrap";
import { Input } from "travix-ui-kit";

export const Task = ({ task }) => {
  return [<td>{task.title}</td>, <td>{task.description}</td>];
};
