import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

import { useLoading } from "./useLoading";

type Props = {
  children: React.ReactNode;
};

export type Task = {
  id: string;
  text: string;
  checked: boolean;
};

type TasksContextProps = {
  tasks: Task[];
  handleCreateTask: (task: string) => void;
  handleCheckTask: (taskId: string) => void;
  handleDeleteTask: (taskName: string) => void;
};

const TasksContext = createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: Props) => {
  const { setLoading } = useLoading();

  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const handleCreateTask = useCallback(
    (taskText: string) => {
      if (
        tasks.filter((task) => task.text === taskText).length === 0
      ) {
        const newTask: Task = {
          id: uuid(),
          text: taskText,
          checked: false,
        };

        const newTasks = [newTask, ...tasks];

        setTasks(newTasks);

        localStorage.setItem("tasks", JSON.stringify(newTasks));
      } else {
        console.error("Task exists in array");
      }
    },
    [tasks]
  );

  const handleCheckTask = useCallback(
    (taskId: string) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId
          ? { ...task, checked: !task.checked }
          : task
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [tasks]
  );

  const handleDeleteTask = (taskId: string) => {
    console.log("taskId:", taskId);

    const tasksArrayWithoutClickedTask = tasks.filter(
      (task) => task.id !== taskId
    );

    setTasks(tasksArrayWithoutClickedTask);

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasksArrayWithoutClickedTask)
    );
  };

  useEffect(() => {
    setLoading(true);

    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleCreateTask,
        handleCheckTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTask = () => {
  const context = useContext(TasksContext);

  return context;
};

export default useTask;
