import React, { useState } from "react";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar";
import TaskTable from "./components/TaskTable";

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
  const [tasks, setTasks] = useState<Task[]>(taskData);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  const toggleTaskStatus = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>
      <SearchBar onSearch={handleSearch} />
      <TaskTable tasks={filteredTasks} onToggleStatus={toggleTaskStatus} />
    </main>
  );
}
