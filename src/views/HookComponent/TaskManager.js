import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState(new Map());
  const [newTaskName, setNewTaskName] = useState('');
  const addTask = () => {
    if (newTaskName) {
      setTasks(new Map(tasks.set(newTaskName, false)));
      setNewTaskName('');
    }
  };
  const toggleTaskCompletion = (task) => {
    setTasks(new Map(tasks.set(task, !tasks.get(task))));
    console.log('this map', task);
  };

  // console.log('this is map task', tasks.keys());
  return (
    <>
      <div className='bg-slate-200 h-[500px] mt-5 ml-5 mr-5 flex justify-center items-center'>
        <div className='h-[400px] w-[600px] bg-white rounded-lg shadow-lg flex flex-col gap-5' >
          <div className='flex justify-center mt-5'>
            <div className='text-2xl'>Todo List</div>
          </div>
          <div className='flex justify-center  '>
            <div>
              <input value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} className='w-72 h-10 rounded-lg shadow-xl border '></input>
            </div>
            <div className='h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-teal-300 '>
              <button onClick={addTask}>Add</button>
            </div>
          </div>
          {Array.from(tasks, ([task, completed]) => (
            <div key={task}>
              <div className='flex justify-center '>
                <div className={`${completed ? 'line-through' : ''}  w-72  h-auto flex justify-start items-center`}>
                  <div className='text-lg'>
                    {task}
                  </div>
                </div>
                <div className=' h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-teal-300 '>
                  <button onClick={() => toggleTaskCompletion(task)} >
                    {
                      `${completed ? 'Not Done' : 'Done'} `
                    }
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TaskManager;
