let inputs = document.querySelectorAll("form input")
let btn = document.querySelector("form")




btn.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add("error")
        } else {
            input.parentElement.classList.remove("error")
            if (input.type === "email") {
                validEmail(input.value)
            }
        }
    })
})