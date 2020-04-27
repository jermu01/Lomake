document.getElementsById("lomake").innerHTML = lomake;

function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
  }
