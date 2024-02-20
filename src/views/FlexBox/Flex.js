import { useState } from "react"
import { toast } from 'react-toastify';

var firstName = "thean";
function getName() {
    var lastName = 'Nguyen'
    return firstName + lastName
}

console.log('this is', getName());
const Flex = () => {
    return (
        <>
            {/* <h1 className="bg-black">This is flex</h1> */}
            <div className=" bg-white flex flex-col items-center   h-[800px] ">
                <div className="h-32 w-32  bg-red-600 border-solid border-2 border-purple-500 ">a</div>
                <div className="h-32 w-32 bg-blue-600 border-solid border-2 border-purple-500" >b</div>
                <div className="h-32 w-32  bg-green-500 border-solid border-2  border-purple-500 ">c</div>


            </div>
            {/* <div class="flex flex-col  ">
                <div class="self-center h-32 w-32  bg-red-600 border-solid border-2 border-purple-500 ">Phần tử 1</div>
                <div class="self-center h-32 w-32 bg-blue-600 border-solid border-2 border-purple-500">Phần tử 2</div>
                <div class="self-center h-32 w-32  bg-green-500 border-solid border-2  border-purple-500">Phần tử 3</div>
            </div> */}

        </>
    )
}
export default Flex