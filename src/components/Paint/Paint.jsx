import React, { useEffect, useState } from "react"
import PaintToolBar from "../PaintToolBar/PaintToolBar"
import RectangleCanvas from "../RectangleCanvas/RectangleCanvas"
import CircleCanvas from "../CircleCanvas/CircleCanvas"
import TriangleCanvas from "../TriangleCanvas/TriangleCanvas"

import paintData from "../../__mocks__/json/paint"
import './Paint.css'

const Paint = () => {
    const [content, setContent] = useState({})
    const [rectangleWidth, setRectangleWidth] = useState(0)
    useEffect(() => {
        async function fetchData() {
            const response = await paintData.get()
            setRectangleWidth(response.rectangle.width)
            setContent(response)
        }
        fetchData()
    }, [])
    return (
        <div>
            <PaintToolBar toolBarList={content.toolBarList} />
            <div className="paint-container">
                <div className="canvas-container">
                    <RectangleCanvas width={200} height={100}/>
                    <CircleCanvas width={200} height={100} />
                    <TriangleCanvas width={700} height={700}/>
                </div>
            </div>
        </div>
    )
}

export default Paint