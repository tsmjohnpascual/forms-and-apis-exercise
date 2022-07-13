

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
    // Create a div element
    const newDiv = document.createElement("div")
    // Add a card class to the div
    newDiv.classList.add("card")
    // add element to the page
    container.appendChild(newDiv)
    // Create a img element
    const newImg = document.createElement("img")
    // Add a src class to the image
    newImg.classList.add("src")
    // Add a link to the source of the image
    newImg.src = "https://www.w3schools.com/howto/img_avatar.png"
    // add element to the page
    newDiv.appendChild(newImg)
    // Create a div element
    const newDiv2 = document.createElement("div")
    // Add a card class to the div
    newDiv2.classList.add("container")
    // add element to the page
    newDiv.appendChild(newDiv2)
    // Create a h4 element
    const newhFour = document.createElement("h4")
    // Add greeting to the h4
    newhFour.textContent = form.greet.value
    // add element to the page
    newDiv2.appendChild(newhFour)
    // Create a p element
    const newP = document.createElement("p")
    // Add message to the p
    newP.textContent = form.message.value
    // add element to the page
    newDiv2.appendChild(newP)
}
  
document.getElementById("greeting-form").addEventListener("submit", removeForm)



