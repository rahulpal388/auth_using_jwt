import { BrowserRouter, Route, RouterProvider, Routes, useNavigate } from "react-router-dom"
import { StarterPage } from "./components/starterPage"
import { useRef, useState } from "react";
import { SignUpPage } from "./components/signup";
import { LoginPage } from "./components/loginIn";
import { Dashboard } from "./components/dashboard";
import { RecoilRoot } from "recoil";


function App() {
  const [isVerified, setVerified] = useState(false);
  return <div>
    <RecoilRoot>
      <BrowserRouter>
        <NavBar setVerified={setVerified} />
        <Routes >
          <Route path={"/"} element={<StarterPage />} />
          <Route path={"/signup"} element={<SignUpPage />} />
          <Route path={"/login"} element={<LoginPage setVerified={setVerified} />} />
          <Route path={"/dashboard"} element={isVerified ? <Dashboard /> : <StarterPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </div>

}


function NavBar({ setVerified }) {
  const navigate = useNavigate();
  const [btnType, setBtnType] = useState(true);
  function onClickHome() {
    navigate("/");
    localStorage.removeItem("token");
    setVerified(false);
  }

  function onClickSign() {
    navigate("/signup");
    setBtnType(false);
  }

  function onClickLogin() {
    navigate("/login");
    setBtnType(true);
  }


  return <div className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 flex justify-between p-5">
    <div className="text-2xl italic font-semibold tracking-wide cursor-pointer" onClick={onClickHome}>Task 3</div>
    {btnType ? <Btn btnName="Signup" onClickfn={onClickSign} /> : <Btn btnName="Login" onClickfn={onClickLogin} />}
  </div>
}

function Btn({ onClickfn, btnName }) {
  return <div>
    <div className="bg-blue-500 text-white text-xl font-semibold p-2 w-36 text-center rounded-lg cursor-pointer" onClick={onClickfn}>{btnName}</div>
  </div>
}


export default App