let choices = ["ROCK", "PAPER", "SCISSORS"];

const computerSelection = () => choices[Math.floor(Math.random() * 3)];
const playerSelection   = () => {
    while(input = prompt("Enter valid user selection ('Rock','Paper','Scissors'): ").toUpperCase()){
        if(choices.includes(input)){
            break;
        }
    return input;
}}

const gameScore = {
    player: 0,
    computer: 0
}

const playRound = () => {

    let player   = playerSelection();
    let computer = computerSelection();

    if(player == computer){
        console.log(`Player selection: ${player}\nComputer selection: ${computer}\n`,"It's a draw!");
    }
    else if(player == "ROCK"){
        console.log(`Player selection: ${player} \nComputer selection: ${computer}\n`, computer == "SCSISORS"?"Player wins!":"Computer wins!");
        computer == "PAPER"?gameScore.player++:gameScore.computer+=0;
    }
    else if(player == "SCISSORS"){
        console.log(`Player selection: ${player} \nComputer selection: ${computer}\n`, computer == "PAPER"?"Player wins!":"Computer wins!");
        computer == "ROCK"?gameScore.player++:gameScore.computer+=0;
    }
    else if(player == "PAPER")
        console.log(`Player selection: ${player} \nComputer selection: ${computer}\n`, computer == "ROCK"?"Player wins!":"Computer wins!");
        computer == "ROCK"?gameScore.player++:gameScore.computer+=0;
    }

const playGame = () => {

    for(let i=0; i<5; i++){
        playRound();
    }

    console.log(gameScore);
    gameScore.player = 0;
    gameScore.computer = 0;
}










































const squareDiagonal = a   => Math.sqrt(2 * Math.pow(a,2)).toPrecision(4);
const triangleArea = (a,b,c) => {
    let area = undefined;
    //semiperimeter
    let s = (a+b+c)/2;
    //validity check
    if (a + b <= c || a + c <= b || b + c <= a)
        console.log("Triangle does not exist.");
    else
    //Herons' formula
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}
const circleArea = r => (Math.PI * r ** 2).toPrecision(4);
const circleCircumference = r => (2 * Math.PI * r).toPrecision(4);