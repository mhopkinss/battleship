document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    const main2 = document.getElementById('main2');
    let squares = [];
    let squares2 = [];
    let counter = 0;
    let turn = 'player';
    let twoArray = [];
    let threeArray = [];
    let secondThreeArray = [];
    let fourArray = [];
    let fiveArray = [];
    alert('Place your pieces in any orientation or length you\'d like! You get 17 pieces!');
    function createBoard(){
        for (i=0;i<=99;i++){
            let square = document.createElement('div');
            square.setAttribute('id', `l${i}`);
            square.classList.add('square');
            square.classList.add('left');
            square.addEventListener('click', markPlaced);
            squares.push(square);
            main.appendChild(square);
    }
        for (i=0;i<=99;i++){
            let square = document.createElement('div');
            square.setAttribute('id', `r${i}`);
            square.classList.add('square');
            square.classList.add('right');
            square.addEventListener('click', checkIfHit);
            squares2.push(square);
            main2.appendChild(square);
    }
    }
    function markPlaced(e){
        if(e.target.classList.contains('marked')){
            return
        }
        e.target.classList.add('marked')
        if (counter == 17){
            alert('You\'ve placed the maximum amount of pieces!');
        } else {
            e.target.classList.add('playerPiece');
            counter++
        }}
    function checkIfHit(e){
        if (counter < 17){
            return
        } else if (e.target.classList.contains('computerPiece')){
            e.target.classList.add('hit');
        } else {
            e.target.classList.add('notHit');
        }
        turn = 'computer';
        generateComputerMove();
    }
    function randomComputerPieces(){

            //create a piece with 2 spots
            let randomNum = randomNumber();
            let randomSquare = squares2[randomNum];
            randomSquare.classList.add('computerPiece');
            randomSquare.classList.add('two');
            squares2[randomNum +1].classList.add('computerPiece');
            squares2[randomNum +1].classList.add('two');

            //calling function that creates a piece with 3 spots
            randomNum = randomNumber();
            randomSquare = squares2[randomNum];
            randomSquare.classList.add('computerPiece');
            randomSquare.classList.add('three');
            squares2[randomNum +1].classList.add('computerPiece');
            squares2[randomNum +1].classList.add('three');
            squares2[randomNum +2].classList.add('computerPiece');
            squares2[randomNum +2].classList.add('three');

            //calling function that creates a piece with 3 spots
            randomNum = randomNumber();
            randomSquare = squares2[randomNum];
            randomSquare.classList.add('computerPiece');
            randomSquare.classList.add('threeTwo');
            squares2[randomNum +1].classList.add('computerPiece');
            squares2[randomNum +1].classList.add('threeTwo');
            squares2[randomNum +2].classList.add('computerPiece');
            squares2[randomNum +2].classList.add('threeTwo');

            //create a piece with 4 spots
            randomNum = randomNumber();
            randomSquare = squares2[randomNum];
            randomSquare.classList.add('computerPiece');
            randomSquare.classList.add('four');
            squares2[randomNum +1].classList.add('computerPiece');
            squares2[randomNum +1].classList.add('four');
            squares2[randomNum +2].classList.add('computerPiece');
            squares2[randomNum +2].classList.add('four');
            squares2[randomNum +3].classList.add('computerPiece');
            squares2[randomNum +3].classList.add('four');

            //create a piece with 5 spots
            randomNum = randomNumber();
            randomSquare = squares2[randomNum];
            randomSquare.classList.add('computerPiece');
            randomSquare.classList.add('five');
            squares2[randomNum +1].classList.add('computerPiece');
            squares2[randomNum +1].classList.add('five');
            squares2[randomNum +2].classList.add('computerPiece');
            squares2[randomNum +2].classList.add('five');
            squares2[randomNum +3].classList.add('computerPiece');
            squares2[randomNum +3].classList.add('five');
            squares2[randomNum +4].classList.add('computerPiece');
            squares2[randomNum +4].classList.add('five');
            //
            }
    function randomNumber(){
                let number = Math.floor(Math.random() * 99);
                return number;
            }
    function generateComputerMove(){
        checkIfSunk();
        checkIfSunkPlayer();
        let randomNum = randomNumber();
        let randomSquare = squares[randomNum];
        if (randomSquare.classList.contains('playerPiece')){
            if (randomSquare.classList.contains('hit')){
                generateComputerMove();
            } else {
                randomSquare.classList.add('hit');
            }
        } else {
            if (randomSquare.classList.contains('notHit') || randomSquare.classList.contains('hit')){
                generateComputerMove();
            }
            randomSquare.classList.add('notHit');
        }
        turn = 'player';
    }
    function checkIfSunk(){
        function sunked(sunk){
            return sunk.classList.contains('hit');
        }
        squares2.forEach(square => {
            if (square.classList.contains('two')){
                twoArray.push(square);
            } else if (square.classList.contains('three')){
                threeArray.push(square);
            } else if (square.classList.contains('threeTwo')){
                secondThreeArray.push(square);
            } else if (square.classList.contains('four')){
                fourArray.push(square);
            } else if (square.classList.contains('five')){
                fiveArray.push(square);
            }
        })
        console.log(threeArray)
        if (twoArray.every(sunked)){
            twoArray.forEach(item => {
                item.classList.add('sunken');
            })} 
        if (threeArray.every(sunked)){
            threeArray.forEach(item => {
                item.classList.add('sunken');
            })
        }
        if (secondThreeArray.every(sunked)){
            secondThreeArray.forEach(item => {
                item.classList.add('sunken');
            })
        }
        if (fourArray.every(sunked)){
            fourArray.forEach(item => {
                item.classList.add('sunken');
            })
        }
        if (fiveArray.every(sunked)){
            fiveArray.forEach(item => {
                item.classList.add('sunken');
            })
        }
        if (twoArray.every(sunked) && threeArray.every(sunked) && secondThreeArray.every(sunked) && fourArray.every(sunked) && fiveArray.every(sunked)){
            setTimeout(function () {
                alert('game over!')
            }, 1000);
        }
    }
    function checkIfSunkPlayer(){
        let count = 0;
        squares.forEach(item => {
            if (item.classList.contains('playerPiece') && item.classList.contains('hit')){
                count += 1;
            }
        })
        if (count == 17){
            alert('game over! computer wins!');
            return
        }
    }
    createBoard();
    randomComputerPieces();
})
