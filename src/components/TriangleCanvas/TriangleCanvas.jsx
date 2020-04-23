import React, { useEffect, useState, useRef } from "react"
import { allowDrop } from "../../utils/dragdrop"

/*
    @description: This function creates the parent triangle 
    @params:
        - triangleElement is the parent 
        - arcValue refers to that circle shape
    It sets the width and height of the parent via response send by backend
*/
const formTriangle = (triangleElement) => {
    if (triangleElement) {
        var ctx = triangleElement.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "#00F";
        ctx.moveTo(400, 0);
        ctx.lineTo(600, 200); 
        ctx.lineTo(200, 200);
        ctx.closePath();
        ctx.stroke();

        // ctx.canvas.width = jsonResponse.shape.triangle.dimension.width;
        // ctx.canvas.height = jsonResponse.shape.triangle.dimension.height;

        ctx.fillStyle = "red";
        ctx.fill();
    }
}
/*
    @description: This function creates the child triangle 
    @params:
        - triangleElement is the parent 
        - value is uese to form right angled triangle shape
*/
const formSplitTriangle = (triangleElement, value) => {
    if (triangleElement) {
        var ctx = triangleElement.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "#00F";
        ctx.moveTo(value, 0); 
        ctx.lineTo(400, 200); 
        ctx.lineTo(200, 200);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "red";
        ctx.fill();
    }
}

const TriangleCanvas = (props) => {
    const [isCanvasShown, setIsCanvasShown] = useState(true)
    const [isEraseActionPerformed, setIsEraserActionPerformed] = useState(false)
    const triangleRef = useRef()
    const triangle1Ref = useRef()
    const triangle2Ref = useRef()
    /*
        @description: On droping the right tool bar icons, the operation for 
        cutting the triangle in to two halfs, pasting the split triangles into one,
        and erasing the triangles shapes is performed in this function
        @params: event object
    */
    const triangleDrop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

        if (data === "scrissor") {
            setIsCanvasShown(false)
            // Wait till the dom is rendered
            setTimeout(() => {
                formSplitTriangle(triangle1Ref.current, 400);
                formSplitTriangle(triangle2Ref.current, 200);
            }, 20)
        } else if (data === "eraser") {
            setIsEraserActionPerformed(true)
        } else if (data === "glue") {
            setIsCanvasShown(true)
        }
    }

    useEffect(() => {
        formTriangle(triangleRef.current);
    })
    
    return (
        <div
            id="triCanvas"
            onDrop={(event) => triangleDrop(event)}
            onDragOver={(event) => allowDrop(event)}
        >
            {!isEraseActionPerformed  && isCanvasShown &&
                <canvas
                    id="triangleCanvas"
                    ref={triangleRef}
                    width="700"
                    height={props.height}
                ></canvas>
            }
            {!isEraseActionPerformed && !isCanvasShown &&
                <div className="split-container">
                    <canvas
                        id="triangleCanvas1"
                        ref={triangle1Ref}
                        width="600"
                        height={props.height}
                    ></canvas>
                    <canvas
                        id="triangleCanvas2"
                        ref={triangle2Ref}
                        width="600"
                        height={props.height}
                    ></canvas>
                </div>
            }
        </div> 
    )
}

export default TriangleCanvas