let SnakePos={
    x:0,
    y:0
}

function startSnake() {
    printToConsole("Snake game started...");
    getConsoleHTMLElement().style.lineHeight = 1;
    getConsoleHTMLElement().style.letterSpacing = "0.65em";

    window.addEventListener("keydown", onKeyDown, false);
    window.addEventListener("keyup", onKeyUp, false);

    updateGraphics(35);
}

function onKeyDown(event) {
    var keyName = event.key;
    switch (keyName) {
        case "ArrowRight":
        case "d":
            SnakePos.x++;
        //DERECHA
        break;
        case "ArrowDown":
        case "s":
            SnakePos.y++;
        //ABAJO
        break;
        case "ArrowLeft":
        case "a":
            SnakePos.x--;
        //IZQUIERDA
        break;
        case "ArrowUp":
        case "w":
            SnakePos.y--;
        //ARRIBA
        break;
    }
}
  
function onKeyUp(event) {
    var keyName = event.key;

    switch (keyName) {
        case "ArrowRight":
        case "d":
            //DERECHA
        break;
        case "ArrowDown":
        case "s":
            //ABAJO
        break;
        case "ArrowLeft":
        case "a":
            //IZQUIERDA
        break;
        case "ArrowUp":
        case "w":
            //ARRIBA
        break;
    }
}

function updateGraphics(fps){
    clearConsole(); 
    drawGraphics(20,15);

    setTimeout(function() { updateGraphics(fps) }, parseInt(1000.0/fps)); //ms
}

function drawGraphics(width,height){
    let graphicString="";
    for (let j=0; j<height ; j++){
        for (let i=0; i<width ; i++){
            if (j==SnakePos.y && i==SnakePos.x)
            {
                graphicString+="*";
            }
            else {
                graphicString+="#";
            }
        }
        graphicString+="\n";
    }
    
    printToConsole(graphicString);

}