
function startSnake() {
    printToConsole("Snake game started...");
    getConsoleHTMLElement().style.lineHeight = 1;
    getConsoleHTMLElement().style.letterSpacing = "0.65em";
    updateGraphics(35);
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
            graphicString+="#";
        }
        graphicString+="\n";
    }
    
    printToConsole(graphicString);

}

async function main() {
    //Acá escribimos nuestro programa.
    printToConsole("::Game Master 7500SX::");
    printToConsole("1) snake");
    printToConsole("\nTo start any game use the command start <game>");

    let inputText = await readInput();

    if (inputText.toLowerCase() == 'start snake') { //CASE-INSENSITIVE CHECK
        startSnake();
    }
}

main();