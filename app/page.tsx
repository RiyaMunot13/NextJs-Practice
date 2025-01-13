import React, { useState } from "react";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar";
import TaskTable from "./components/TaskTable";
import TodoList from "./components/TodoList";

type Task = {
  id: number;
  date: string;
  name: string;
  endDate: string;
  status: "Pending" | "Completed";
};
const taskData: Task[] = [
  {
    id: 1,
    date: "2023-05-01",
    name: "Complete project",
    endDate: "2023-05-10",
    status: "Pending",
  },
  {
    id: 2,
    date: "2023-05-02",
    name: "Review code",
    endDate: "2023-05-05",
    status: "Completed",
  },
  {
    id: 3,
    date: "2023-05-03",
    name: "Write documentation",
    endDate: "2023-05-15",
    status: "Pending",
  },
];

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>
      <TodoList taskData={taskData} />
    </div>
  );
}
