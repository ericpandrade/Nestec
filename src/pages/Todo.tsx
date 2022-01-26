/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useHistory, Link } from "react-router-dom";
import { useAuthContext } from "../context/Authentication";

import styles from "../styles/todo.module.scss";
import usePersistedState from "../utils/persistedState";

interface TasksType {
  id: number;
  title: string;
  isConcluded: boolean;
}

export function ToDoList() {
  const { auth, RouteAuthentication, changeTheme, themeState } =
    useAuthContext();

  const [arrayTasks, setArrayTasks] = useState<TasksType[]>(
    localStorage.getItem("@Todo/arrayTasks") === null
      ? []
      : JSON.parse(localStorage.getItem("@Todo/arrayTasks") as string)
  );

  const [taskTitle, setTaskTitle] = usePersistedState("Todo/@taskTitle", "");

  const history = useHistory();

  useEffect(() => {
    document.title = "Nestec | To.Do";
    !auth && history.push("/");
  }, []);

  useEffect(() => {
    localStorage.setItem("@Todo/arrayTasks", JSON.stringify(arrayTasks));
  }, [arrayTasks]);

  function addTask() {
    if (taskTitle.trim() === "") return window.alert("Please enter a title");

    const newTask = {
      id: Math.random(),
      title: taskTitle,
      isConcluded: false,
    };

    setArrayTasks((event) => [...event, newTask]);
    setTaskTitle("");
  }

  function changeCheckTask(id: number) {
    const completedTasks = arrayTasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isConcluded: !task.isConcluded,
          }
        : task
    );

    setArrayTasks(completedTasks);
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = arrayTasks.filter((task) => task.id !== id);

    setArrayTasks(filteredTasks);
  }

  return (
    <>
      <div className={styles.TodoPageContainer}>
        <header className={styles.TodoPageHeader}>
          <Link to="/">
            <button onClick={RouteAuthentication}>
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3136 47.2908L26.7864 49.849C25.7163 50.9322 23.9859 50.9322 22.9272 49.849L0.796875 27.459C-0.273214 26.3758 -0.273214 24.6242 0.796875 23.5525L22.9272 1.15096C23.9973 0.0677612 25.7277 0.0677612 26.7864 1.15096L29.3136 3.70917C30.3951 4.80389 30.3723 6.59003 29.2681 7.66171L15.5504 20.8906H48.2678C49.7819 20.8906 51 22.1236 51 23.6562V27.3437C51 28.8764 49.7819 30.1094 48.2678 30.1094H15.5504L29.2681 43.3383C30.3837 44.41 30.4065 46.1961 29.3136 47.2908Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>

          <h1>To.Do</h1>
        </header>

        {themeState ? (
          <button className={styles.ChangeThemeButton} onClick={changeTheme}>
            <img
              src="moon-light.svg"
              alt="Lua Branca"
              className={styles.ChangeTheme}
            />
          </button>
        ) : (
          <button className={styles.ChangeThemeButton} onClick={changeTheme}>
            <img
              src="moon-dark.svg"
              alt="Lua Preta"
              className={styles.ChangeTheme}
            />
          </button>
        )}

        <div className={styles.taskTable}>
          <div className={styles.AddTask}>
            <h2>Minhas Task</h2>
            <div>
              <input
                type="text"
                placeholder="Digite sua task"
                onChange={(event) => setTaskTitle(event.target.value)}
                value={taskTitle}
                maxLength={30}
              />
              <button onClick={addTask}>
                <svg
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9375 10.2969V15.3828H0.546875V10.2969H23.9375ZM14.9844 0.734375V25.5781H9.52344V0.734375H14.9844Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.tasks}>
            {arrayTasks.map((event) => (
              <div className={styles.tasksBar} key={event.id}>
                <div>
                  <button
                    className={styles.CheckBoxTask}
                    onClick={() => changeCheckTask(event.id)}
                  >
                    {!event.isConcluded ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="19"
                          height="19"
                          rx="4.5"
                          fill="white"
                          stroke="#28415D"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="19"
                          height="19"
                          rx="4.5"
                          fill="#28415D"
                          stroke="#28415D"
                        />
                        <path
                          d="M7.75502 14.0149L3.20502 9.46495C2.93166 9.19159 2.93166 8.74838 3.20502 8.475L4.19494 7.48504C4.4683 7.21166 4.91154 7.21166 5.1849 7.48504L8.24999 10.5501L14.8151 3.98505C15.0884 3.71169 15.5317 3.71169 15.805 3.98505L16.795 4.975C17.0683 5.24835 17.0683 5.69157 16.795 5.96495L8.74497 14.015C8.47159 14.2883 8.02837 14.2883 7.75502 14.0149V14.0149Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </button>

                  <span>{event.title}</span>
                </div>
                <button
                  className={styles.ButtonDelete}
                  onClick={() => handleRemoveTask(event.id)}
                >
                  <svg
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3661 17.875H12.3839C12.5189 17.875 12.6484 17.8207 12.7438 17.724C12.8392 17.6273 12.8929 17.4961 12.8929 17.3594V8.07812C12.8929 7.94137 12.8392 7.81022 12.7438 7.71352C12.6484 7.61682 12.5189 7.5625 12.3839 7.5625H11.3661C11.2311 7.5625 11.1016 7.61682 11.0062 7.71352C10.9108 7.81022 10.8571 7.94137 10.8571 8.07812V17.3594C10.8571 17.4961 10.9108 17.6273 11.0062 17.724C11.1016 17.8207 11.2311 17.875 11.3661 17.875ZM18.3214 3.4375H14.8264L13.3844 1.00117C13.2034 0.695671 12.9474 0.442875 12.6414 0.267419C12.3353 0.0919627 11.9896 -0.000169443 11.6379 2.33942e-07H7.36208C7.01055 -2.10018e-05 6.66501 0.0921817 6.3591 0.267631C6.05319 0.44308 5.79734 0.695796 5.61645 1.00117L4.17364 3.4375H0.678571C0.498603 3.4375 0.326006 3.50993 0.198749 3.63886C0.0714922 3.7678 0 3.94266 0 4.125L0 4.8125C0 4.99484 0.0714922 5.1697 0.198749 5.29864C0.326006 5.42757 0.498603 5.5 0.678571 5.5H1.35714V19.9375C1.35714 20.4845 1.57162 21.0091 1.95339 21.3959C2.33516 21.7827 2.85295 22 3.39286 22H15.6071C16.147 22 16.6648 21.7827 17.0466 21.3959C17.4284 21.0091 17.6429 20.4845 17.6429 19.9375V5.5H18.3214C18.5014 5.5 18.674 5.42757 18.8013 5.29864C18.9285 5.1697 19 4.99484 19 4.8125V4.125C19 3.94266 18.9285 3.7678 18.8013 3.63886C18.674 3.50993 18.5014 3.4375 18.3214 3.4375ZM7.28786 2.18754C7.31054 2.14929 7.34262 2.11767 7.38098 2.09575C7.41934 2.07383 7.46266 2.06237 7.5067 2.0625H11.4933C11.5373 2.06245 11.5805 2.07394 11.6188 2.09585C11.6571 2.11777 11.6891 2.14936 11.7117 2.18754L12.4522 3.4375H6.54779L7.28786 2.18754ZM15.6071 19.9375H3.39286V5.5H15.6071V19.9375ZM6.61607 17.875H7.63393C7.7689 17.875 7.89835 17.8207 7.99379 17.724C8.08924 17.6273 8.14286 17.4961 8.14286 17.3594V8.07812C8.14286 7.94137 8.08924 7.81022 7.99379 7.71352C7.89835 7.61682 7.7689 7.5625 7.63393 7.5625H6.61607C6.48109 7.5625 6.35165 7.61682 6.2562 7.71352C6.16076 7.81022 6.10714 7.94137 6.10714 8.07812V17.3594C6.10714 17.4961 6.16076 17.6273 6.2562 17.724C6.35165 17.8207 6.48109 17.875 6.61607 17.875Z"
                      fill="#28415D"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
