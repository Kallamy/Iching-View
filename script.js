/* linha yang = true
   linha yin = false 
*/
hexagrams = [
   {
        title: "Testando 123..",
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
        title: "Titulo2",
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

document.querySelectorAll('.lineArea').forEach(line => {
    line.addEventListener('click', lineChange);
});

updateHexagram()


function lineChange(e) {
    pos = (e.currentTarget.getAttribute('data-pos')) - 1;
    if(hexagrams[0].lines[pos] == true) {
        hexagrams[0].lines[pos] = false
    } else {
        hexagrams[0].lines[pos] = true
    }

    updateHexagram()
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

    document.querySelector('.hexagramTitle').classList.add('fade');
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
