/* linha yang = true
   linha yin = false 
*/

hexagrams = [
   {
        title: "",
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
        lines: [
            false, 
            false, 
            true, 
            false, 
            false, 
            true
        ]
   },

]



upperTrigram = '';
bottomTrigram = '';

const yinyangDuration = 2000;

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


function lineChange(e) {
    pos = (e.currentTarget.getAttribute('data-pos')) - 1;

            if(hexagrams[0].lines[pos] == true) {
                hexagrams[0].lines[pos] = false;
            } else {
                hexagrams[0].lines[pos] = true;
            }
        
        
        updateHexagram();
}


function updateHexagram() {
    document.querySelectorAll('.lineArea').forEach(line => {
        pos = (line.getAttribute('data-pos')) - 1;
        if(hexagrams[0].lines[pos] == true) {
           line.innerHTML = '<div class="line"></div>'
        } else {
            line.innerHTML = '<div class="line"></div><div class="line">'
        }
    });

    getInfo();
}

function getInfo() {
    
    upperTrigram = getTrigram(4,5,6);
    bottomTrigram = getTrigram(1,2,3);
    hexagrams[0].title = getHexagram();
    
    if(document.querySelector('.hexagramTitle').innerHTML != hexagrams[0].title) {
        document.querySelector('.hexagramTitle').classList.add('fade');
    }
    if(document.querySelector('#info .ut').innerHTML != upperTrigram) {
        document.querySelector('#info .ut').classList.add('fade'); 
    }
    if(document.querySelector('#info .bt').innerHTML != bottomTrigram) {
        document.querySelector('#info .bt').classList.add('fade');
    }
    setTimeout(()=>{
        document.querySelector('.hexagramTitle').innerHTML = hexagrams[0].title;
        document.querySelector('.hexagramTitle').classList.remove('fade');
        document.querySelector('#info .ut').innerHTML = upperTrigram;
        document.querySelector('#info .bt').innerHTML = bottomTrigram;
        document.querySelector('#info .ut').classList.remove('fade');
        document.querySelector('#info .bt').classList.remove('fade');
    }, 800)
    

    
    
}

function getTrigram(p1 ,p2, p3) {
    if(hexagrams[0].lines[p1 - 1] == true && hexagrams[0].lines[p2  -1] == true && hexagrams[0].lines[p3 - 1] == true) {
        return 'céu'
    } else if(hexagrams[0].lines[p1 - 1] == false && hexagrams[0].lines[p2 - 1] == false && hexagrams[0].lines[p3 - 1] == false){
        return 'terra'
    } else if(hexagrams[0].lines[p1 - 1] == true && hexagrams[0].lines[p2  - 1] == false && hexagrams[0].lines[p3 - 1] == false){
        return 'trovão'
    } else if(hexagrams[0].lines[p1 - 1] == false && hexagrams[0].lines[p2 - 1] == true && hexagrams[0].lines[p3 - 1] == false){
        return 'água'
    } else if(hexagrams[0].lines[p1 - 1] == false && hexagrams[0].lines[p2  - 1] == false && hexagrams[0].lines[p3 - 1] == true){
        return 'montanha'
    } else if(hexagrams[0].lines[p1 - 1] == false && hexagrams[0].lines[p2  - 1] == true && hexagrams[0].lines[p3 - 1] == true){
        return 'madeira'
    } else if(hexagrams[0].lines[p1 - 1] == true && hexagrams[0].lines[p2  - 1] == false && hexagrams[0].lines[p3 - 1] == true){
        return 'fogo'
    } else if(hexagrams[0].lines[p1 - 1] == true && hexagrams[0].lines[p2  - 1] == true && hexagrams[0].lines[p3 - 1] == false ){
        return 'lago'
    }
} 

function getHexagram() {
    title = ""
    pairs.forEach(p => {
        if(upperTrigram == p[0] && bottomTrigram == p[1]) {
            title = p[2];
        }
    })
    return title;
}

// Invert Functions
function invertLines() {
    let inversedLines = []
    hexagrams[0].lines.forEach(l => {
         l = !l;
         inversedLines.push(l)
    })

    hexagrams[0].lines = inversedLines;

    YingYangShow();

    setTimeout(()=>{
        updateHexagram();
    }, 500)
}

function invertTrigrams() {
    hexagrams[0].lines.push(hexagrams[0].lines.shift());
    hexagrams[0].lines.push(hexagrams[0].lines.shift());
    hexagrams[0].lines.push(hexagrams[0].lines.shift());


    YingYangShow();

    setTimeout(()=>{
        updateHexagram();
    }, (yinyangDuration / 2))
}

function invertPositions() {
    hexagrams[0].lines.reverse();

    YingYangShow();

    setTimeout(()=>{
        updateHexagram();
    }, 500)
}

function YingYangShow() {
    
    document.querySelector(".yinyangArea").classList.add("show");
    setTimeout(()=>{
        document.querySelector(".yinyangArea").classList.remove("show");

    }, yinyangDuration)
    
}


