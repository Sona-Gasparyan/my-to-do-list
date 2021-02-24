function createNewEl() {
    let newLine = document.createElement("li");
    let inputText = document.getElementById("myInput").value;
    let text = document.createTextNode(inputText);
    newLine.appendChild(text);
    if (inputText === "") {
        alert("Write something");
    } else {
        document.getElementById("list-items").appendChild(newLine)
    }
    document.getElementById("myInput").value = "";

    let newSpan = document.createElement("SPAN");
    let newImp = document.createElement("SPAN");
    let closeKey = document.createTextNode("\u00D7");
    let impKey = document.createTextNode("!");
    newImp.className = "important"
    newSpan.className = "close";
    newSpan.appendChild(closeKey);
    newImp.appendChild(impKey);
    newLine.appendChild(newSpan);
    newLine.appendChild(newImp)
    let closed = document.getElementsByClassName("close");
    for (let i = 0; i < closed.length; i++) {
        closed[i].onclick = function() {
            let currentItem = this.parentElement;
            currentItem.style.display = "none";
        }
    }

    let imp = document.getElementsByClassName("important");
    for (let i = 0; i < imp.length; i++) {
        imp[i].onclick = function() {
            let currentItem = this.parentElement;
            currentItem.classList.toggle("important1")
                // currentItem.style.fontSize = "22px";
                // currentItem.style.color = "red";
        }

    }
}

let clickedLi = document.querySelector("ul");
clickedLi.addEventListener("click", function(clicked) {
    if (clicked.target.tagName === "LI") {
        clicked.target.classList.toggle("checked");
    }
})


// let myList = document.getElementsByTagName("LI");
// for (let i = 0; i < myList.length; i++) {
//     let newSpan = document.createElement("SPAN");
//     let closeKey = document.createTextNode("\u00D7");
//     newSpan.className = "close";
//     newSpan.appendChild(closeKey);
//     myList[i].appendChild(newSpan)

// }





let enterKey = document.getElementById("myInput");
enterKey.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("click").click()
    }
}, false)