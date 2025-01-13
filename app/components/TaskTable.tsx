import ToggleButton from "./ToggleButton";
import styles from "./TaskTable.module.scss";

interface Task {
  id: number;
  date: string;
  name: string;
  endDate: string;
  status: "Pending" | "Completed";
}

interface TaskTableProps {
  tasks: Task[];
  onToggleStatus: (id: number) => void;
}

export default function TaskTable({ tasks, onToggleStatus }: TaskTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Task Name</th>
          <th>End Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.date}</td>
            <td>{task.name}</td>
            <td>{task.endDate}</td>
            <td>
              <ToggleButton
                status={task.status}
                onClick={() => onToggleStatus(task.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
