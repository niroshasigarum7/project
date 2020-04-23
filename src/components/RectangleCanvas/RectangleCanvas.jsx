import React, { useEffect, useState, useRef } from "react"
import { allowDrop } from "../../utils/dragdrop"

import './RectangleCanvas.css'

/*
    @description: This is a common function which creates the rectangle and
        split rectangle canvas.
    @params:
        - rectangleElement is whether the parent rectangle or child rectangle
            child rectangle(square) is formed when the scrissor icon is dragged
            on the parent rectangle
        - isParentElement refers to that parent rectangle
    It sets the width and height of the parent canvas via response send by backend
    It dynamically calulates width and height of the child rectangle/sqaure 
*/

const formRectangle = (rectangleElement, isParentElement, width, height) => {
    if (rectangleElement) {
        var ctx = rectangleElement.getContext("2d");
        ctx.moveTo(100,0);
        ctx.canvas.height = height;
        ctx.canvas.width = isParentElement
            ? width
            : width / 2;
        ctx.fillStyle = 'orange';
        ctx.fillRect(0, 0, 200, 200);
    }
}

const RectangleCanvas = (props) => {
    const [isCanvasShown, setIsCanvasShown] = useState(true)
    const [isEraseActionPerformed, setIsEraserActionPerformed] = useState(false)
    const rectangleRef = useRef()
    const rectangle1Ref = useRef()
    const rectangle2Ref = useRef()

    /*
        @description: On droping the right tool bar icons, the operation for 
        cutting the rectangle in to two halfs, pasting the split rectangles into one,
        and erasing the rectangle shapes is performed in this function
        @params: event object
    */
    const rectangleDrop = (ev) => {
        ev.preventDefault()
        var data = ev.dataTransfer.getData("text")
        ev.target.appendChild(document.getElementById(data))

        if (data === "scrissor") {
            setIsCanvasShown(false)
            // Wait till the dom is rendered
            setTimeout(() => {
                formRectangle(rectangle1Ref.current, false, props.width, props.height)
                formRectangle(rectangle2Ref.current, false, props.width, props.height)
            }, 20)
        } else if (data === "eraser") {
            setIsEraserActionPerformed(true)
        } else if (data === "glue") {
            setIsCanvasShown(true)
        }
    }
    useEffect(() => {
        formRectangle(rectangleRef.current, true, props.width, props.height)
    });
    return (
        <div
            id="rectangleCanvas-container"
            onDrop={(event) => rectangleDrop(event)}
            onDragOver={(event) => allowDrop(event)}
        >
            {!isEraseActionPerformed && isCanvasShown &&
                <canvas id="rectangleCanvas" ref={rectangleRef}></canvas>}
            
            {!isEraseActionPerformed && !isCanvasShown && 
                <div className="split-container">
                    <canvas id="rectangleCanvas1" ref={rectangle1Ref}></canvas>
                    <canvas id="rectangleCanvas2" ref={rectangle2Ref}></canvas>
                </div>
            } 
        </div>
    )
}

export default RectangleCanvas