import React, { useState } from 'react';

const MapStructure = () => {
    // Sử dụng Map để quản lý trạng thái hoàn thành của các công việc
    const [tasks, setTasks] = useState(new Map());
    const [input, setInput] = useState();

    // Hàm để thêm một công việc mới với trạng thái hoàn thành là false
    const addTask = (task) => {
        setTasks(new Map(tasks.set(input, false)));
        console.log('this is add Task', tasks);
    };

    // Hàm để đổi trạng thái hoàn thành của một công việc
    const toggleTaskCompletion = (taskId) => {
        setTasks(new Map(tasks.set(taskId, !tasks.get(taskId))));
        console.log('this is Toogle Task', tasks);

    };
    function handleInput(e) {
        setInput(e.target.value)
    }
    return (
        // <>
        //     {/* <div className='bg-slate-200 h-[500px] mt-5 ml-5 mr-5 flex justify-center items-center'>
        //         <div className='h-[400px] w-[600px] bg-white rounded-lg shadow-lg flex flex-col gap-5' >
        //             <div className='flex justify-center mt-5'>
        //                 <div className='text-2xl'>Todo List</div>
        //             </div>
        //             <div className='flex justify-center  '>
        //                 <div>
        //                     <input value={input} onChange={handleInput} className='w-72 h-10 rounded-lg shadow-xl border '></input>
        //                 </div>
        //                 <div className='h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-teal-300 '>
        //                     <button>Add</button>
        //                 </div>
        //             </div>
        //             {Array.from(tasks, ([taskId, completed]) => (
        //                 <div key={taskId}>
        //                     <div className='flex justify-center '>
        //                         <div className='h-auto flex justify-start items-center'>
        //                             <div>
        //                                 Add another component to Tailwind
        //                             </div>
        //                         </div>
        //                         <div className=' h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-teal-300 '>
        //                             <button>Done</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div> */}

        // </>
        <div>
            <input value={input} onChange={handleInput} className='w-64 h-8 rounded-lg'></input>
            {// Array From dùng để duyệt qua 1 object or Map
                // cấu trúc của Array From Array.from(object, mapFunction, thisValue) 
                // tasks là map mình muốn duyệt
                // taskID : key , completed:value
            }
            {Array.from(tasks, ([taskId, completed]) => (
                <div key={taskId}>
                    Task ID: {taskId} - Completed: {completed ? 'Yes' : 'No'}
                    <button onClick={() => toggleTaskCompletion(taskId)}>Toggle Completion</button>
                </div>
            ))}
            <button onClick={() => addTask(`task_${tasks.size + 1}`)}>Add Task</button>
        </div>
    );
};

export default MapStructure;
