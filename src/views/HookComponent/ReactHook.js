import React, { useState } from 'react';

function ReactHook() {
    const [count, setCount] = useState(0);
    const [increaseClicks, setIncreaseClicks] = useState(0);
    const [decreaseClicks, setDecreaseClicks] = useState(0);

    const increase = () => {
        setIncreaseClicks(increaseClicks + 1);
        setCount(count + 1);
    };

    const decrease = () => {
        setDecreaseClicks(decreaseClicks + 1);
        setCount(count - 1);
    };
    return (
        <div className=' h-[500px] flex justify-center items-center '>
            <div className='flex items-center flex-col bg-gray-300 h-52 gap-10 rounded-lg  '>
                <div className='text-3xl pt-3 w-32'><p>Count: {count}</p></div>
                <div className='flex gap-5  px-5 '>
                    <div> <p>Number of Increase clicks: {increaseClicks}</p></div>
                    <div><p>Number of Decrease clicks: {decreaseClicks}</p></div>
                </div>
                <div className='flex gap-5 pb-5'>
                    <button className='bg-cyan-200 h-10 w-20 rounded-lg hover:bg-cyan-500' onClick={increase}>Increase</button>
                    <button className='bg-red-200 h-10 w-20 rounded-lg hover:bg-red-500' onClick={decrease}>Decrease</button>
                </div>
            </div>
        </div>
    );
}

export default ReactHook;
