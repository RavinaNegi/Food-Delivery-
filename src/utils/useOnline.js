import { useEffect,useState } from "react";

const useOnline=()=>{
    const [onlineInfo,setOnlineInfo]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineInfo(false)});
            window.addEventListener("online",()=>
                {setOnlineInfo(true)});
    },[]);
    return onlineInfo;

};
export default useOnline;