import * as React from "react"
import { render } from "react-dom"
import { Frame } from "framer"
import Slider from "./Slider"

const SliderApp = () => {
    const [scale, setScale] = React.useState(0.5)
    return (
        <Frame
            name={"SliderApp"}
            width={"50%"}
            height={"50%"}
            background={"#242424"}
            center
        >
            <Frame
                name={"Image"}
                scale={scale}
                center
                size={480}
                image={"https://static.framer.com/api/bg.jpg"}
            />
            <Slider 
                value={scale}
                min={0.25}
                max={0.75}
                onChange={() => setScale(3)}
            />
            
        </Frame>
    )
}

export default SliderApp