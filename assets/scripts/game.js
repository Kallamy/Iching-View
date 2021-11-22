
let coins = document.querySelectorAll('.coin');
let coinsResult = [null, null, null];
let result = '';
let playCount = 1;
var coinsSound = new Audio("./assets/sounds/coin.mp3");
var successSound = new Audio("./assets/sounds/success.mp3");
let consultMessage = document.querySelector(".consultMessage");
function showGame() {
    document.querySelector('.consultArea').style.display = 'block';
    clearTemplate();
    for( let i = 0; i < 2; i++ ) {
        hexagrams[i].lines = [null, null, null, null, null, null];
        updateHexagram();
    }
    consultMessage.innerHTML = "Concentre-se na sua pergunta e jogue as moedas seis vezes"
    document.querySelector(".conclusionArea").style.display = "none";
    document.querySelector(".gameArea").style.display = "flex";
    playCount = 1;
}

function flipCoins() {
    coinsSound.currentTime = 0;
    coinsResult = [null, null, null];
    
    coinsResult[0] = Math.random() < 0.5 ? 0 :1;
    coinsResult[1] = Math.random() < 0.5 ? 0 :1;
    coinsResult[2] = Math.random() < 0.5 ? 0 :1;
    
    resetCoins();
    for( let i = 0; i < coins.length; i++ ) {
        if (coinsResult[i] == 0) {
            coins[i].classList.add('yin');
        } else {
            coins[i].classList.add('yang');
        }
        
    }
    
    if(playCount <= 6) {
        getResult();
        console.log(result)
        coinsSound.play();
    } else {
        // alert('Você tirou o hexagrama: '+ hexagrams[0].title)
    }
    playCount ++;
    if(playCount == 7) {
        successSound.play();
        
        if(hasTwoHexgrams) {
            consultMessage.innerHTML = `Você tirou os hexagramas: <em>${hexagrams[0].title}</em> e <em>${hexagrams[1].title}</em> <br> Boa sorte na sua caminhada!`
        } else {
            consultMessage.innerHTML = `Você tirou o hexagrama: <em>${hexagrams[0].title}</em> <br> Boa sorte na sua caminhada!`
        }
        document.querySelector(".gameArea").style.display = "none";
        document.querySelector(".conclusionArea").style.display = "flex";
    }
    
    
}

function getResult() {
    let resultSum = coinsResult.reduce((a,b)=>a+b);
    if(resultSum == 1) {
        result = 'yin';
    } else if(resultSum == 2) {
        result = 'yang';
    }
    else if(resultSum == 0) {
        result = 'o';
    }
    else if(resultSum == 3) {
        result = 'x';
    }

    if(result == 'yang') {
        hexagrams[0].lines[playCount -1] = true;
        hexagrams[1].lines[playCount -1] = true;
    }
    else if((result == 'yin')) {
        hexagrams[0].lines[playCount -1] = false;
        hexagrams[1].lines[playCount -1] = false;
    }
    else if((result == 'x')) {
        hexagrams[0].lines[playCount -1] = false;
        hexagrams[1].lines[playCount -1] = true;
    }
    else if((result == 'o')) {
        hexagrams[0].lines[playCount -1] = true;
        hexagrams[1].lines[playCount -1] = false;
    }


    updateHexagram();
    setControlls();
}

function resetCoins() {
    for( let i = 0; i < coins.length; i++ ) {
        if(coins[i].classList.contains('yin') ) {
            coins[i].classList.remove('yin')
        }
        if(coins[i].classList.contains('yang') ) {
            coins[i].classList.remove('yang')
        }
    }
}

function clearTemplate() {
    for(let i = 0; i < templateLines.length; i++) {
        templateLines[i].innerHTML = ''
    }
}

function exitGame() {
    document.querySelector('.consultArea').style.display = 'none';
}