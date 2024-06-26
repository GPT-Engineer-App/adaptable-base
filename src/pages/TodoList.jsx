import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { List, ListItem } from "@/components/ui/list";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">To-Do List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Enter a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button onClick={addTask} className="w-full mt-2">
                Add Task
              </Button>
            </div>
            <List>
              {tasks.map((task, index) => (
                <ListItem key={index} className="flex justify-between">
                  {task}
                  <Button variant="destructive" onClick={() => deleteTask(index)}>
                    Delete
                  </Button>
                </ListItem>
              ))}
            </List>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;