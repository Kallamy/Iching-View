//let lang = "pt-br";
let lang = "en";

console.log()
init();
function init() {
    /* linha yang = true
       linha yin = false 
    */

    hexagrams = [
        {
                title: "",
                number: null,
                charactere: "",
                upperTrigram: "",
                bottomTrigram: "",
                lines: [
                    true, 
                    false, 
                    false, 
                    false, 
                    true, 
                    false
                ]
        },
        {
                title: "",
                number: null,
                charactere: "",
                upperTrigram: "",
                bottomTrigram: "",
                lines: [
                    true, 
                    false, 
                    false, 
                    false, 
                    true, 
                    false
                ]
        },
    ];
    
    document.querySelector('.slidesArea').style.visibility = "hidden";
    document.querySelector('.templateArea').style.visibility = "hidden";
    

    yinyangDuration = 2000;
    hasTwoHexgrams = true;
    currentHexagram = 0; 
    canInvert = true;    
    
    clickPressed = false;
    canChange = true;
    firstClick = false;
    
    isConsulting = false;
    
    consultArea = document.querySelector(".consultArea");
    slidesArea = document.querySelector(".slidesArea");
    templateLines = document.querySelectorAll(".templateLine");
    changeSelector = document.querySelector("#changeSelector");
    setTimeout(()=>{
        document.querySelector('.slidesArea').style.visibility = "visible";
        document.querySelector('.templateArea').style.visibility = "visible";

    }, 1500)

}


document.addEventListener('touchstart', () => {
    
    clickPressed = true;
    firstClick = true;
    lineChange();
    alert("tocou");
});

document.addEventListener('touchend', () => {
    clickPressed = false;
    canChange = false;
    firstClick = false;
    
})

document.addEventListener('mousedown', () => {
    clickPressed = true;
    firstClick = true;
    lineChange();
    
})

document.addEventListener('mouseup', () => {
    clickPressed = false;
    canChange = false;
    firstClick = false;
})



document.querySelectorAll('.lineArea').forEach(line => {

    line.addEventListener('click', lineChange);

    line.addEventListener('pointerenter', (e) => {
        e.preventDefault()
        if(clickPressed) {
            
            if(canChange) {
                lineChange(e);
                canChange = false;
            }
        }
    
    });
    line.addEventListener('pointerleave', (e) => {
        e.preventDefault()
        if(firstClick) {
            lineChange(e);
        }
        canChange = true;
        firstClick = false;
    
    });
    
    line.addEventListener('mouseenter', (e) => {
        e.preventDefault()
        if(clickPressed) {
            
            if(canChange) {
                lineChange(e);
                canChange = false;
            }
        }
    
    });
    line.addEventListener('mouseleave', (e) => {
        e.preventDefault()
        if(firstClick) {
            lineChange(e);
        }
        canChange = true;
        firstClick = false;
    
    });


});

updateHexagram()
setControlls();
drawTemplate();

slidesArea.style.display = "block";


function lineChange(e) {
    const index = e.currentTarget.parentElement.parentElement.getAttribute('data-index');
    pos = (e.currentTarget.getAttribute('data-pos')) - 1;
    
    if(!isConsulting) {
        if(changeSelector.checked === true) {
            if(hexagrams[index].lines[pos] == true) {
                hexagrams[index].lines[pos] = false;
            } else {
                hexagrams[index].lines[pos] = true;
            }
        } else {
            for( let i = 0; i < 2; i++ ) {
                if(hexagrams[i].lines[pos] == true) {
                    hexagrams[i].lines[pos] = false;
                } else {
                    hexagrams[i].lines[pos] = true;
                }
            }
        }
    }
        
        
        updateHexagram();
        setControlls();
}


