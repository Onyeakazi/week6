


function Greet({name, color, bgColor}){
    return(
        <h3 style={{color: color, backgroundColor: bgColor}}>Good morning {name}</h3>
    )
}

export default Greet;