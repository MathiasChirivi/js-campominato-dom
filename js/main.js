// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella contiene un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console
// con il numero della cella cliccata.


const container = document.getElementById("containerMain");
const btnstart = document.getElementById("start");
const livello = document.getElementById("selectDifficulty");


btnstart.addEventListener("click", function(){
    var selezionaLivello = livello.value; 
    console.log("Il livello scelto è", selezionaLivello);

    container.innerHTML = '';
    
    if (livello.value == "hard") {
        
        for (let i = 1; i <= 100; i++) {
            
            //creamo un quadrato contenitore
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareHard");
            squareDiv.innerHTML = i;
            
            squareDiv.addEventListener(`click`, function(){
                this.classList.toggle("clicked");
                console.log(`Hai appena cliccato il : ${i}`)
            })
            container.appendChild(squareDiv);
        }

} else if (livello.value == "normal") {

        for (let i = 1; i <= 81; i++) {
            
            //creamo un quadrato contenitore
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareNormal");
            squareDiv.innerHTML = i;
            
            squareDiv.addEventListener(`click`, function(){
                this.classList.toggle("clicked");
                console.log(`Hai appena cliccato il : ${i}`)
            })
            container.appendChild(squareDiv);
        }
  
} else {
        for (let i = 1; i <= 49; i++) {
                
            //creamo un quadrato contenitore
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareEasy");
            squareDiv.innerHTML = i;
            
            squareDiv.addEventListener(`click`, function(){
                this.classList.toggle("clicked");
                console.log(`Hai appena cliccato il : ${i}`)
            })
            container.appendChild(squareDiv);
        }
}
});


