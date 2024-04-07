<template>
    <div>
        <div id="container">
            <h1>เกมทาย คำศัพท์ไทย</h1>   <h3>โปรดเปลี่ยนภาษาเพื่อเล่นเกม</h3>
            <div id="inputs">
                <div id ="inx"></div>
            </div>
            <div id="detail">
                <input id ="" type="text" v-model="typedInput" @keydown="focusInput" />
                <div class="hint">คำใบ้: <span>{{ hint }}</span></div>
                <div class="remain">ทายผิดได้อีก: <span>{{ remaining }}</span></div>
                <div class="wrong">ตัวอักษรทายผิด: <span>{{ wrongGuesses }}</span></div>
                <div>คะแนน: <span>{{ score }}</span></div>
            </div>
            <button @click="resetGame">Reset</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      wordList: [
    { word: "หมี", hint: "สัตว์อยู่ขั่วโลกเหนือ", guess: 4 },
    { word: "รถยนต์", hint: "ขับเคลื่อน 4 ล้อ", guess: 4 },
    { word: "กาแฟ", hint: "เครื่องดื่มที่มีคาfein", guess: 3 },
    { word: "ส้มตำ", hint: "อาหารแซ่บกินคู่กับไก่ย่าง", guess: 3 },
    { word: "เคารพ", hint: "การแสดงความนับถือ", guess: 5 },
    { word: "รองเท้า", hint: "เอาไว้สวมหรือใส่เดิน", guess: 5 },
    { word: "เก้าอี้", hint: "มี4ขาเอาไว้นั่ง", guess: 4 },
    { word: "ลำโพง", hint: "เครื่องใช้ที่ส่งเสียงดัง", guess: 4 },
    { word: "ไม้บรรทัด", hint: "เอาไว้วัดความยาวหรือตีเส้น", guess: 5 },
    { word: "เตียงนอน", hint: "ช่วยให้หลับสบายไม่เจ็บหลัง", guess: 5 },
    { word: "เสือ", hint: "สัตว์กินเนื้อคล้ายแมว", guess: 3 },
    { word: "ประตู", hint: "เปิดไปไหนก็ได้", guess: 3 },
    { word: "โทรศัพท์", hint: "ใข้โทรใช้คุยไลน์", guess: 5 },
    { word: "โทรทัศน์", hint: "เครื่องใช้ในการดูความบันเทิง", guess: 5 },
    { word: "ไมค์", hint: "ใช้ร้องเพลง", guess: 3 },
    { word: "อาจารย์", hint: "สั่งงานหรือการบ้าน", guess: 5 },
    { word: "มอเตอร์ไซค์", hint: "ขับเคลื่อน 4 ลบ 2 ล้อ", guess: 5 },
    { word: "เหม็น", hint: "มีกลิ่นเน่าเสีย", guess: 4 },
    { word: "ดวงอาทิตย์", hint: "ใหญ่สุดในวงโคจรระบบสุริยะ", guess: 5 },
    { word: "เธอ", hint: "คนน่ารัก", guess: 2 },
    { word: "ปีโป้", hint: "ปีอะไรมีหลายสี", guess: 3 },
    { word: "ช้าง", hint: "สัตว์ตัวใหญ่มีงวง", guess: 3 },
    { word: "นกฮูก", hint: "สัตว์ปีกตากลมๆนอนกลางวัน", guess: 5 },
    { word: "เต่า", hint: "สัตว์สี่ขาเดินช้ามาก", guess: 3 },
    { word: "พระ", hint: "ชอบบินตอนเช้า", guess: 2 },
    ],
    
      word: "",
      canGuess: 0,
      correctWord: [],
      inCorrectWord: [],
      score: 50,
      typedInput:[]
    };
  },
  mounted() {
    this.randomWord();
  },
  methods: {
    randomWord() {
      const randObj = this.wordList[Math.floor(Math.random() * this.wordList.length)];
      this.word = randObj.word;
      this.canGuess = randObj.guess;
      this.hint = randObj.hint;
      this.remaining = this.canGuess;
      this.correctWord = [];
      this.inCorrectWord = [];
      this.wrongGuesses = [];
      let html = "";
      for (let i = 0; i < this.word.length; i++) {
        html += `<input type="text" disabled />`;
      }
      this.wordInput = html;
    },

    playGame() {
      const key = this.typedInput;
      if (key.match(/^[ก-๙]+$/)) {
        if (this.word.includes(key)) {
          if (!this.correctWord.includes(key)) {
            for (let i = 0; i < this.word.length; i++) {
              if (this.word[i] === key) {
                input.querySelectorAll("input")[i].value = key;
                this.correctWord.push(key);
                this.score -= 1;
              }
            }
          }
        } else {
          if (!this.inCorrectWord.includes(key)) {
            this.inCorrectWord.push(key);
            this.canGuess--;
            this.score += 1;
          }
        }
      }
      this.typedInput = ()=>typedInput.focus();
      this.remaining = this.canGuess;
      this.wrongGuesses = this.inCorrectWord;
      if (this.correctWord.length === this.word.length) {
        alert("คุณตอบถูก");
        if (this.score <= 0) {
          alert("คุณชนะ");
        } else {
          this.randomWord();
        }
      } else {
        if (this.canGuess === 0) {
          alert("คุณตอบไม่ถูกต้อง");
          for (let i = 0; i < this.word.length; i++) {
            this.wordInput[i].value = this.word[i];
          }
        }
      }
    },
    resetGame() {
      this.randomWord();
    },
    focusInput() {
      this.$refs.input.focus();
    }
  }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #FC466B;
    background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
    background: linear-gradient(to right, #3F5EFB, #FC466B);
}

#container { 
    padding: 20px;
    background-color:rgb(239, 239, 239);
    width: 700px;
    border-radius: 10px;
}


#container h1 {
    font-size: 30px;
    border-bottom: 1px rgb(139, 139, 139)0 solid;
    color: rgb(0, 0, 0);
}

#container #inputs {
    padding: 20px 35px;
    border-bottom: 2px #000000 solid;
    display: flex;
    justify-content: center;
    gap: 10px;
}

#inx {
    width: 45px;
    height: 55px;
    border: 2px #b0b0b0 solid;
    border-radius: 10px;
    font-size: 30px;
    text-align: center;
    color: #1aa5e0;
    background-color: #f3f3f3;
}

#container #detail {
    padding: 20px 35px;
    line-height: 1.8em;
    font-weight: bold;
    color: black;
    
}

button {
    padding: 12px 0;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #EEE;
    background-color: #1f89d9;
    cursor: pointer;
    color: white;
    font-weight: bold;
}

#inp{
    z-index: -10;
    position: absolute;
}

h3 {
    font-size: 15px;
    color: rgb(234, 148, 148);
}
</style>
