/* linha yang = true
   linha yin = false 
*/

let hexagrams = [
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

]

const yinyangDuration = 2000;
const slidesArea = document.querySelector(".slidesArea");
let currentHexagram = 0;
let hasTwoHexgrams = true;
let templateLines = document.querySelectorAll(".templateLine");
let changeSelector = document.querySelector("#changeSelector");


let clickPressed = false;
let canChange = true;
let firstClick = false;

let isConsulting = false;
document.addEventListener('mousedown', () => {
    clickPressed = true;
    firstClick = true;
    lineChange()
    
})

document.addEventListener('mouseup', () => {
    clickPressed = false;
    canChange = false;
    firstClick = false;
})


document.querySelectorAll('.lineArea').forEach(line => {

    line.addEventListener('click', lineChange);
    
    line.addEventListener('mouseenter', (e) => {
        
        if(clickPressed) {
           
            if(canChange) {
                lineChange(e);
                canChange = false;
            }
        }
    
    });
    line.addEventListener('mouseout', (e) => {
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
            slidesArea.style.marginLeft = "-369px"
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
        return 'céu'
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2 - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == false){
        return 'terra'
    } else if(hexagrams[hexIndex].lines[p1 - 1] == true && hexagrams[hexIndex].lines[p2  - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == false){
        return 'trovão'
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2 - 1] == true && hexagrams[hexIndex].lines[p3 - 1] == false){
        return 'água'
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2  - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == true){
        return 'montanha'
    } else if(hexagrams[hexIndex].lines[p1 - 1] == false && hexagrams[hexIndex].lines[p2  - 1] == true && hexagrams[hexIndex].lines[p3 - 1] == true){
        return 'madeira'
    } else if(hexagrams[hexIndex].lines[p1 - 1] == true && hexagrams[hexIndex].lines[p2  - 1] == false && hexagrams[hexIndex].lines[p3 - 1] == true){
        return 'fogo'
    } else if(hexagrams[hexIndex].lines[p1 - 1] == true && hexagrams[hexIndex].lines[p2  - 1] == true && hexagrams[hexIndex].lines[p3 - 1] == false ){
        return 'lago'
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

    setTimeout(()=>{
        updateHexagram();
    }, yinyangDuration / 2)
}

function invertTrigrams() {
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

    setTimeout(()=>{
        updateHexagram();
    }, (yinyangDuration / 2))
}

function invertPositions() {
    if(changeSelector.checked === true) {
        hexagrams[currentHexagram].lines.reverse();
    } else {
        for( let i = 0; i < 2; i++ ) {
            hexagrams[i].lines.reverse();
        }
    }


    YingYangShow();

    setTimeout(()=>{
        updateHexagram();
    }, yinyangDuration / 2)
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
    slidesArea.style.marginLeft = "-369px";
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


    sentence = "";
    general = "";
    love = "";
    business = "";
    personal  = "";
    overview = "";

    about.forEach(a => {
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
    document.querySelector("#aboutTrigrams").innerHTML = `<p class="about-title">Formed by the trigrams:</p><p class="about-content">${hexagrams[currentHexagram].upperTrigram + " over " + hexagrams[currentHexagram].bottomTrigram}</p>`
    document.querySelector("#aboutGeneral").innerHTML = `<p class="about-title">General:</p><p class="about-content">${general}</p>`
    document.querySelector("#aboutLove").innerHTML = `<p class="about-title">Love:</p><p class="about-content">${love}</p>`
    document.querySelector("#aboutBusiness").innerHTML = `<p class="about-title">Business:</p><p class="about-content">${business}</p>`
    document.querySelector("#aboutPersonal").innerHTML = `<p class="about-title">Personal:</p><p class="about-content">${personal}</p>` 
    document.querySelector("#aboutOverview").innerHTML = `<p class="about-title">Overview:</p><p class="about-content">${overview}</p>`

    aboutArea.style.display = 'block';
    aboutArea.addEventListener('click', () => {
        aboutArea.style.display = 'none';
    });

    console.log(`Até o momento eu já escrevi ${about.length} hexagramas` )
    
}