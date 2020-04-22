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
function formRectangle(rectangleElement, isParentElement) {
    var ctx = rectangleElement.getContext("2d");
    ctx.moveTo(100,0);
    ctx.canvas.height = jsonResponse.shape.rectangle.dimension.height;
    ctx.canvas.width = isParentElement
        ? jsonResponse.shape.rectangle.dimension.width
        : jsonResponse.shape.rectangle.dimension.width / 2;
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 200, 200);
}

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
function formCircle (circle, arcValue) {
    var circleCtx = circle.getContext("2d");
    circleCtx.beginPath();
    circleCtx.arc(arcValue,50,40,0,2*Math.PI);
    // circleCtx.canvas.width = jsonResponse.shape.circle.dimension.width;
    // circleCtx.canvas.height = jsonResponse.shape.circle.dimension.height;
    circleCtx.fillStyle = 'yellow';
    circleCtx.fill();
};

/*
    @description: This function creates the parent triangle 
    @params:
        - triangleElement is the parent 
        - arcValue refers to that circle shape
    It sets the width and height of the parent via response send by backend
*/
function formTriangle (triangleElement) {
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
/*
    @description: This function creates the child triangle 
    @params:
        - triangleElement is the parent 
        - value is uese to form right angled triangle shape
*/
function formSplitTriangle (triangleElement, value) {
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

function allowDrop(ev) {
    ev.preventDefault();
    document.getElementById("scrissor").style.backgroundImage = 'scissor.svg'
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function rectangleDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("scrissor").src = 'scissor.svg'
    if (data === "scrissor") {
        formRectangle(document.getElementById("rectangleCanvas1"), false);
        formRectangle(document.getElementById("rectangleCanvas2"), false);
        document.getElementById("rectangleCanvas").style.display = "none"
        document.getElementById("rectangleCanvas1").style.display = "block"
        document.getElementById("rectangleCanvas2").style.display = "block"
    } else if (data === "eraser") {
        document.getElementById("rectangleCanvas").style.display = "none"
    } else if (data === "glue") {
        document.getElementById("rectangleCanvas").style.display = "block"
        document.getElementById("rectangleCanvas1").style.display = "none"
        document.getElementById("rectangleCanvas2").style.display = "none"
    }
}

function circleDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if (data === "scrissor") {
        document.getElementById("circleCanvas").style.display = "none"
        document.getElementById("circleCanvas1").style.display = "block"
        document.getElementById("circleCanvas2").style.display = "block"
        formCircle(document.getElementById("circleCanvas1"), 5);
        formCircle(document.getElementById("circleCanvas2"), 5);
    } else if (data === "eraser") {
        document.getElementById("circleCanvas").style.display = "none"
    } else if (data === "glue") {
        document.getElementById("circleCanvas").style.display = "block"
        document.getElementById("circleCanvas1").style.display = "none"
        document.getElementById("circleCanvas2").style.display = "none"
    }
}

function triangleDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if (data === "scrissor") {
        document.getElementById("triangleCanvas").style.display = "none"
        document.getElementById("triangleCanvas1").style.display = "block"
        document.getElementById("triangleCanvas2").style.display = "block"
        formSplitTriangle(document.getElementById("triangleCanvas1"), 400);
        formSplitTriangle(document.getElementById("triangleCanvas2"), 200);
    } else if (data === "eraser") {
        document.getElementById("triangleCanvas").style.display = "none"
    } else if (data === "glue") {
        document.getElementById("triangleCanvas").style.display = "block"
        document.getElementById("triangleCanvas1").style.display = "none"
        document.getElementById("triangleCanvas2").style.display = "none"
    }
}