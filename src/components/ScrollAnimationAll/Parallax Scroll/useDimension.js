import { useEffect, useState } from "react"

const useDimension = ()=>{
    const [dimension , setDimension] = useState({width:0,height:0})
    const updateDimension = ()=>{
        const {innerwidth, innerheight} = window;
        setDimension({width:innerwidth, height:innerheight});
    }

    useEffect(()=>{
        updateDimension();
        window.addEventListener("resize", updateDimension);
        return()=>{
            window.removeEventListener("resize",updateDimension)
        }
    },[])

    return dimension
}

export default useDimension