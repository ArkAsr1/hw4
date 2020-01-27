window.onload = loaded;

function loaded() {
    let start = document.getElementById("StartB")
    let change = document.getElementById("ChangeB");
    let items = document.querySelector("#WordList > ul");
    let changedItems = document.querySelector("#WordListChanged > ul");
    const words = [];
    start.addEventListener("click", getWords);
    change.addEventListener("click", flipWords);

    function getWords() {
        for (let i = 0; i < 3; i++) {
            words[i] = prompt("Please enter a word");
            let li = document.createElement("li");
            li.innerHTML = words[i];
            items.appendChild(li);

        }


    }

    function flipWords() {
        for (let i = 0; i < 3; i++) {
            let fWord = flipWord(words[i])
            let li = document.createElement("li");
            li.innerHTML = fWord;
            changedItems.appendChild(li);
        }
        change.style.display = "none";
        document.getElementById("WordList").style.display = "none";
        document.getElementById("WordListChanged").style.display = "block";
    }

    function flipWord(word) {
        return word.split("").map((val, index, array) => array[array.length - 1 - index]).join("");
    }
}