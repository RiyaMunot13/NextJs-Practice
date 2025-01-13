"use client";
import React, { useState } from "react";
import styles from "./TodoList.module.scss";
import SearchBar from "./SearchBar";
import TaskTable from "./TaskTable";

interface Task {
  id: number;
  date: string;
  name: string;
  endDate: string;
  status: "Pending" | "Completed";
}

interface TaskTableProps {
  taskData: Task[];
}

export default function TodoList({ taskData }: TaskTableProps) {
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
    <div>
      <SearchBar onSearch={handleSearch} />
      <TaskTable tasks={filteredTasks} onToggleStatus={toggleTaskStatus} />
    </div>
  );
}
