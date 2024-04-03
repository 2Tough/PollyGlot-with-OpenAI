// Languages

const spanishBtn = document.getElementById("input--select--Spanish")
const frenchBtn = document.getElementById("input--select--French")
const italianBtn = document.getElementById("input--select--Italian")

// Translate Btn

const translateBtn = document.getElementsByClassName("translate--btn")
const translateBtnId = document.getElementById("translate--btn")

// Input
const inputText = document.getElementById("input--text")


// Event listeners

translateBtnId.addEventListener("click", getText)

function getText(e) {
    e.preventDefault
    //console.log(inputText.value)
    if (spanishBtn.checked) {
        
        translateData("Spanish")
    } 
    if (frenchBtn.checked) {
        alert("French");
        translateData("French")
    }  
    if (italianBtn.checked) {
        alert("Italian");
        translateData("Italian")
    } 
}

function translateData(language) {
if ((language) === "Spanish") {
    console.log("Translate to Spanish: " + inputText.value);
}
}
