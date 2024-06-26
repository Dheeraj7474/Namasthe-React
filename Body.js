

export const Body = (props)=>{
    return(
        <div style={{backgroundColor : props.color}} className = "card">
            <h3 >{props.heading}</h3>
            <h3>{props.number}</h3>
        </div>
    )
}