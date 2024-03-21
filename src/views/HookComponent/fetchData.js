import React, { useState } from 'react';
const uuid = require('uuid');
function ReactHook() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [edit, setEdit] = useState(null);
    const [editID, setEditId] = useState();
    const addTodo = () => {
        if (newTodo.trim() === '') {
            return;
        } else {
            // Add new todo
            setTodos([...todos, { id: uuid.v4(), title: newTodo, completed: false }]);
        }
        setNewTodo('');
    };
    const editTodo = (todo) => {
        console.log('this is id update', todo);
        setEdit(todo.title)
        setEditId(todo.id);
    };
    const updateTodo = (todo) => {
        let todoCopy = [...todos]
        const itemFind = todoCopy.findIndex((item) => { return item.id === todo.id })
        todoCopy[itemFind].title = edit
        setTodos(todoCopy)
        setEditId('')
        console.log('this is todo copy', todoCopy);
    }
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((item) => { return item.id !== id });
        setTodos(updatedTodos);
        // setEditingIndex(null);
    };
    const toggleComplete = (todo) => {
        // console.log('this is complete', todo);
        const todoCopy = [...todos];
        const itemCompleted = todoCopy.findIndex((item) => { return item.id === todo.id })
        console.log('this is item', itemCompleted);
        todoCopy[itemCompleted].completed = !todoCopy[itemCompleted].completed
        setTodos(todoCopy);
    };
    return (
        <div className='bg-slate-200 h-[600px] mt-5 ml-5 mr-5 flex justify-center items-center'>
            <div className='h-[500px] w-[700px] bg-white rounded-lg shadow-lg flex flex-col gap-5' >
                <div className='flex justify-center mt-5'>
                    <div className='text-2xl'>Todo List</div>
                </div>
                <div className='flex justify-center  '>
                    <div>
                        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='w-72 h-10 rounded-lg shadow-xl border p-2.5 '></input>
                    </div>
                    <div className='h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-teal-300 '>
                        <button onClick={addTodo}>Add</button>
                    </div>
                </div>
                <div className='flex justify-center  '>
                </div>
                {todos.map((todo, index) => (
                    <div key={todo.id}>
                        <div className='flex justify-center '>
                            <div className={` w-72  h-auto flex justify-start items-center`}>
                                <div className={`${todo.id === editID ? 'hidden' : 'text-lg'} ${todo.completed ? 'line-through' : ''} `}>
                                    {todo.title}
                                </div>
                                {editID && (
                                    <div className={`${todo.id === editID ? 'flex' : 'hidden'} `}>
                                        <input value={edit} onChange={(e) => setEdit(e.target.value)} className='p-2.5 w-72 h-10 rounded-lg shadow-xl border '></input>
                                    </div>
                                )}
                            </div>
                            <div className={`${editID === todo.id ? 'hidden' : 'flex'} h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-x-teal-300 `}>
                                <button onClick={() => editTodo(todo)} >
                                    Edit
                                </button>
                            </div>
                            <div className={` ${editID === todo.id ? 'flex' : 'hidden'}  h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-x-teal-300 `}>
                                <button onClick={() => updateTodo(todo)} >
                                    Update
                                </button>
                            </div>
                            <div className=' h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-x-red-300 '>
                                <button onClick={() => deleteTodo(todo.id)} >
                                    Delete
                                </button>
                            </div>
                            <div className=' h-10 w-20 shadow-xl border-2 border-teal-50 rounded-md flex justify-center ml-5 hover:border-x-amber-400 '>
                                <button onClick={() => toggleComplete(todo)} >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReactHook;
