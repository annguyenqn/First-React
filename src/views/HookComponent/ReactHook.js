import React, { useState } from "react";
// const gifts = ['xe', 'bong', 'maybay', 'babay'];
// const cars = [
//     {
//         id: 0,
//         name: 'BMW'
//     },
//     {
//         id: 1,
//         name: 'MERC'
//     },
//     {
//         id: 2,
//         name: 'VINFAST'
//     },
// ]


const ReactHook = () => {
    //random gift
    // const [gift, setGift] = useState();
    // const giftChange = () => {
    //     const index = Math.floor(Math.random() * gifts.length);
    //     setGift(gifts[index]);

    // }

    //----------------LAY DATA RADIO INPUT Binding-------------
    // const [checked, setChecked] = useState([]);
    // const handleRegister = () => {
    //     console.log('this is id car', checked);
    // }
    // const handleOnchange = (id) => {
    //     setChecked(prev => {
    //         //Nếu id có trong mảng checked thì biến ischecked == true;
    //         const isChecked = checked.includes(id)
    //         if (isChecked) {
    //             //dùng filter trả ra các kết quả mà id khác item trong mảng checked.
    //             return checked.filter(item => item !== id);
    //         } else {
    //             return [...prev, id];
    //         }
    //     })
    // }
    // ----------------TodoList-------------------------------------

    return (
        <>
            {/* <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={giftChange}>Lấy thưởng</button> */}
            {/* -----------binding 2 chieu----------- */}
            {/* <div>
                {
                    cars.map((item, index) => {
                        return (
                            <>
                                <div key={item.id}>

                                    radio
                                     <input
                                        type="radio"
                                        checked={car === item.id}
                                        onChange={() => setCar(item.id)}
                                    ></input>
                                    <input
                                        type="checkbox"
                                        checked={checked.includes(item.id)}
                                        onChange={() => handleOnchange(item.id)}
                                    ></input>
                                    {item.name}
                                </div>
                            </>
                        )
                    })
                }
                <button onClick={handleRegister}> Register</button>

            </div> */}
            {/* ---------------TodoList------------------- */}



        </>
    )
}
export default ReactHook