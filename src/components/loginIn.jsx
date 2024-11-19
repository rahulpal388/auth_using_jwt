import { useNavigate } from "react-router-dom";
import { InputItmes } from "./signup";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../atoms/atom";
import { useRef } from "react";
import photo from "../imgs/bgImage.jpg"


export function LoginPage({ setVerified }) {
    const ref1 = useRef();
    const ref2 = useRef();

    const setUserName = useSetRecoilState(userAtom);
    const moveToDashBoard = useNavigate()

    async function onClick() {
        const email = ref1.current.value;
        const password = ref2.current.value;
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await response.json()
            localStorage.setItem("token", data.token);
            setUserName(data.username);

            if (response.status == 200) {
                if (localStorage.getItem('token')) {
                    moveToDashBoard("/dashboard");
                    setVerified(true);
                }

            }


        } catch (error) {
            console.log(error.message);

        }

    }

    return <div className="h-[34.6rem] p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center " >

        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-10 flex flex-col rounded-xl  shadow-2xl ">
            <div className="text-center text-3xl mb-2 font-medium">login</div>
            <div>
                <InputItmes itemName="Email" itemPalceholder="Enter Email" reference={ref1} />
                <InputItmes itemName="Password" itemPalceholder="Enter Password" reference={ref2} />
                <div>
                    <button className="bg-blue-500 w-72 p-3 rounded-md font-semibold" onClick={onClick}>Submit</button>
                </div>
            </div>
        </div>
    </div>
}
