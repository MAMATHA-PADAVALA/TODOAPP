
import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Task from './Task/Task';

export default function App(){


  const [todoList,setToDoList]=useState(["Read SpringBoot", 
  "Complete assignments", 
  "Prepare breakfast", 
  "Sleep for 2 hours", 
  "Take a shower"]);

  const removeAllTasks = () => {
    setToDoList([]);
  };

      return(
        <div className="App">
          <Header/>
          <hr/>

          <div>
        {todoList.map((todo) => (
          <>
            <div key={todo}></div>
            <Task task={todo}/>
          </>
        ))}
      </div>

      <div>
        <div>
      {todoList.length === 0 ? (
          <i>Nothing to do buddy. Sleep!</i>
        ):""
        }
        </div>
        
          <button onClick={() => removeAllTasks()}>
            Empty
          </button>
          
          
      </div>
          
        </div>
      );
           
}


