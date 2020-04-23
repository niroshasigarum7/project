import React from 'react'
import { allowDrop, drag } from '../../utils/dragdrop'
import './PaintToolBar.css'


const PaintToolBar = (props) => {
    return (
        <div
            className="right-panel"
            onDragOver={(event) => allowDrop(event)}
        >
            {props.toolBarList && props.toolBarList.map((value) => (
                <img
                    draggable="true"
                    onDragStart={(event) => drag(event)}
                    id={value}
                    src={require(`../../assests/${value}.svg`)}
                    alt={value}
                    width="50"
                    height="50"
                />
            ))}
        </div>
    );
}

export default PaintToolBar