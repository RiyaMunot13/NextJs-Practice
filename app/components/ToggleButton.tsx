"use client";
import { useState, useEffect } from "react";
import styles from "./ToggleButton.module.scss";
interface ToggleButtonProps {
  status: "Pending" | "Completed";
  onClick: () => void;
}

export default function ToggleButton({ status, onClick }: ToggleButtonProps) {
  const [isCompleted, setIsCompleted] = useState(status === "Completed");

  useEffect(() => {
    setIsCompleted(status === "Completed");
  }, [status]);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
    onClick();
  };

  return (
    <div className={styles.toggleContainer}>
      <button
        onClick={handleToggle}
        className={`${styles.toggleButton} ${
          isCompleted ? styles.completed : styles.pending
        }`}
      >
        <span className={styles.toggleSlider} />
      </button>
      <span className={styles.statusText}>
        {isCompleted ? "Completed" : "Pending"}
      </span>
    </div>
  );
}
