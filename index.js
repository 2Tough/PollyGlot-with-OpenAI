import OpenAI from 'openai'

// Languages

const spanishBtn = document.getElementById("input--select--Spanish");
const frenchBtn = document.getElementById("input--select--French");
const italianBtn = document.getElementById("input--select--Italian");

// Translate Btn

const translateBtn = document.getElementsByClassName("translate--btn");
const translateBtnId = document.getElementById("translate--btn");

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
            content: 'You a translator assistant. You are provide with input and have to translate it to the language requested.'
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
    const outputArea = document.getElementsByClassName("outputArea")
    const hideLanguages = document.getElementsByClassName("main--app--content--container--languages")
}

