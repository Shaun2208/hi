var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("my_canvas");
ctx= canvas.getContext("2d");

color = "red"; 
width_of_the_line = "1";
//Begins a path, or resets the current path for drawing
//anything. It tells the canvas to start drawing the shape/object.
ctx.beginPath();

//: Sets the color for the drawing object.
ctx.strokeStyle = color;

//Sets width for the drawing object.
ctx.lineWidth = 2;

//Arc : is used to create an arc/curve 
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

//This is attached with an element, and when the event [onclick,
//   mousemove, etc] occurs it runs the function written inside it.
    
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    width_of_the_line = document.getElementById("width_of_the_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_x_position_of_mouse = e.clientX - canvas.offsetLeft;
current_y_position_of_mouse = e.clientY - canvas.offsetTop;
if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_the_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_x_position_of_mouse + "y = " + current_y_position_of_mouse);
    ctx.lineTo(current_x_position_of_mouse, current_y_position_of_mouse);
    ctx.stroke();
    }

    last_position_of_x = current_x_position_of_mouse; 
    last_position_of_y = current_y_position_of_mouse;
}

canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
    function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}