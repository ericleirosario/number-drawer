const minNumber = document.querySelector("#in-between-input").value;
const maxNumber = document.querySelector("#it-is-input").value;
const drawButton = document.querySelector(".draw-button")
const clearValues = document.querySelector(".clear-values")


function drawRandomNumber(){
    const drawnNumber = document.querySelector("p");
    const minNumber = Math.ceil(document.querySelector("#in-between-input").value);
    const maxNumber = Math.floor(document.querySelector("#it-is-input").value);
    

    if(minNumber == "" || maxNumber == ""){
        alert("Os campos 'entre' & 'e' devem estar preenchidos")
    } else {
        if(minNumber > maxNumber){
            alert("Número mínimo é maior que o número máximo!")
        } else if(minNumber < 0){
            alert("Número mínimo é menor ou igual a zero!")
        } else if (minNumber === maxNumber){
            alert("Números são iguais!")
        } else if(minNumber > 0){
            const result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
            
            drawnNumber.innerHTML = result;
        }
    }   
}

function resetValues(){
    const drawnNumber = document.querySelector("p");
    const minNumber = document.querySelector("#in-between-input");
    const maxNumber = document.querySelector("#it-is-input");
    
    
    drawnNumber.innerHTML = "0";
    minNumber.value = "";
    maxNumber.value = "";
}


drawButton.addEventListener("click", drawRandomNumber);
clearValues.addEventListener("click", resetValues);