// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella contiene un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console
// con il numero della cella cliccata.


const container = document.getElementById("containerMain");
const btnstart = document.getElementById("start");
const livello = document.getElementById("selectDifficulty");
let bombNumbers = [];
let point = 0;


function random(min, max) {
    for (let i = 0; i < 16; i++) {
    let number = Math.floor(Math.random() * (max - min) + min);
    if (!bombNumbers.includes(number)) {
        bombNumbers.push(number);
    }
    console.log(number);
}
  }

btnstart.addEventListener("click", function(){  

    var selezionaLivello = livello.value; 
    console.log("Il livello scelto è", selezionaLivello);

    container.innerHTML = '';
    risultato.innerHTML = '';
    point = 0;
    bombNumbers = [];
    
    if (livello.value == "hard") {
        random(1, 100);
        for (let i = 1; i <= 100; i++) {
            
            //creamo un quadrato contenitore
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareHard");
            squareDiv.innerHTML = i;
            
            squareDiv.addEventListener(`click`, function(){
                if(bombNumbers.includes(i)){
                    this.classList.add("lose");
                    alert("Hai perso");
                    let risultato = (`Mi dispiace hai perso , il risultato è : ${point} `);
                    document.getElementById("risultato").innerText = risultato;
                    bombNumbers.style.backgroundColor = "red";
                } else {
                    point++;
                    this.classList.toggle("clicked");
                    console.log(`Hai appena cliccato il : ${i}`)
                }
                if (point == (squareDiv - 16)){
                    alert("HAI VINTO COMPLIMENTI")
                }

            })
            container.appendChild(squareDiv);
        }

}else if (livello.value == "normal") {
    random(1, 81);
    for (let i = 1; i <= 81; i++) {
        
        //creamo un quadrato contenitore
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareNormal");
        squareDiv.innerHTML = i;
        
        squareDiv.addEventListener(`click`, function(){
                if(bombNumbers.includes(i)){
                    this.classList.add("lose");
                    alert("Hai perso");
                    let risultato = (`Mi dispiace hai perso , il risultato è : ${point} `);
                    document.getElementById("risultato").innerText = risultato;
                } else {
                    point++;
                    this.classList.toggle("clicked");
                    console.log(`Hai appena cliccato il : ${i}`)
                }
                if (point == (squareDiv - 16)){
                    alert("HAI VINTO COMPLIMENTI")
                }
            })
            container.appendChild(squareDiv);
        }
  
} else {
    random(1, 49);
        for (let i = 1; i <= 49; i++) {
                
            //creamo un quadrato contenitore
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareEasy");
            squareDiv.innerHTML = i;
            
            squareDiv.addEventListener(`click`, function(){
                if(bombNumbers.includes(i)){
                    this.classList.add("lose");
                    alert("Hai perso");
                    let risultato = (`Mi dispiace hai perso , il risultato è : ${point} `);
                    document.getElementById("risultato").innerText = risultato;
                } else {
                    point++;
                    this.classList.toggle("clicked");
                    console.log(`Hai appena cliccato il : ${i}`)
                }
                if (point == (squareDiv - 16)){
                    alert("HAI VINTO COMPLIMENTI")
                }
            })
            container.appendChild(squareDiv);
        }
}
});


