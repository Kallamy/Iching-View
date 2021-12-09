
let coins = document.querySelectorAll('.coin');
let coinsResult = [null, null, null];
let result = '';
let playCount = 1;
var coinsSound = new Audio("./assets/sounds/coin.mp3");
var successSound = new Audio("./assets/sounds/success.mp3");
let consultMessage = document.querySelector(".consultMessage");
function showGame() {
    document.querySelector('.consultArea').style.display = 'block';
    document.querySelector('.buttonsArea').style.visibility = 'hidden';
    document.querySelector('.consultButton').style.visibility = 'hidden';

    clearTemplate();
    isConsulting = true;
    for( let i = 0; i < 2; i++ ) {
        hexagrams[i].lines = [null, null, null, null, null, null];
        updateHexagram();
    }

    if(lang == "en") {
        consultMessage.innerHTML = "Concentrate on your question and toss the coins six times";
    } else if(lang == "pt-br") {
        consultMessage.innerHTML = "Concentre-se na sua pergunta e jogue as moedas seis vezes";
        
    }
    document.querySelector(".conclusionArea").style.display = "none";
    document.querySelector(".gameArea").style.display = "flex";
    playCount = 1;

    if(lang == "en") {
        document.querySelector('.coinsButton').innerText = "Toss coins";
    } else if(lang == "pt-br") {
        document.querySelector('.coinsButton').innerText = "Jogar moedas";
    }
}

function flipCoins() {
    coinsSound.currentTime = 0;
    coinsResult = [null, null, null];
    
    coinsResult[0] = Math.random() < 0.5 ? 0 :1;
    coinsResult[1] = Math.random() < 0.5 ? 0 :1;
    coinsResult[2] = Math.random() < 0.5 ? 0 :1;
    
    marginRange = 25;
    leftM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];
    rightM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];
    topM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];
    bottomM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];

    angleValue = [(Math.floor(Math.random() * 361)), (Math.floor(Math.random() * 361)), (Math.floor(Math.random() * 361))];

    resetCoins();
    for( let i = 0; i < coins.length; i++ ) {
        if (coinsResult[i] == 0) {
            coins[i].classList.add('yin');
            coins[i].style.transform = `rotate(${angleValue[i]}deg) rotateY(180deg)`;
        } else {
            coins[i].classList.add('yang');
            coins[i].style.transform = `rotate(${angleValue[i]}deg)`;
        }
        coins[i].style.marginLeft = `${leftM[i]}px`;
        coins[i].style.marginRight = `${rightM[i]}px`;
        coins[i].style.marginTop = `${topM[i]}px`;
        coins[i].style.marginBottom = `${bottomM[i]}px`;
        
    }
    
    if(playCount <= 6) {

        coinsSound.play();
        getResult();
        console.log(result)
        for( let i = 0; i < coins.length; i++ ) {
            coins[i].style.opacity = '0';
        }
        setTimeout(()=>{
            for( let i = 0; i < coins.length; i++ ) {
                coins[i].style.opacity = '1';
            }
        }, 400)
        
    } else {
        //alert('Você tirou o hexagrama: '+ hexagrams[0].title)
    }
    playCount ++;
    if(playCount == 7) {
        if(lang == "en") {
            document.querySelector('.coinsButton').innerText = "Reveal";
        } else if(lang == "pt-br") {
            document.querySelector('.coinsButton').innerText = "Revelar";
        }
    } else {
        if(lang == "en") {
            document.querySelector('.coinsButton').innerText = "Toss coins";
        } else if(lang == "pt-br") {
            document.querySelector('.coinsButton').innerText = "Jogar moedas";
        }
    }
    if(playCount == 8) {
        
        
        successSound.play();
        
        consultButton = document.querySelectorAll(".consultButton");
    
        if(hasTwoHexgrams) {
            if(lang == "en") {
                consultMessage.innerHTML = `You get the hexagrams: <em>${hexagrams[0].title}</em> and <em>${hexagrams[1].title}</em>. <br> Good luck!`
                consultButton[1]. innerText = "Consult Again";

            } else if(lang == "pt-br") {
                consultMessage.innerHTML = `Você tirou os hexagramas: <em>${hexagrams[0].title}</em> e <em>${hexagrams[1].title}</em>. <br> Boa sorte na sua caminhada!`
                consultButton[1]. innerText = "Consultar novamente";
            }
        } else {
            if(lang == "en") {
                consultMessage.innerHTML = `You get the hexagram: <em>${hexagrams[0].title}</em> <br> Good luck!`
                consultButton[1]. innerText = "Consult Again";

            } else if(lang == "pt-br") {
                consultMessage.innerHTML = `Você tirou o hexagrama: <em>${hexagrams[0].title}</em> <br> Boa sorte na sua caminhada!`
                consultButton[1]. innerText = "Consultar novamente";
            }
        }   
        document.querySelector(".gameArea").style.display = "none";
        document.querySelector(".conclusionArea").style.display = "flex";

        isConsulting = false;
        document.querySelector('.hexagramTitle1').classList.remove('fade');
        document.querySelector('.hexagramTitle2').classList.remove('fade');
        document.querySelector('.charactere1').classList.remove('fade');
        document.querySelector('.charactere2').classList.remove('fade');
        document.querySelector('.hexagramNumber1').classList.remove('fade');
        document.querySelector('.hexagramNumber2').classList.remove('fade');

        document.querySelector('.nextHexagram').innerHTML = cutTitle(hexagrams[1].title) + "  >";
        document.querySelector('.prevHexagram').innerHTML = "<  " + cutTitle(hexagrams[0].title);

        document.querySelector('.buttonsArea').style.visibility = 'visible';
        document.querySelector('.consultButton').style.visibility = 'hidden';
        
    }
    if(playCount == 9) {
        
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
    document.querySelector('.buttonsArea').style.visibility = 'visible';
    document.querySelector('.consultButton').style.visibility = 'visible';
}
