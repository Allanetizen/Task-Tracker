const tasks =[
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
const Tasks = () => {
    return(
        <>
        {tasks.map((task) =>(
        <h3 key = {task.id} >{task.text}</h3>))}
        </>
    )
}
export default Tasks