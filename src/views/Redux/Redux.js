import { useState } from "react"
import useReduxStore from 'https://cdn.skypack.dev/use-redux-store';
import { createStore } from "redux";

const Redux = () => {
    const [stateDemo, setstateDemo] = useState();
    let stateDemo2 = 0;
    const initState = 0
    const reducer = (state = initState, action) => {
        switch (action.type) {
            case 'DEPOSITE': return state + action.payload;
            case 'WITHDRAW': return state - action.payload;
            default: return state
        }
    }
    const handleDeposite = (payload) => {
        store.dispatch({
            type: 'DEPOSITE',
            payload
        })
    }
    const handleWithDraw = (payload) => {
        store.dispatch({
            type: 'WITHDRAW',
            payload
        })
    }
    const store = window.store = createStore(reducer)
    store.subscribe(() => {
        stateDemo2 = store.getState();
        console.log('sub', stateDemo2);
    })
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-3">
                <button onClick={() => { handleDeposite(10) }} className="bg-red-400 w-28 h-10 hover:bg-red-500 mt-5">Deposite 10$</button>
                <button onClick={() => { handleWithDraw(10) }} className="bg-lime-500 w-28 h-10 hover:bg-lime-600">WithDraw 10$</button>
                {/* <h1 className="text-3xl w-24 ">{stateDemo2}</h1> */}
            </div>
        </>
    )
}
export default Redux