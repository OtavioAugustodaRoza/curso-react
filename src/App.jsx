import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import clsx from "clsx";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [
      {
        id: 1,
        title: "Estudar programação",
        description: "Estudar programação para se tornar developer",
        iscompleted: false,
      },
      {
        id: 2,
        title: "Ler livros",
        description: "Ler livros de desenvolvimento pessoal",
        iscompleted: false,
      },
      {
        id: 3,
        title: "Exercitar-se",
        description: "Fazer exercícios físicos regularmente",
        iscompleted: false,
      },
    ];

  });
  
  //como chamar api
  // useEffect(() => {
  //   const FetchTasks = async () => {
  //     // chamar API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=3",
  //       { method: "GET" }
  //     );

  //     const data = await response.json();
  //     setTasks(data);
  //   };

  //   FetchTasks(); 
  // }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function onTaskClick(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, iscompleted: !task.iscompleted } : task
      )
    );
  }

  function onADDTasksSubmit(newTask) {
    const newTasks = {
      id: v4(),
      title: newTask.title,
      description: newTask.description,
      iscompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div
      className={clsx(
        "bg-slate-500 flex justify-center p-6 min-h-screen",
        tasks.length <= 8 ? "w-screen" : "w-full"
      )}
    >
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onADDTasksSubmit={onADDTasksSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;