let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    let text = document.querySelector("input").value;

    if (text.trim() !== ""){

        let li = document.createElement("li")
        li.textContent = text

        //adjuntar elemento creado dentro de ul
        li.appendChild(addDeleteBtn()) //li texto <button> li
        ul.appendChild(li)
    }
})

// let text = document.querySelector("input").value
// li.textContent = text


function addDeleteBtn() {
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement;
        ul.removeChild(item)
    })

    return deleteBtn;
}