function updateHexagram() {
    document.querySelectorAll('.lineArea').forEach(line => {
            const index = line.parentElement.parentElement.getAttribute('data-index');
            const pos = (line.getAttribute('data-pos')) - 1;
            if(hexagrams[index].lines[pos] === true) {
            line.innerHTML = `<div class="line"><span class="lineNumber">${pos + 1}</span></div>`
            } else {
                line.innerHTML = `<div class="line"><span class="lineNumber">${pos + 1}</span></div><div class="line"></div>`
            }
            
            for( let i = 0; i < 2; i++ ) {
                if(hexagrams[i].lines[pos] === null) {
                    line.innerHTML = '<div class="emptyLine">'
                }
            }
    });
    
    if(JSON.stringify(hexagrams[0].lines) == JSON.stringify(hexagrams[1].lines)) {
        slidesArea.classList.remove('smooth');
        if(currentHexagram == 0) {
            slidesArea.style.marginLeft = "-28rem"
            currentHexagram = 1;
        } else if(currentHexagram == 1) {
            slidesArea.style.marginLeft = "0px";
            currentHexagram = 0;
        }
        hasTwoHexgrams = false;
        document.querySelector('.prevHexagram').style.opacity = 0;
        document.querySelector('.nextHexagram').style.opacity = 0;
        changeSelector.checked = false;
    
        
    } else {
        hasTwoHexgrams = true;
    }
    if(hasTwoHexgrams) {
        if(currentHexagram == 0) {
            document.querySelector('.nextHexagram').style.opacity = 1;
        } else if(currentHexagram == 1) {
            document.querySelector('.prevHexagram').style.opacity = 1;
        }
        slidesArea.classList.add('smooth');
    }

    getInfo();
    drawTemplate();
}

function getInfo() {
    for( let i = 0; i < 2; i++ ) {
    
        hexagrams[i].upperTrigram = getTrigram(4,5,6, i);
        hexagrams[i].bottomTrigram = getTrigram(1,2,3, i);
        hexagrams[i].title = getHexagram(i);
        hexagrams[i].charactere = getCharactere(i);
        hexagrams[i].number = getNumber(i);

    }
    
        if(document.querySelector('.hexagramNumber1').innerHTML != hexagrams[0].number) {
            document.querySelector('.hexagramNumber1').classList.add('fade');
        }
        if(document.querySelector('.hexagramNumber2').innerHTML != hexagrams[1].number) {
            document.querySelector('.hexagramNumber2').classList.add('fade');
        }
        if(document.querySelector('.hexagramTitle1').innerHTML != hexagrams[0].title) {
            document.querySelector('.hexagramTitle1').classList.add('fade');
        }
        if(document.querySelector('.hexagramTitle2').innerHTML != hexagrams[1].title) {
            document.querySelector('.hexagramTitle2').classList.add('fade');
        }
        if(document.querySelector('.charactere1').innerHTML != hexagrams[0].charactere) {
            document.querySelector('.charactere1').classList.add('fade');
        }
        if(document.querySelector('.charactere2').innerHTML != hexagrams[1].charactere) {
            document.querySelector('.charactere2').classList.add('fade');
        }
        if(document.querySelector('#info .ut1').innerHTML != hexagrams[0].upperTrigram) {
            document.querySelector('#info .ut1').classList.add('fade'); 
        }
        if(document.querySelector('#info .ut2').innerHTML != hexagrams[1].upperTrigram) {
            document.querySelector('#info .ut2').classList.add('fade'); 
        }
        if(document.querySelector('#info .bt1').innerHTML != hexagrams[0].bottomTrigram) {
            document.querySelector('#info .bt1').classList.add('fade');
        }
        if(document.querySelector('#info .bt2').innerHTML != hexagrams[1].bottomTrigram) {
            document.querySelector('#info .bt2').classList.add('fade');
        }
        setTimeout(()=>{
            document.querySelector('.hexagramNumber1').innerHTML = hexagrams[0].number;
            document.querySelector('.hexagramNumber2').innerHTML = hexagrams[1].number;
            document.querySelector('.hexagramTitle1').innerHTML = hexagrams[0].title;
            document.querySelector('.hexagramTitle2').innerHTML = hexagrams[1].title;
            document.querySelector('.charactere1').innerHTML = hexagrams[0].charactere;
            document.querySelector('.charactere2').innerHTML = hexagrams[1].charactere;
            document.querySelector('#info .ut1').innerHTML = hexagrams[0].upperTrigram;
            document.querySelector('#info .bt1').innerHTML = hexagrams[0].bottomTrigram;
            document.querySelector('#info .ut2').innerHTML = hexagrams[1].upperTrigram;
            document.querySelector('#info .bt2').innerHTML = hexagrams[1].bottomTrigram;
            document.querySelector('#info .ut1').classList.remove('fade');
            document.querySelector('#info .bt1').classList.remove('fade');
            document.querySelector('#info .ut2').classList.remove('fade');
            document.querySelector('#info .bt2').classList.remove('fade');
            if(isConsulting == false) {
                document.querySelector('.hexagramTitle1').classList.remove('fade');
                document.querySelector('.hexagramTitle2').classList.remove('fade');
                document.querySelector('.charactere1').classList.remove('fade');
                document.querySelector('.charactere2').classList.remove('fade');
                document.querySelector('.hexagramNumber1').classList.remove('fade');
                document.querySelector('.hexagramNumber2').classList.remove('fade');
            }
            
            if(isConsulting) {
                document.querySelector('.nextHexagram').innerHTML = "undefined >";
                document.querySelector('.prevHexagram').innerHTML = "< undefined";
            } else {
                document.querySelector('.nextHexagram').innerHTML = cutTitle(hexagrams[1].title) + "  >";
                document.querySelector('.prevHexagram').innerHTML = "<  " + cutTitle(hexagrams[0].title);
            }
        }, 800)
}

