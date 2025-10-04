import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar essa tarefa
      if (task.id === taskId) {
        return { ...task, iscompleted: !task.iscompleted };
      } else {
        //não preciso atualizar essa tarefa
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
