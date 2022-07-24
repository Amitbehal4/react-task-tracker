import Task from './Task'
import {useState} from 'react'


        const Tasks =()=>{
            const [tasks] =useState([
                {
                id:1,
                text: 'Board members meeting',
                day: 'July 24th at 2:00pm',
                reminder: true,
            },
            {
                id:2,
                text: 'Disciplinary Panel Meeting',
                day: 'July 25th at 2:00pm',
                reminder: false,
            },
            {
                id:3,
                text: 'Staff General Meeting',
                day: 'July 26th at 4:00pm',
                reminder: false,
            },
        ])
        return (
            <>
          {tasks.map((task)=>(
            <Task key={task.id} task={task}/>
          ))}
          </>
        )
        }
export default Tasks