function getTrigram(p1 ,p2, p3, hexIndex) {
    if(hexagrams[hexIndex].lines[p1 - 1] == true && hexagrams[hexIndex].lines[p2  -1] == true && hexagrams[hexIndex].lines[p3 - 1] == true) {
        return (lang == "pt-br") ? ("céu") : ((lang == "en") ? ("heaven") : (""))
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2 - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == false){
        return (lang == "pt-br") ? ("terra") : ((lang == "en") ? ("earth") : (""))
    } else if(hexagrams[hexIndex].lines[p1 - 1] == true && hexagrams[hexIndex].lines[p2  - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == false){
        return (lang == "pt-br") ? ("trovão") : ((lang == "en") ? ("thunder") : (""))
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2 - 1] == true && hexagrams[hexIndex].lines[p3 - 1] == false){
        return (lang == "pt-br") ? ("água") : ((lang == "en") ? ("water") : (""))
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2  - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == true){
        return (lang == "pt-br") ? ("montanha") : ((lang == "en") ? ("mountain") : (""))
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2  - 1] == true && hexagrams[hexIndex].lines[p3 - 1] == true){
        return (lang == "pt-br") ? ("madeira") : ((lang == "en") ? ("wind") : (""))
    } else if(hexagrams[hexIndex].lines[p1 - 1] == true && hexagrams[hexIndex].lines[p2  - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == true){
        return (lang == "pt-br") ? ("fogo") : ((lang == "en") ? ("fire") : (""))
    } else if(hexagrams[hexIndex].lines[p1 - 1] == true && hexagrams[hexIndex].lines[p2  - 1] == true && hexagrams[hexIndex].lines[p3 - 1] == false ){
        return (lang == "pt-br") ? ("lago") : ((lang == "en") ? ("lake") : (""))
    } else {
        return '???'
    }
} 

function getHexagram(hexIndex) {
    title = ""
    pairs.forEach(p => {
        if(hexagrams[hexIndex].upperTrigram == p[0] && hexagrams[hexIndex].bottomTrigram == p[1]) {
            title = p[2];
        }
    })
    return title;
}

function getCharactere(hexIndex) {
    charactere = ""
    pairs.forEach(p => {
        if(hexagrams[hexIndex].title == p[2]) {
            charactere = p[3]
        }
    })
    return charactere;
}

function getNumber(hexIndex) {
    number = 0;
    pairs.forEach(p => {
        if(hexagrams[hexIndex].title == p[2]) {
            number = p[4]
        }
    })
    return number;
}

// Invert Functions
function invertLines() {
    let inversedLines1 = []
    let inversedLines2 = []

    if(canInvert == true) {
        if(changeSelector.checked === true) {
            hexagrams[currentHexagram].lines.forEach(l => {
                l = !l;
                inversedLines1.push(l)
            })
    
            hexagrams[currentHexagram].lines = inversedLines1;
    
        } else {
            hexagrams[0].lines.forEach(l => {
                l = !l;
                inversedLines1.push(l)
            })
            
            hexagrams[1].lines.forEach(l => {
                l = !l;
                inversedLines2.push(l)
            })
            hexagrams[0].lines = inversedLines1;
            hexagrams[1].lines = inversedLines2;
        }
        YingYangShow();
        canInvert = false;

        setTimeout(()=>{
            updateHexagram();
            canInvert = true;
        }, yinyangDuration / 2)
    }
}

function invertTrigrams() {
    if(canInvert == true) {
        if(changeSelector.checked === true) {
        hexagrams[currentHexagram].lines.push(hexagrams[currentHexagram].lines.shift());
        hexagrams[currentHexagram].lines.push(hexagrams[currentHexagram].lines.shift());
        hexagrams[currentHexagram].lines.push(hexagrams[currentHexagram].lines.shift());
        } else {
            for( let i = 0; i < 2; i++ ) {
                hexagrams[i].lines.push(hexagrams[i].lines.shift());
                hexagrams[i].lines.push(hexagrams[i].lines.shift());
                hexagrams[i].lines.push(hexagrams[i].lines.shift());
            }
        }
    
        YingYangShow();
        canInvert = false;

        setTimeout(()=>{
            updateHexagram();
            canInvert = true;
        }, (yinyangDuration / 2))
    }
}

