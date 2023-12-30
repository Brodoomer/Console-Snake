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