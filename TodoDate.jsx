import { useEffect, useState } from "react";
export const TodoDate = ()=>{
    const [dateTime , setDateTime] = useState("");

    useEffect(()=>{
       const interval =  setInterval(()=>{
           const now = new Date()
           const formattedDate = now.toLocaleDateString();
           const formmattedTime = now.toLocaleTimeString();
           setDateTime(`${formattedDate} - ${formmattedTime}`);
       }, 1000)
       return () => clearInterval(interval);
    }, []);

    return(
        <h2 className="date">{dateTime}</h2>
    )
}