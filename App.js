import React, { useState } from "react"
import ReactDOM from "react-dom/client"

const Body = ()=>{
    const [weight,setWeight] = useState(40)
    const [height,setHeight] = useState(140)
    let bmi = ((10000*weight)/(height*height))
    return(
    <div className="body">
        <div className="bmiCard">
            <div className="p4">
                <h1 style={{"color":"white"}}>Project 4 : BMI Calculator</h1>
            </div>
            <div className="w2">
                <p className="weight">Weight : {weight} kg</p>
                <input type="range" min={40} step='1' max={200} onChange={(e)=>{
                    console.log(e.target.value)
                    setWeight(e.target.value)
                    console.log("weight is",weight)
                }}></input>
            </div>
            <div className="h2">
                <p className="height">Height : { height} cm</p>
                <input type="range" step='1' min={140} max={220} onChange={(e)=>{
                    console.log(e.target.value)
                    setHeight(e.target.value)
                    console.log("Height is",height)
                }}></input>
            </div>
            <div className="bmi">
                <p>Your BMI is</p> 
            </div>
            <div className="btn">
                <button id="disH">{bmi.toFixed(3)}</button>
            </div>
        </div>
    </div>
    )
}

const AppLayout=()=>(
    <div>
        < Body/>
    </div>
    
)
    
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)