import { useEffect } from "react";
import { createContext, useState } from "react";
import { getUser } from "../api";

export const AuthContext=createContext();

export function AuthContextProvider({children}){
    const [isAuth,setIsAuth]=useState({
        status:false,
        data:{}
    });
    const authHandler=(status,data)=>{
        setIsAuth({
            status:status==="true"?true:false,
            data:data
        });
    }
    const getData=async ()=>{
        let res=await getUser();
        setIsAuth({
            status:window.localStorage.getItem("access_token")!==null?true:false,
            data: res.data.message,
        });
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <AuthContext.Provider value={{isAuth,authHandler}} >
         {children}
        </AuthContext.Provider>
    )
}
