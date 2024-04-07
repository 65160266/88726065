const input = document.querySelector("#inputs")
const inputTyp = document.querySelector("#inp")
const hint = document.querySelector(".hint span")
const remain = document.querySelector(".remain span")
const wrong = document.querySelector(".wrong span")
const btnReset = document.querySelector("#btnreset")


let word = ""
let canGuess = 0
let correctWord = []
let inCorrectWord = []
let score = 50


function randomWord() {

    correctWord = []
    inCorrectWord = []


    const randObj = wordList[Math.floor(Math.random() * wordList.length)]
    word = randObj.word
    canGuess = randObj.guess


    hint.innerHTML = randObj.hint
    remain.innerHTML = canGuess

  
    let html = ""
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled />`
    }

    input.innerHTML = html
    wrong.innerHTML = inCorrectWord

    console.log(word)
}

randomWord()


inputTyp.addEventListener("input", playGame)


document.addEventListener("keydown", ()=>inputTyp.focus())


btnReset.addEventListener("click", randomWord)


function playGame(e) {
    key = e.target.value;



    if (key.match(/^[ก-๙]+$/)) {
 
        if (word.includes(key)) {
          
            if (!correctWord.includes(key)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === key) {
                        input.querySelectorAll("input")[i].value = key;
                        correctWord.push(key);
                        score -= 1; 
                    }
                }
            }
        } else {
            if (!inCorrectWord.includes(key)) {
                inCorrectWord.push(key);
                canGuess--;
                score += 1; // 
            }
        }
    }

   
    inputTyp.value = "";
    remain.innerHTML = canGuess;
    wrong.innerHTML = inCorrectWord;
    document.getElementById("score").textContent = score; 


    setTimeout(() => {
        if (correctWord.length === word.length) {
            alert("ถูกต้อง");
            if (score <= 0) {
                alert("คุณชนะ!");
            } else {
                randomWord();
            }
        } else {
            if (canGuess == 0) {
                alert("คุณตอบไม่ถูกต้อง");
                for (let i = 0; i < word.length; i++) {
                    input.querySelectorAll("input")[i].value = word[i];
                }
            }
        }
    });

    console.log("คะแนน: " + score); 
}
        