const API_URL = "https://open-long-puck.glitch.me/"
const form = document.getElementById("form")
const brandInput = document.getElementById("brand")
const modelInput = document.getElementById("model")

const submitData = (e) => {
    e.preventDefault()

    if(!brandInput.value || !modelInput.value) return alert("Please fill the fields")
    const newCar = {
        brand: brandInput.value,
        model: modelInput.value
    }
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(newCar)
        })

        .then(resp => resp.json())
        .then(data =>  {
            console.log(data) 

            // Clear input
            brandInput.value = ""
            modelInput.value = ""

            alert("Data sent successfully :)")
        })
        .catch(e => alert(e.message))
    }
    
form.addEventListener("submit", submitData)