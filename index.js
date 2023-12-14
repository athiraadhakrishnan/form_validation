const form = document.getElementById('form')

form.addEventListener('submit' , handlesubmission)

function handlesubmission(event){
    event.preventDefault()

    const firstnameinput = document.getElementById('first name')
    const firstnamevalue = firstnameinput.value

    let allinputscorrect = true

    if(firstnamevalue === ""){
        allinputscorrect = false
        console.log('first name cannot be empty')
    }

    const lastnameinput = document.getElementById('last name')
    const lastnamevalue = lastnameinput.value

    if(lastnamevalue === ""){
        allinputscorrect = false
        console.log("last name cannot be empty")

    }

    const phonenumberinput = document.getElementById('phone')
    const phonenumbervalue = phonenumberinput.value
    
    if(phonenumbervalue === ""){
        allinputscorrect = false
        console.log("phone number cannot be empty")

    }

    if(phonenumbervalue.length !== 10){
        allinputscorrect = false
        console.log("phone number should be 10 characters long")
    }

    const ageinput = document.getElementById('age')
    const agevalue = ageinput.value

    if(agevalue === ""){
        allinputscorrect = false
        console.log("age cannot be empty")

    }

    if(agevalue < 1){
        allinputscorrect = false
        console.log("age should be greater than 0")
    }

    if(agevalue > 120){
        allinputscorrect = false
        console.log("age cannot be greater than 120")
    
    }

    const messageholder = document.getElementById('message-holder')
    const message = document.getElementById('message')

    if(allinputscorrect === true){
        messageholder.classList.remove('hidden')
        messageholder.classList.add('success')
        message.innerHTML = "Login success"
    }

    else{
        messageholder.classList.remove('hidden')
        messageholder.classList.add('failed') 
        message.innerHTML = "Login failed" 
    }
}