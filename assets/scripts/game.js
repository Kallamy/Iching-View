let coins = document.querySelectorAll('.coin');
let coinsResult = [null, null, null];

function showGame() {
    document.querySelector('.gameArea').style.display = 'block';
}

function flipCoins() {
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
    
}

function resetCoins() {
    for( let i = 0; i < coins.length; i++ ) {
        if(coins[i].classList.contains('yin') ) {
            coins[i].classList.remove('yin')
        }
        if(coins[i].classList.contains('yang') ) {
            coins[i].classList.remove('yang')
        }
        console.log('removeu a animação da moeda ' + i)
    }
}
