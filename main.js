
function startSnake() {
    printToConsole("Snake game started...");
    updateGraphics();

}

function updateGraphics(){
    clearConsole(); 
    drawGraphics(10,10);

}

function drawGraphics(width,heigth){
    let graphicString="";
    for (let j=0; j<heigth ; j++){
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