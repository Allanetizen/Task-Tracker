import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState } from 'react'


const App =() => {
  
  
  const [tasks, setTasks] = useState(
    [
        {
         id:1,
         text:'Gym',
         day:'Jan 1st 10:30',
         reminder: true,
        },
        {
         id:2,
         text: 'Farming',
         day:'Jan 7th 1:20am',
         reminder:false,
        },
        {
         id:3,
         text: 'Movies',
         day:'June 1st',
         reminder: true,
        }
     ]
)
  return (
    <div className="container">
      <Header/>
      <Tasks tasks= {tasks}/>
    </div>
    
  );
}

export default App;
