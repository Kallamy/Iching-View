// Variables declaration
let coins = document.querySelectorAll('.coin');
let coinsResult = [null, null, null];
let result = '';
let playCount = 1;
var coinsSound = new Audio("./assets/sounds/coin.mp3");
var successSound = new Audio("./assets/sounds/success.mp3");
let consultMessage = document.querySelector(".consultMessage");

// Function to show game
function showGame() {
    // show and hide blocks
    document.querySelector('.consultArea').style.display = 'block';
    document.querySelector('.buttonsArea').style.visibility = 'hidden';
    document.querySelector('.consultButton').style.visibility = 'hidden';
    document.querySelector('.aboutArea').style.display = 'none';
    document.querySelector('.about-button').style.display ='none';
    document.querySelector('.hintArea').style.display ='none';
    document.querySelector('.aboutIChing').style.display ='none';
    
    // clear template
    clearTemplate();
    isConsulting = true;

    // set all lines null
    for( let i = 0; i < 2; i++ ) {
        hexagrams[i].lines = [null, null, null, null, null, null];
        updateHexagram();
    }
    // hide coins
    for( let i = 0; i < coins.length; i++ ) {
        coins[i].style.opacity = '0';
    }

    // set consult message in english or in portuguese
    if(lang == "en") {
        consultMessage.innerHTML = "Concentrate on your question and toss the coins six times";
    } else if(lang == "pt-br") {
        consultMessage.innerHTML = "Concentre-se na sua pergunta e jogue as moedas seis vezes";
    }
    document.querySelector(".conclusionArea").style.display = "none";
    document.querySelector(".gameArea").style.display = "flex";
    playCount = 1;

    // set toss coin button message
    if(lang == "en") {
        document.querySelector('.coinsButton').innerText = "Toss coins";
    } else if(lang == "pt-br") {
        document.querySelector('.coinsButton').innerText = "Jogar moedas";
    }
}

let lastClick = 0;

// Function to flip the coins
function flipCoins() {
    let d = new Date();
    let t = d.getTime();
    // check click velocity
    if(t - lastClick  > 400) {
        // reset sound time
        coinsSound.currentTime = 0;
        // set result as null
        coinsResult = [null, null, null];
        // set coins result with a random value zero or one
        coinsResult[0] = Math.random() < 0.5 ? 0 :1;
        coinsResult[1] = Math.random() < 0.5 ? 0 :1;
        coinsResult[2] = Math.random() < 0.5 ? 0 :1;
        // set random coins positions
        marginRange = 25;
        leftM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];
        rightM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];
        topM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];
        bottomM = [Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange), Math.floor(Math.random() * marginRange)];
    
        angleValue = [(Math.floor(Math.random() * 361)), (Math.floor(Math.random() * 361)), (Math.floor(Math.random() * 361))];
        
        // reset coins
        resetCoins();

        for( let i = 0; i < coins.length; i++ ) {
            // change the side of the coins based on results
            if (coinsResult[i] == 0) {
                coins[i].classList.add('yin');
                coins[i].style.transform = `rotate(${angleValue[i]}deg) rotateY(180deg)`;
            } else {
                coins[i].classList.add('yang');
                coins[i].style.transform = `rotate(${angleValue[i]}deg)`;
            }

            // apply random margin on the coins
            coins[i].style.marginLeft = `${leftM[i]}px`;
            coins[i].style.marginRight = `${rightM[i]}px`;
            coins[i].style.marginTop = `${topM[i]}px`;
            coins[i].style.marginBottom = `${bottomM[i]}px`;
            
        }
        
        // verify count 
        if(playCount <= 6) {
    
            // play the sound of coins when toss
            if(playCount < 5) {
                coinsSound.play();
            }
            // hide the coins
            for( let i = 0; i < coins.length; i++ ) {
                coins[i].style.opacity = '0';
            }
            // wait some time for show the coins
            setTimeout(()=>{
                for( let i = 0; i < coins.length; i++ ) {
                    coins[i].style.opacity = '1';
                }
                getResult();
                // increment the count
                playCount ++;
            }, 400);
            
        } else {
        
        }
        // verify if count is equal 6
        if(playCount == 6) {
            // wait some time for change the button text
            setTimeout(()=>{
                if(lang == "en") {
                    document.querySelector('.coinsButton').innerText = "Reveal";
                } else if(lang == "pt-br") {
                    document.querySelector('.coinsButton').innerText = "Revelar";
                }
            }, 700);
            
        } else {
            // set button text
            if(lang == "en") {
                document.querySelector('.coinsButton').innerText = "Toss coins";
            } else if(lang == "pt-br") {
                document.querySelector('.coinsButton').innerText = "Jogar moedas";
            }
        }
    
        if(playCount >= 7) {
            // play success sound
            successSound.currentTime = 0;
            successSound.play();
            
            consultButton = document.querySelectorAll(".consultButton");
            // verify if has one or two hexagrams and change the message with the results in english or portuguese
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

            // remove fade class 
            document.querySelector('.hexagramTitle1').classList.remove('fade');
            document.querySelector('.hexagramTitle2').classList.remove('fade');
            document.querySelector('.charactere1').classList.remove('fade');
            document.querySelector('.charactere2').classList.remove('fade');
            document.querySelector('.hexagramNumber1').classList.remove('fade');
            document.querySelector('.hexagramNumber2').classList.remove('fade');
            
            // show the hexagrams titles on controllers
            document.querySelector('.nextHexagram').innerHTML = cutTitle(hexagrams[1].title) + "  >";
            document.querySelector('.prevHexagram').innerHTML = "<  " + cutTitle(hexagrams[0].title);
    
            // show buttons area
            document.querySelector('.buttonsArea').style.visibility = 'visible';
            // hide consult button
            document.querySelector('.consultButton').style.visibility = 'hidden';
            // show about button
            document.querySelector('.about-button').style.display ='block';
        }
        lastClick = t;
    }
}

// Function to get coins results
function getResult() {
    // sum the number of coins results
    let resultSum = coinsResult.reduce((a,b)=>a+b);
    // verify the sum and set the line result
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
    // set the lines according to the result
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

// Function to reset the coins
function resetCoins() {
    // remove yin or yang classes
    for( let i = 0; i < coins.length; i++ ) {
        if(coins[i].classList.contains('yin') ) {
            coins[i].classList.remove('yin')
        }
        if(coins[i].classList.contains('yang') ) {
            coins[i].classList.remove('yang')
        }
    }
}

// Function to clear the template
function clearTemplate() {
    // set all template lines as empty
    for(let i = 0; i < templateLines.length; i++) {
        templateLines[i].innerHTML = ''
    }
}

// Exit game function
function exitGame() {
    // hide and show blocks
    document.querySelector('.consultArea').style.display = 'none';
    document.querySelector('.buttonsArea').style.visibility = 'visible';
    document.querySelector('.consultButton').style.visibility = 'visible';
    document.querySelector('.about-button').style.display ='block';
    document.querySelector('.hintArea').style.display ='block';
    document.querySelector('.aboutIChing').style.display ='block';
}
