import React from "react"

interface IImageprops {
    draggable: boolean,
    ondragStart: () => void
}
const Image = (props:IImageprops) => {
    return (<img 
            id="scrissor"
            src="../../assests/scissor.svg"
            alt="scrissor"
            width="50"
            height="50"
        />)
}

export default Image