//En primer lugar establecemos estas constantes que son las formulas de las letras,
//del email y del password.
const letter = /^[A-Z]+$/i;
const email = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
const password = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

function validate() {
  //Establecemos un contador de errores
  let error = 0;
  // Get the input fields. Estos son los input de cada campo que se rellena.

  //Traemos las variables que son los inputs.

  var fName = document.getElementById("fName");
  var fLastN = document.getElementById("fLastN");
  var fEmail = document.getElementById("fEmail");
  var fPassword = document.getElementById("fPassword");
  //no hay validación de estos dos...?
  var fAddress = document.getElementById("fAddress");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements, tomamos los id para mostrar el mensaje de error
  var errorName = document.getElementById("errorName");
  var errorLastN = document.getElementById("errorLastN");
  var errorEmail = document.getElementById("errorEmail");
  var errorPassword = document.getElementById("errorPassword");
  //errores que no se usan?
  var errorAddress = document.getElementById("errorAddress");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email

  //si el campo es menor a 3, si el campo está vacío o si no matchea con la variable letter que establece las letras, entonces consologuea un input erroneo, aumenta el contador de error y demás hace un display del error establecido en el HTML:

  if (fName.lenght < 3 || fName.value === "" || !fName.value.match(letter)) {
    // error++;
    console.log("Invalid Name Input");
    errorName.style.display = "block";
  }

  if (fLastN.value === "" || !fLastN.value.match(letter) || fLastN.lenght < 3) {
    // error++;
    console.log("Invalid LastName input");
    errorLastN.style.display = "block";
  }
  if (fEmail.value == "" || !fEmail.value.match(email) || fEmail.lenght < 3) {
    // error++;
    console.log("Invalid Email input");
    errorEmail.style.display = "block";
  }
  if (
    fPassword.value == "" ||
    !fPassword.value.match(password) ||
    fPassword.lenght < 3
  ) {
    // error++;
    console.log("Invalid Password");
    errorPassword.style.display = "block";
  }
  if (fPhone.value == "" || fPhone.value.match(fName) || fPhone.lenght < 9) {
    console.log("Invalid Phone");
    errorPhone.style.display = "block";
  }
  if (fAddress.value == "" || fAddress.lenght < 3) {
    console.log("Invalid Address");
    errorAddress.style.display = "block";
  }
  // if (error >= 1) {
  //   alert("Error in Form");
  // } else {
  //   alert("Fields completed successfully");
  // }
}