function invertPositions() {
    if(canInvert == true) {

        if(changeSelector.checked === true) {
            hexagrams[currentHexagram].lines.reverse();
        } else {
            for( let i = 0; i < 2; i++ ) {
                hexagrams[i].lines.reverse();
            }
        }

        YingYangShow();
        canInvert = false;
    
        setTimeout(()=>{
            updateHexagram();
            canInvert = true;
        }, yinyangDuration / 2)
    }
}

// Control Setting
function YingYangShow() {
    
    if(currentHexagram == 0) {
        document.querySelector(".yinyangArea1").classList.add("show");
            setTimeout(()=>{
            document.querySelector(".yinyangArea1").classList.remove("show");
        }, yinyangDuration)
    } else if(currentHexagram == 1) {
        document.querySelector(".yinyangArea2").classList.add("show");
            setTimeout(()=>{
            document.querySelector(".yinyangArea2").classList.remove("show");
        }, yinyangDuration)
    }
    
}

function goToSecondHexagram() {
    slidesArea.style.marginLeft = "-28rem";
    currentHexagram = 1;
    setControlls();
}

function goToFirstHexagram() {
    slidesArea.style.marginLeft = "0px"
    currentHexagram = 0;
    setControlls();
}

function setControlls() {
    if(hasTwoHexgrams) {
        if(currentHexagram == 0) {
            document.querySelector('.prevHexagram').style.opacity = 0;
            document.querySelector('.nextHexagram').style.opacity = 1;
        } else if(currentHexagram == 1) {
            document.querySelector('.prevHexagram').style.opacity = 1;
            document.querySelector('.nextHexagram').style.opacity = 0;
        }
    }
}

function cutTitle(title) {
    cuttedTitle = title.split(' - ');
    return cuttedTitle[1];
}

function drawTemplate() {
    
    for(let i = 0; i < templateLines.length; i++) {
        if(hexagrams[0].lines[i] == false && hexagrams[1].lines[i] == false) {
            templateLines[i].innerHTML = '<img src="assets/images/yinLine.png">'
        }
        if(hexagrams[0].lines[i] == true && hexagrams[1].lines[i] == true) {
            templateLines[i].innerHTML = '<img src="assets/images/yangLine.png">'
        }
        if(hexagrams[0].lines[i] == true && hexagrams[1].lines[i] == false) {
            templateLines[i].innerHTML = '<img src="assets/images/oLine.png">'
        }
        if(hexagrams[0].lines[i] == false && hexagrams[1].lines[i] == true) {
            templateLines[i].innerHTML = '<img src="assets/images/xLine.png">'
        }
    }
}

function getAbout(hexIndex) {
    aboutArea = document.querySelector(".aboutArea")
    aboutArea.style.visibility = "visible";

    sentence = "";
    general = "";
    love = "";
    business = "";
    personal  = "";
    overview = "";

    aboutLang = [];
    if(lang == "en") {
        aboutLang = about.en;
    } else if(lang == "pt-br") {
        aboutLang = about.pt;
    }
    aboutLang.forEach(a => {
        if(hexagrams[hexIndex].number == a.id) {
            sentence = a.sentence;
            general = a.general;
            love = a.love;
            business = a.business;
            personal  = a.personal;
            overview = a.overview;
        }
    })

    document.querySelector("#aboutQuote").innerHTML = sentence;
    document.querySelector("#aboutTrigrams").innerHTML = `<p class="about-title">${(lang == "pt-br") ? ("Formado pelos Trigramas") : ((lang == "en") ? ("Formed by the trigrams") : (""))}:<span class="about-content">${hexagrams[currentHexagram].upperTrigram + ` ${(lang == "pt-br") ? ("sobre") : ((lang == "en") ? ("over") : (""))} ` + hexagrams[currentHexagram].bottomTrigram}` + ".";
    document.querySelector("#aboutGeneral").innerHTML = `<p class="about-title">${(lang == "pt-br") ? ("Geral") : ((lang == "en") ? ("General") : (""))}:<span class="about-content">${general}</span>`
    document.querySelector("#aboutLove").innerHTML = `<p class="about-title">${(lang == "pt-br") ? ("Amor") : ((lang == "en") ? ("Love") : (""))}:<span class="about-content">${love}</span>`
    document.querySelector("#aboutBusiness").innerHTML = `<p class="about-title">${(lang == "pt-br") ? ("Negócios") : ((lang == "en") ? ("Business") : (""))}:<span class="about-content">${business}</span>`
    document.querySelector("#aboutPersonal").innerHTML = `<p class="about-title">${(lang == "pt-br") ? ("Pessoal") : ((lang == "en") ? ("General") : (""))}:<span class="about-content">${personal}</span>` 
    document.querySelector("#aboutOverview").innerHTML = `<p class="about-title">${(lang == "pt-br") ? ("Visão geral") : ((lang == "en") ? ("Overview") : (""))}:<span class="about-content">${overview}</span>`

    aboutArea.style.display = 'block';
    aboutArea.addEventListener('click', () => {
        aboutArea.style.display = 'none';
    });

    
}

