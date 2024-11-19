import { useRecoilValue } from "recoil"
import { userAtom } from "../atoms/atom"


export function Dashboard() {
    const username = useRecoilValue(userAtom);

    return <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-[34.6rem] flex flex-col justify-center items-center ">
        <div>
            <h1 className="text-7xl">Welcome {username}</h1>
        </div>
        <div className="text-2xl mt-2">
            Now You are <span className="text-green-900">successfully</span> logged in
        </div>
    </div>
}