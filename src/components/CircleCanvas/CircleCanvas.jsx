import React, { useEffect, useState, useRef } from "react"
import { allowDrop } from '../../utils/dragdrop'

import './CircleCanvas.css'
/*
    @description: This is a common function which creates the circle and
        split circles canvas.
    @params:
        - circleElement  is whether the parent circle or child circle
            child circle is formed when the scrissor icon is dragged
            on the parent circle
        - arcValue refers to that circle shape
    It sets the width and height of the parent and child canvas via response send by backend
*/
const formCircle = (circleElement, arcValue) => {
    if (circleElement) {
        var circleCtx = circleElement.getContext("2d");
        circleCtx.beginPath();
        circleCtx.arc(arcValue,50,40,0,2*Math.PI);
        circleCtx.fillStyle = 'yellow';
        circleCtx.fill();
    }
}

const CircleCanvas = (props) => {
    const [isCanvasShown, setIsCanvasShown] = useState(true)
    const [isEraseActionPerformed, setIsEraserActionPerformed] = useState(false)
    const circleRef = useRef()
    const circle1Ref = useRef()
    const circle2Ref = useRef()

    /*
        @description: On droping the right tool bar icons, the operation for 
        cutting the circle in to two halfs, pasting the split circles into one,
        and erasing the circle shapes is performed in this function
        @params: event object
    */
    const circleDrop = (ev) => {
        ev.preventDefault()
        var data = ev.dataTransfer.getData("text")
        ev.target.appendChild(document.getElementById(data))

        if (data === "scrissor") {
            setIsCanvasShown(false)
            // wait till the dom is rendered
            setTimeout(() => {
                formCircle(circle1Ref.current, 5);
                formCircle(circle2Ref.current, 5);
            }, 20)
        } else if (data === "eraser") {
            setIsEraserActionPerformed(true)
        } else if (data === "glue") {
            setIsCanvasShown(true)
        }
    }

    useEffect(() => {
        formCircle(circleRef.current, 95)
    })

    return (
        <div
            id="circCanvas"
            onDrop={(event) => circleDrop(event)}
            onDragOver={(event) => allowDrop(event)}
        >
            {!isEraseActionPerformed && isCanvasShown &&
                <canvas id="circleCanvas" ref={circleRef}></canvas>
            }
            {!isEraseActionPerformed && !isCanvasShown &&
                <div className="split-container">
                    <canvas 
                        id="circleCanvas1"
                        ref={circle1Ref}
                        width={props.width}
                        height={props.height}
                    ></canvas>
                    <canvas 
                        id="circleCanvas2"
                        ref={circle2Ref}
                        width={props.width}
                        height={props.height}
                    ></canvas>
                </div>
            }
        </div>
    )
}

export default CircleCanvas