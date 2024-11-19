
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


export function SignUpPage() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const moveToLogin = useNavigate();

    async function onClick() {
        const username = ref1.current.value;
        const email = ref2.current.value;
        const password = ref3.current.value;

        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })

            // const data = await response.json();

            if (response.status == 200) {
                moveToLogin("/login");
            }


        } catch (error) {
            console.log(error.message);
        }
    }

    return <div className="h-[34.6rem] p-10 bg-gradient-to-r from-indigo-400 via-green-300 to-pink-300 flex justify-center items-center ">
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-20% to-emerald-300 to-90% p-10 flex flex-col rounded-xl  shadow-2xl ">
            <div className="text-center text-3xl mb-2 font-medium">Sign Up</div>
            <div>
                <InputItmes itemName="Username" itemPalceholder="Enter Username" reference={ref1} />
                <InputItmes itemName="Email" itemPalceholder="Enter Email" reference={ref2} />
                <InputItmes itemName="Password" itemPalceholder="Enter Password" reference={ref3} />
            </div>
            <div>
                <button className="bg-blue-500 w-72 p-3 rounded-md font-semibold" onClick={onClick} >Submit</button>
            </div>
        </div>
    </div>

}





export function InputItmes({ itemName, itemPalceholder, reference }) {
    return <div className="mb-4">
        <p className="text-2xl">{itemName}</p>
        <input type="text" name="" id={itemName} placeholder={itemPalceholder} ref={reference} className="p-2 text-black outline-none rounded-sm w-72" />
    </div>
}