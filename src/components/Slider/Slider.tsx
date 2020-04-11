import * as React from "react"
import { Frame } from "framer"
// import { useMotionValue } from "framer-motion"
import { SliderProps } from "../../types/Slider/Slider"

const Slider = (props:SliderProps) => {
    // const position = useMotionValue(0)
    return (
        <Frame
            name={"Rail"}
            width={130}
            height={6}
            radius={3}
            background={"rgba(255, 255, 255, 0.2)"}
            center
        >
            <Frame
                name={"Fill"}
                width={65}
                height={6}
                radius={3}
                background={"#fff"}
            />
            <Frame
                name={"Knob"}
                size={40}
                center={"y"}
                radius={"50%"}
                background={"#fff"}
                shadow={"0 2px 8px 1px #242424"}
                left={-20}
                drag={"x"}
                // dragContrainsts={left: 0, right: 130 }
                dragElastic={0}
                dragMomentum={false}
            />
        </Frame>)
}

export default Slider