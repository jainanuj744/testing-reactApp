import { useState } from "react"

export default function Login(){

    let [input,setInput] = useState("");
    let [password,setPassword] = useState("");
    let [user,setUser] = useState("");

    let handleInput = (e) =>{
        setInput(e.target.value);
    }

    let handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    return <>
        <form>
            <label className="margin">Username</label>
            {/* onChange={(e)=>{e.target.value}}  */}
            <input onChange={handleInput} type="text" placeholder="userName" value={input}></input>
            <label className="margin">Password</label>
            <input onChange={handlePassword} type="text" placeholder="passWord" value={password}></input>
            <button className="margin" onClick={(e)=>{e.preventDefault(); setUser(input)}} disabled={!input || !password}>Login</button>
            <h1>{user}</h1>
        </form>
    </>
}