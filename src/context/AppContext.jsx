import axios from "axios";
import {createContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user,setUser]=useState(null)
    const [showLogin,setShowLogin]=useState(false)
    const [token,setToken]=useState(localStorage.getItem('token'))
    const [credit,setCredit]=useState(false)
    const navigate = useNavigate()




    const backendUrl=import.meta.env.VITE_BACKEND_URL

    const localCreditData=async ()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits',{headers:{token}})

            if(data.success){
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    const generateImage=async(prompt)=>{
        try {
            const {data} = await axios.post(backendUrl + '/api/image/generate-image',
                {prompt},{headers:{token}})

                if(data.success){
                    localCreditData()
                    return data.resultImage
                }else{
                    toast.error(data.message)
                    localCreditData()
                    if(data.cerditBalance === 0){
                       navigate('/buy')
                    }
                }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
        navigate('/')
    }

    useEffect(()=>{
        if(token){
            localCreditData()
        }
    },[token])

    const value= {
        user,setUser,showLogin,setShowLogin,backendUrl,token,setToken,
        credit,setCredit,localCreditData,logout,generateImage
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;