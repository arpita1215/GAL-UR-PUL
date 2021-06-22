const btn = document.getElementById("btn")


const data = (e) => {
    e.preventDefault()
    const fname = document.getElementById('fn').value.length;
    const lname = document.getElementById('ln').value.length;
    const email = document.getElementById('email').value.length;
    const pass = document.getElementById('pass').value.length;
    const add = document.getElementById('add').value.length;
    const city = document.getElementById('city').value.length;
    const state = document.getElementById('state').value.length;

    if (fname === 0) {
        alert("Please Enter your first name!")
        e.preventDefault()
    }
    else if (lname === 0) {
        alert("Please Enter your last name!")
        e.preventDefault()
    }
    else if (email === 0) {
        alert("Please Enter your email!")
        e.preventDefault()
    } else if (pass === 0) {
        alert("Please Enter your desired password!")
        e.preventDefault()
    } else if (add === 0) {
        alert("Please Enter your address!")
        e.preventDefault()
    } else if (city === 0) {
        alert("Please Enter your city!")
        e.preventDefault()
    } else if (state === 0) {
        alert("Please Enter your state!")
        e.preventDefault()
    } else {
        alert("You have been successfully Registered!")
        e.preventDefault()
    }

}


btn.addEventListener('click', data)