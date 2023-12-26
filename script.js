let scores, currentScore, activePlayer, gamePlaying;
let diceNumber = Math.floor(Math.random() * 6) + 1;
let diceDOM = document.querySelector('.dice'); 
diceDOM.src = `image/dice-${diceNumber}.png`;

init();

document.querySelector('.btn-roll').addEventListener('click', function() { 
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        diceDOM.style.display = 'block';
        diceDOM.src = `image/dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById('current-' + (activePlayer - 1)).textContent = currentScore; 
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() { 
    if (gamePlaying) {
        scores[activePlayer - 1] += currentScore;
        document.getElementById('score-' + (activePlayer - 1)).textContent = scores[activePlayer - 1]; 

        if (scores[activePlayer - 1] >= 100) {
            document.querySelector('.player-' + (activePlayer - 1) + '-panel').classList.add('winner'); 
            gamePlaying = false;
            alert('Joueur ' + activePlayer + ' a gagné !');
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init); 

function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    currentScore = 0;
    
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 
    
    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active'); 
}

function init() {
    scores = [0, 0];
    activePlayer = 1;
    currentScore = 0;
    gamePlaying = true;

    diceDOM.style.display = 'none';
    document.getElementById('score-0').textContent = '0'; 
    document.getElementById('score-1').textContent = '0'; 
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 
    document.querySelector('.player-0-panel').classList.add('active'); 
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    diceDOM.src = 'image/dice-1.png';
}
