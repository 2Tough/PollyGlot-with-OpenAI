import OpenAI from 'openai'

// Languages

const spanishBtn = document.getElementById("input--select--Spanish");
const frenchBtn = document.getElementById("input--select--French");
const italianBtn = document.getElementById("input--select--Italian");
const languagesSelectOptions = document.getElementById('language--select--options')
const textToTranslateBtn = document.getElementById("textToTranslateTitle")

// Translate Btn

const translateBtnId = document.getElementById("translate--btn");
const restartBtnId = document.getElementById("restart--btn");

// Input
const inputText = document.getElementById("input--text");

// Event listeners

translateBtnId.addEventListener("click", getText);

function getText(e) {
    e.preventDefault;
    //console.log(inputText.value)
    if (spanishBtn.checked) {
        fetchData("Spanish");
    }
    if (frenchBtn.checked) {
        fetchData("French");
    }
    if (italianBtn.checked) {
        fetchData("Italian");
    }
}

async function fetchData(language) {
    const messages = [
        {
            role: 'system',
            content: 'You a translator assistant. You are provide with input and have to translate it to the language requested. The task is to translate only what is provided. If you get text like: "Translate the following text" you would translate that to the requested language.'
        },
        {
            role: 'user',
            content: `Translate: ${inputText.value} to ${language}`
        }
    ]

    try {
        const openai = new OpenAI({
            dangerouslyAllowBrowser: true,
            apiKey: OPENAI_API_KEY,
        })

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            temperature: 1.5,
            messages: messages
        })
        renderTranslation(response.choices[0].message.content)
    } catch (error) {
        console.log('Error message: ' + error)
    }

}

function renderTranslation(data) {
    console.log(data)
    let outputArea = document.getElementById("output-panel")
    let translationOutputText = document.createElement("h2")
    outputArea.appendChild(translationOutputText)
    
    
    if (translateBtnId.textContent === "Translate") {
        textToTranslateBtn.style.display = 'block',
        outputArea.style.display = 'block',
        languagesSelectOptions.style.display = 'none',
        
        translationOutputText.textContent = `${data}`
        translateBtnId.textContent = "Restart"

    } else {
        translationOutputText.textContent = ""
        outputArea.replaceChildren(),
        outputArea.style.display = 'none',
        textToTranslateBtn.style.display = 'none',
            translateBtnId.textContent = 'Translate',
            languagesSelectOptions.style.display = 'block'
            
    }
}
