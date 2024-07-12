import { useState } from "react";
import { api } from "../../../services/axios";

export function Form() {
    const [userLogin, setUserLogin] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");

    async function handleSubmit() {
        event?.preventDefault();
        if (userPasswordConfirmation !== userPassword) {
            alert("As senhas não coincidem.")
        } else {
            const { data } = await api.post("/user/register", {
                data: {
                    userName,
                    userEmail,
                    userPassword,
                    userLogin,
                }
            })

            console.log(data)
        }
    }


    return (
        <form className="bg-slate-700 grid gap-2 p-10 m-auto h-2/3 w-1/4 rounded-2xl shadow-md">
            <h1 className="text-teal-500 font-bold text-4xl text-center" >Registrar-se</h1>
            <div>
                <p className="font-semibold text-2xl text-white mt-3 ">Nome</p>
                <input onChange={(e) => setUserName(e.target.value)} type="text" className="text-white p-2 text-2xl w-full rounded-xl backdrop-blur-sm bg-transparent border-white border-solid border-2" placeholder="Digite seu nome..."></input>
            </div>
            <div>
                <p className="font-semibold text-2xl text-white mt-3 ">Login</p>
                <input onChange={(e) => setUserLogin(e.target.value)} type="text" className="text-white p-2 text-2xl w-full rounded-xl backdrop-blur-sm bg-transparent border-white border-solid border-2" placeholder="Digite seu login..."></input>
            </div>
            <div>
                <p className="font-semibold text-2xl text-white mt-3 ">Email</p>
                <input onChange={(e) => setUserEmail(e.target.value)} type="email" className="text-white p-2 text-2xl w-full rounded-xl backdrop-blur-sm bg-transparent border-white border-solid border-2" placeholder="Digite seu email..."></input>
            </div>
            <div>

                <p className="font-semibold text-2xl text-white mt-3">Senha</p>
                <input onChange={(e) => setUserPassword(e.target.value)} type="password" className="text-white p-2 text-2xl w-full rounded-xl backdrop-blur-sm bg-transparent border-white border-solid border-2" placeholder="Digite sua senha..."></input>
            </div>

            <div>

                <p className="font-semibold text-2xl text-white mt-3 ">Confirmar Senha</p>
                <input onChange={(e) => setUserPasswordConfirmation(e.target.value)} type="password" className="text-white p-2 text-2xl w-full rounded-xl backdrop-blur-sm bg-transparent border-white border-solid border-2" placeholder="Digite sua senha..."></input>
            </div>
            <div className="flex justify-between align-middle mt-3" >
                <button onClick={() => { handleSubmit() }} className="bg-emerald-600 p-4 text-2xl w-1/2 rounded-2xl py-0 text-white font-bold hover:bg-emerald-700  transition-colors">Registrar-se</button>
                <p className="font-semibold text-2xl ml-12 text-white">Ja possui uma conta? <a href="#" className="text-emerald-400 hover:text-emerald-100 transition-colors"> realizar Login </a></p>

            </div>
        </form>
    )
}