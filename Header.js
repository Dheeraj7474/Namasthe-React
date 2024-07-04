import { useContext, useEffect, useState } from "react"
import { IMG_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import { useOnlineStatus } from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"


const Header = ()=>{
    let [btnName,setbtnName] = useState('login')
    const isOnline = useOnlineStatus()
    const {UserName} = useContext(UserContext)
    return (
    <div className=" m-4 p-4 flex flex-wrap bg bg-green-100 space-x-60 mb-6">
        <img className="w-24" id="img"  src={IMG_URL}/>
        
        <div className="flex flex-wrap justify-end space-x-8 ">
            <li> Internet : {isOnline ? "✅" : "🔴" }</li>
            <button className="h-8 w-20  bg-green-600 text-white rounded-lg"><Link to="/"> Home </Link>  </button>
            <button className="h-8 w-20 bg-green-600 text-white rounded-lg"> <Link to="/about">  About Us </Link> </button>
            <button className="h-8 w-20  bg-green-600 text-white rounded-lg"> <Link to="/Contact">  Contact Us </Link> </button>
            <button className="h-8 w-20  bg-green-600 text-white rounded-lg"> Cart </button>
            <button className="h-8 w-20  bg-green-600 text-white rounded-lg" id="login" onClick={
                ()=>{
                return btnName==="login"?setbtnName('logout') : setbtnName('login')
            }
            }> {btnName} </button>
            <p className=" bg-blue-600 text-white rounded-lg w-24 text-center m-auto">{UserName}</p>

        </div>
            
    </div>)
}

export default Header