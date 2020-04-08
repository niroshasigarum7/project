import * as React from "react"
import { Frame, useCycle, Scroll } from "framer"

const renderAnimationEffect = () => {
    return (
        <Frame
            animate={{ scale: 0.5, rotate: 360 }}
            transition={{ duration: 2 }}
            drag
        />
    )
};
const renderOnTapEffect = (scale, cycle) => {
    return (
        <Frame
            animate={{ scale: scale, rotate: 360 }}
            onTap={() => cycle()}
            transition={{ duration: 2 }}
            drag
        />
    )
};
const renderTwistEffect = (twist, cycle) => {
    return (
        <Frame 
            animate={twist}
            onTap={() => cycle()}
            drag
        />
    )
};
const renderScrollEffect = () => {
    return(
        <Scroll>
            <Frame />
            <Frame />
        </Scroll>
    )
};
const FramerAnimation = () => {
    const [scale, cycle] = useCycle(3, 1)
    const [twist, cycle2] = useCycle(
        { scale: 0.5, rotate: 0 },
        { scale: 1, rotate: 90 }
    )
    return (
        /** Case 1 **/
        renderAnimationEffect(),
        /** Case 2 **/
        renderOnTapEffect(scale, cycle),
        /** Case 3 **/
        renderTwistEffect(twist, cycle2),
        /** Case 4 **/
        renderScrollEffect()
    )
}

export default FramerAnimation