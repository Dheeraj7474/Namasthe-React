import { useEffect, useState } from "react"
import { Res_Menu } from "./constants"


export const useRestaurantMenu = (resId) => {
    const [Data, setData] = useState(null)
    console.log()

    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async ()=>{
        const Json = await fetch(Res_Menu+resId)
        const Data = await Json.json()
        setData(Data.data)
        console.log(" RM  data is : ",Data)
    }
    return Data
}
