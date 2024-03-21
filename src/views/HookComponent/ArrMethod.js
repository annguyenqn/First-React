import React, { useState } from 'react';
const items = [
    { name: 'Bike', price: 400 },
    { name: 'Car', price: 3000 },
    { name: 'Tv', price: 500 },
    { name: 'Phone', price: 600 },
    { name: 'Book', price: 30 },
    { name: 'Computer', price: 2000 }
]
const ArrMethod1 = [
    { name: 'Filter' },
    { name: 'Find' },
    { name: 'Some' },
    { name: 'Every' },
    { name: 'Reduce' }
]
function ArrMethod() {
    const [filterArr, setFilerArr] = useState([]);
    const [input, setInput] = useState();
    const [type, setType] = useState();
    const [total, setTotal] = useState();
    function handleInput(e) {
        setInput(e.target.value)
    }
    function handleClick(type) {
        console.log('this is type', type);
        if (type === 'Filter') {
            const itemFilter = items.filter((item) => { return item.price < input });
            setFilerArr(itemFilter)
        }
        if (type === 'Find') {
            const itemFind = items.find((item) => { return item.name === input })
            if (itemFind === undefined) {
                alert('Sản phẩm không tồn tại')
            } else {
                const find2 = new Array(itemFind)
                setFilerArr(find2)
                setTotal(null);
            }
        }
        if (type === 'Reduce') {
            const itemReduce = items.reduce((sum, item) => { return sum + item.price }, 0);
            // console.log('total', itemReduce);
            setTotal(itemReduce)
            setFilerArr([])
        }
    }
    console.log('this is type', filterArr);
    return (
        <>
            {/* <div className='bg-red-950'>aaaaaaaa</div> */}
            <div className='h-[500px] flex justify-center items-center '>
                <div className='h-96 w-3/5 bg-gray-300 rounded-lg'>
                    {/* ---------MAP-------- */}
                    <div className='flex gap-5 justify-center pt-4'>
                        {items.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='text-lg'>{item.name}: {item.price}$</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex gap-5 justify-center mt-10'>
                        {
                            ArrMethod1.map((item, index) => {
                                return (
                                    <div className='' key={index}>
                                        <div className=' rounded-lg h-10 w-20 bg-zinc-200 hover:bg-zinc-400 flex justify-center items-center'>
                                            <button onClick={() => handleClick(item.name)}  >{item.name}</button></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center items-center mt-6 '>
                        <input value={input} onChange={handleInput} className='w-64 h-8 rounded-lg'></input>
                    </div>
                    <div className='flex gap-5 justify-center pt-4'>
                        {filterArr.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='text-lg'>{item.name}: {item.price}$</div>
                                </div>
                            )
                        })}
                        {total && (
                            <div className='text-lg'>
                                {total}$
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ArrMethod;
