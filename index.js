let turn = "X";
let gameover = false;
var x = new Audio('x.mp3');
var won = new Audio('win3.mp3');
const changeTurn = ()=>{
    return turn === "X"? "O" : "X"
}




let boxes = document.getElementsByClassName('items');
Array.from(boxes).forEach( element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{if(boxtext.innerText === ""){
        boxtext.innerText = turn;
        turn = changeTurn();
        checkWin();
        checkTie();
        if(gameover === true){
            turn = "";
            console.log("in true");
        }
        if(gameover === false){
        document.getElementById("info").innerText = "Turn For " + turn;
        }
    }
})
})


const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]
    ]
    
    
    win.forEach(e =>{
        if( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ""))
        {   
            document.getElementById("info").innerText  = boxtexts[e[0]].innerText + " WON";
            gameover = true;
            turn = "";
            document.getElementsByTagName("img")[0].src = 'img.gif';
            document.getElementsByTagName("img")[0].style.width = "6em";
            won.play();

        }
        // if( gameover === false && boxtexts[e[0]].innerText !== ""){
        //     // document.getElementById("info").innerText = "TIE";
        //     console.log("INTIE");
        // }
        //  if(( (gameover === false) && (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText !== boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") && (boxtexts[e[1]].innerText !== "") && (boxtexts[e[2]].innerText !== "")

        //  || (boxtexts[e[0]].innerText !== boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") && (boxtexts[e[1]].innerText !== "") && (boxtexts[e[2]].innerText !== "")
        //  || (boxtexts[e[0]].innerText !== boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText !== boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") && (boxtexts[e[1]].innerText !== "") (boxtexts[e[2]].innerText !== "")))
        //  {   
        //     //  document.getElementById("info").innerText = "TIE";
        //     console.log("INTIE");
        //  }
        // else {
        //     document.getElementById("info").innerText = "TIE";
        // }
        // if((boxtexts[e].innerText !== "")){
        //     console.log("inTie");
        // }
    })
}

// const fun = ()=>{

// }
reset.addEventListener('click', ()=>{
    var restart = new Audio('Restart.mp3');
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach( e =>{
        e.innerText = "";
        turn = "X";
        gameover = false;
        document.getElementById("info").innerText = "Turn For "+ turn;
        document.getElementsByTagName("img")[0].style.width = "0";
        restart.play();
        won.pause();
        won.currentTime = 0;
    })
})

// const checkTie = () => {
//      let boxtexts = document.querySelectorAll(".boxtext");
//     //   let box = documnet.getElementsByClassName(".items");
//       boxtexts.forEach(e =>{
//            if(gameover === false && boxtexts[e].innerText !==""){
//                 console.log("inTie");
//            }
//      })
//  }

const checkTie = () =>{
    var tie = new Audio('tie.mp3');
    let boxes = document.getElementsByClassName("items");
    let boxtexts = document.getElementsByClassName("boxtext");
    let new1 = 0;
    for(i=0; i<boxes.length ;i++){
        if( (boxtexts[i].innerText === "X" || boxtexts [i].innerText === "O")  ){
            // document.getElementById("info").innerText = "TIE";
            console.log("intie");
            new1 = new1 + 1;
            }
        
    }
    if(new1 === 9 && gameover === false){
        console.log("TIE");
        document.getElementById("info").innerText = "TIE";
        gameover = true;
        document.getElementsByTagName("img")[0].src = 'img2.gif';
        document.getElementsByTagName("img")[0].style.width = "6em";
        tie.play();
    }
}