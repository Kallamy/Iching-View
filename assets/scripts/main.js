/* linha yang = true
   linha yin = false 
*/

hexagrams = [
   {
        title: "",
        charactere: "",
        upperTrigram: "",
        bottomTrigram: "",
        lines: [
            true, 
            false, 
            false, 
            true, 
            false, 
            true
    
        ]
   },
   {
        title: "",
        charactere: "",
        upperTrigram: "",
        bottomTrigram: "",
        lines: [
            true, 
            true, 
            true, 
            false, 
            false, 
            false
        ]
   },

]

const yinyangDuration = 2000;
const slidesArea = document.querySelector(".slidesArea");
let currentHexagram = 1;
/*
let clickPressed = false;
let canChange = true;
document.addEventListener('mousedown', () => {
    clickPressed = true;
    lineChange()
    
})

document.addEventListener('mouseup', () => {
    clickPressed = false;
    canChange = false;
})
*/

document.querySelectorAll('.lineArea').forEach(line => {

    line.addEventListener('click', lineChange);
    
});

updateHexagram()
setControlls();
drawTemplate();


function lineChange(e) {
    const index = e.currentTarget.parentElement.parentElement.getAttribute('data-index');
    pos = (e.currentTarget.getAttribute('data-pos')) - 1;

            if(hexagrams[index].lines[pos] == true) {
                hexagrams[index].lines[pos] = false;
            } else {
                hexagrams[index].lines[pos] = true;
            }
        
        
        updateHexagram();
}


function updateHexagram() {
    document.querySelectorAll('.lineArea').forEach(line => {
            const index = line.parentElement.parentElement.getAttribute('data-index');
            const pos = (line.getAttribute('data-pos')) - 1;
            if(hexagrams[index].lines[pos] == true) {
            line.innerHTML = '<div class="line"></div>'
            } else {
                line.innerHTML = '<div class="line"></div><div class="line">'
            }
    });
    
    getInfo();
    drawTemplate();
}

function getInfo() {
    for( let i = 0; i < 2; i++ ) {
    
        hexagrams[i].upperTrigram = getTrigram(4,5,6, i);
        hexagrams[i].bottomTrigram = getTrigram(1,2,3, i);
        hexagrams[i].title = getHexagram(i);
        hexagrams[i].charactere = getCharactere(i);

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
            console.log(document.querySelector('.hexagramTitle1'))
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
            document.querySelector('.hexagramTitle1').classList.remove('fade');
            document.querySelector('.hexagramTitle2').classList.remove('fade');
            document.querySelector('.charactere1').classList.remove('fade');
            document.querySelector('.charactere2').classList.remove('fade');

            document.querySelector('.nextHexagram').innerHTML = cutTitle(hexagrams[1].title) + " >";
            document.querySelector('.prevHexagram').innerHTML = "< " + cutTitle(hexagrams[0].title);
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

// Invert Functions
function invertLines() {
    let inversedLines = []
    hexagrams[currentHexagram - 1].lines.forEach(l => {
         l = !l;
         inversedLines.push(l)
    })

    hexagrams[currentHexagram - 1].lines = inversedLines;

    YingYangShow();

    setTimeout(()=>{
        updateHexagram();
    }, 500)
}

function invertTrigrams() {
    hexagrams[currentHexagram - 1].lines.push(hexagrams[currentHexagram - 1].lines.shift());
    hexagrams[currentHexagram - 1].lines.push(hexagrams[currentHexagram - 1].lines.shift());
    hexagrams[currentHexagram - 1].lines.push(hexagrams[currentHexagram - 1].lines.shift());


    YingYangShow();

    setTimeout(()=>{
        updateHexagram();
    }, (yinyangDuration / 2))
}

function invertPositions() {
    hexagrams[currentHexagram - 1].lines.reverse();

    YingYangShow();

    setTimeout(()=>{
        updateHexagram();
    }, 500)
}

function YingYangShow() {
    
    if(currentHexagram == 1) {
        document.querySelector(".yinyangArea1").classList.add("show");
            setTimeout(()=>{
            document.querySelector(".yinyangArea1").classList.remove("show");
        }, yinyangDuration)
    } else if(currentHexagram == 2) {
        document.querySelector(".yinyangArea2").classList.add("show");
            setTimeout(()=>{
            document.querySelector(".yinyangArea2").classList.remove("show");
        }, yinyangDuration)
    }
    
}

function goToSecondHexagram() {
    slidesArea.style.marginLeft = "-369px"
    currentHexagram = 2;
    setControlls();
}

function goToFirstHexagram() {
    slidesArea.style.marginLeft = "0px"
    currentHexagram = 1;
    setControlls();
}

function setControlls() {
    if(currentHexagram == 1) {
        document.querySelector('.prevHexagram').style.opacity = 0;
        document.querySelector('.nextHexagram').style.opacity = 1;
    } else if(currentHexagram == 2) {
        document.querySelector('.prevHexagram').style.opacity = 1;
        document.querySelector('.nextHexagram').style.opacity = 0;
    }
}

function cutTitle(title) {
    cuttedTitle = title.split(' - ');
    return cuttedTitle[1];
}

function drawTemplate() {
    templateLines = document.querySelectorAll(".templateLine");

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