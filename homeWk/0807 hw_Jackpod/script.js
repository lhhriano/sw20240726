function Box() {
    this.elementUl = document.createElement("ul");
    this.intervalRef = null;
}

Box.prototype.init = function() {
    this.cellBox = document.createElement("div");
    const emojis = ["🍒", "🍋", "🍊", "🍉", "🍇"]; // 이모티콘 배열
    for (let i = 0; i < 10; i++) {
        this.elementLi = document.createElement("li");
        this.elementLi.innerText = emojis[i % emojis.length]; // 이모티콘을 순서대로 추가
        this.elementUl.appendChild(this.elementLi);
    }
    this.cellBox.appendChild(this.elementUl);
    this.cellBox.setAttribute("class", "cellBox");
    return this.cellBox;
}

Box.prototype.start = function(speed) {
    if (this.intervalRef) {
        clearInterval(this.intervalRef);
    }
    this.y = 0;
    this.intervalRef = setInterval(() => {
        this.y -= 10;
        this.elementUl.style.top = this.y + "px";
        if (this.y <= -900) {
            this.y = 0;
        }
    }, speed);
}

Box.prototype.stop = function() {
    if (this.intervalRef) {
        clearInterval(this.intervalRef);
        this.intervalRef = null;
        this.elementUl.style.top = Math.floor(this.y / 100) * 100 + "px";
    }
}

const divBox = document.querySelector("#box");
const boxArr = [];
for (let i = 0; i < 9; i++) {
    const box = new Box();
    const newBox = box.init();
    boxArr.push(box);
    divBox.appendChild(newBox);
}

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");

startBtn.addEventListener('click', function() {
    boxArr.forEach(box => {
        box.start(Math.floor(5 + Math.random() * 20));
    });
});

stopBtn.addEventListener('click', function() {
    boxArr.forEach(box => {
        box.stop();
    });
});
