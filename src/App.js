import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";


const App = () => {


  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Gym',
        day: 'Jan 1st 10:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'Farming',
        day: 'Jan 7th 1:20am',
        reminder: false,
      },
      {
        id: 3,
        text: 'Movies',
        day: 'June 1st',
        reminder: true,
      }
    ]
  )
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    console.log(id)
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])

  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task
    )
    )
  }
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task to show :( '}
    </div>

  );
}

export default App;
