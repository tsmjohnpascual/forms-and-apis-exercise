

// document.getElementById("submit").addEventListener("click", (e) => {

//     const text = document.querySelector("#greeting-form").value

//     text.style = "font-size = 0"

// })

// function myFunction() {
//     document.getElementById("greeting-form").submit();
//   }

function removeForm (e) {
    e.preventDefault()
    const form = e.target
    form.style = "display: none"
    // Selecting the card container
    const container = document.getElementById("cardContainer")
    // Create a card element
    const newCard = document.createElement("div")
    // add some text to the div
    newCard.textContent = form.greet.value
    // add element to the page
    container.appendChild(newCard)
}
  
document.getElementById("greeting-form").addEventListener("submit", removeForm)