function setLanguage(l) {
    
    lang = l;
    init();
    document.querySelector(".aboutArea").style.visibility = "hidden";
    document.querySelector(".consultArea").style.display = "none";


    infoSpan = document.querySelectorAll("#info span");

    
    if(lang == "en") {
        document.querySelectorAll(".invertButton").forEach((button)=> {
            if(button.getAttribute("data-op") == "lines") {
                button.innerText = "Invert Lines";
            }
            if(button.getAttribute("data-op") == "trigrams") {
                button.innerText = "Invert Trigrams";
            }
            if(button.getAttribute("data-op") == "positions") {
                button.innerText = "Invert Positions";
            }
        })
        infoSpan[0].innerText = "over";
        infoSpan[1].innerText = "over";
        document.querySelector(".changeSelector label").innerText = "fixed change";
        document.querySelector(".consultButton"). innerText = "Consult with coins";
        document.querySelector(".aboutIChing").innerHTML = "<p>The I Ching (Book of Changes) is an ancient work of Chinese wisdom based on the Yin/Yang energies.</p>It can be used as an oracle or just as a source for understanding the universe.</p><p>It consists of a set of 64 six-line figures that can be whole or broken, called hexagrams.</p>The whole line represents yang (masculine, firm) energy, the broken line represents yin (feminine, malleable) energy.</p><p>Hexagrams are formed by smaller three-line figures called trigrams.</p><p>There are only eight possible trigrams, which when combined form the 64 hexagrams.</p><p>The trigrams are: heaven, earth, water, fire, wind/wood, thunder, mountain, and lake.</p><p>Each trigram carries various symbolisms and meanings, and the hexgrams symbolize the various moments in life.</p>"
        document.querySelector(".hintArea").innerHTML = "click or drag on the lines to change the hexagram";
    }
    else if(lang == "pt-br") {
        document.querySelectorAll(".invertButton").forEach((button)=> {
            if(button.getAttribute("data-op") == "lines") {
                button.innerText = "Inverter Linhas";
            }
            if(button.getAttribute("data-op") == "trigrams") {
                button.innerText = "Inverter Trigramas";
            }
            if(button.getAttribute("data-op") == "positions") {
                button.innerText = "Inverter Posições";
            }
        })
        infoSpan[0].innerText = "sobre";
        infoSpan[1].innerText = "sobre";
        document.querySelector(".changeSelector label").innerText = "mudança fixa";
        document.querySelector(".consultButton"). innerText = "Consultar com moedas";
        document.querySelector(".aboutIChing").innerHTML = "<p> O I Ching (Livro das mutações) é uma obra milenar da sabedoria chinesa baseado nas energias Yin/Yang.</p><p>Ele pode ser usado como óráculo ou apenas como fonte de entendimento do universo.</p><p>Consiste em um conjunto de 64 figuras de seis linhas que podem ser inteiras ou partidas chamadas de hexagramas.</p><p>A linha inteira representa a energia yang (masculina, firme), a linha partida representa a energia yin (feminina, maleável).</p><p>Os hexagramas são formados por figuras menores de três linhas chamadas de trigramas</p><p>Existem apenas oito trigramas possíveis, que quando combinados formam os 64 hexagramas.</p><p>Os trigramas são: céu, terra, água, fogo, vento/madeira, trovão, montanha e lago.</p><p>Cada trigrama possui vários simbolismos e significados e os hexgramas simbolizam os diversos momentos da vida.</p>";
        document.querySelector(".hintArea").innerHTML = "clique ou arraste nas linhas para fazer mutações";
    }

    updateHexagram();
    exitGame();

    
}