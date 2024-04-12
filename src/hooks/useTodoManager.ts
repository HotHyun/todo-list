// hooks/useAuthentication.js

import { useState, useCallback, useEffect } from "react";

interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

const useTodoManager = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [number, setNumber] = useState<number>(0);
  const [doneNumber, setDoneNumber] = useState<number>(0);

  useEffect(() => {
    let done = 0;
    tasks.forEach((task) => {
      if (task.isDone) {
        done += 1;
      }
      setDoneNumber(done);
    });
  }, [tasks]);

  const addTask = useCallback((text: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: prev.length,
        text,
        isDone: false,
      },
    ]);
    setNumber((prev) => prev + 1);
  }, []);

  const removeTask = useCallback((id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setNumber((prev) => prev - 1);
  }, []);

  const updateTask = useCallback((id: number, text: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text } : task))
    );
  }, []);

  const doneTask = useCallback((id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }, []);

  return {
    tasks,
    number,
    doneNumber,
    addTask,
    removeTask,
    updateTask,
    doneTask,
  };
};

export default useTodoManager;
