import React from "react";
import { Table } from "react-bootstrap";
import { Task } from "../components/task.jsx";
import { Button } from "travix-ui-kit";
export const TasksList = ({ tasks, showEditPage, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <span>No Tasks</span>
      ) : (
        <Table className="tasks"  striped bordered condensed hover>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
          <tbody>
            {tasks.map(task => {
              return (
                <tr>
                  <Task id={task.id} task={task} />
                  <td>
                    {" "}
                    <Button
                      type="button"
                      size="m"
                      className="marginedButton"
                      onClick={e => showEditPage(task)}
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      size="m"
                      className="marginedButton"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};
