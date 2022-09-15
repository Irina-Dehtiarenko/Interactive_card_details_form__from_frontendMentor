const inputName = document.querySelector(".input-name");
const cardholderName = document.querySelector("p.cardholder-name");

const inputNumber = document.querySelector(".input-card-number");
const cardNumber = document.querySelector("p.card-number");

const inputMonth = document.querySelector(".input-month");
const spanMonth = document.querySelector(".month");

const inputYear = document.querySelector(".input-year");
const spanYear = document.querySelector(".year");

const inputCvc = document.querySelector(".input-cvc");
const pCvc = document.querySelector("p.cvc");

const buttonActiveForm = document.querySelector(".active-form form button");
const buttonCompleteForm = document.querySelector(".complete-form button");
const articleActiveForm = document.querySelector(".active-form");
const articleCompleteForm = document.querySelector(".complete-form ");
const form = document.querySelector("form");
const inputs = [...document.querySelectorAll("input")];
const divsFormControl = [...document.querySelectorAll(".form-control")];

alert(
  "This is an example page for science. Please do not enter correct data in the form fields!"
);

// Cardholder name
const changeCardholderName = (e) => {
  cardholderName.textContent = inputName.value;
};

// card number
const changeCardNumber = (e) => {
  cardNumber.textContent = inputNumber.value;
};
//expiration date
const changeMonth = (e) => {
  spanMonth.textContent = inputMonth.value;
};
const changeYear = () => {
  spanYear.textContent = inputYear.value;
};

//CVC code
const changeCvc = () => {
  pCvc.textContent = inputCvc.value;
};

// the error function
const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const pError = formControl.querySelector("p.error");

  formControl.classList.add("error");
  pError.textContent = message;
};

//the success function
const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const pError = formControl.querySelector("p.error");

  formControl.classList.remove("error");
  pError.textContent = "";
};

// Data checking
const dataChecking = () => {
  const cardholderNameValue = inputName.value.trim();
  const cardNumberValue = inputNumber.value.trim();
  const monthValue = inputMonth.value.trim();
  const yearValue = inputYear.value.trim();
  const cvcValue = inputCvc.value.trim();

  if (
    divsFormControl[0].className.includes("form-control error") ||
    divsFormControl[1].className.includes("form-control error") ||
    divsFormControl[2].className.includes("form-control error") ||
    divsFormControl[3].className.includes("form-control error")
    // || divsFormControl[4].className.includes("form-control error")
  ) {
    //checking the name input

    if (cardholderNameValue === "") {
      // inputName.style.borderColor = "red";
      setErrorFor(inputName, "Can't be blank");
    } else if (
      cardholderNameValue.includes("0") ||
      cardholderNameValue.includes("1") ||
      cardholderNameValue.includes("2") ||
      cardholderNameValue.includes("3") ||
      cardholderNameValue.includes("4") ||
      cardholderNameValue.includes("5") ||
      cardholderNameValue.includes("6") ||
      cardholderNameValue.includes("7") ||
      cardholderNameValue.includes("8") ||
      cardholderNameValue.includes("9")
    ) {
      setErrorFor(inputName, "Wrong format, letters only");
      inputName.style.borderColor = "red";
    } else {
      inputName.style.borderColor = "hsl(279, 6%, 84%)";
      setSuccessFor(inputName);
    }

    //checking the card number input

    if (cardNumberValue === "") {
      setErrorFor(inputNumber, "Can't be blank");
    } else {
      setSuccessFor(inputNumber);
    }

    //Checking the Month input

    if (monthValue === "") {
      setErrorFor(inputMonth, "Can't be blank");
    } else {
      if (monthValue * 1 > 12) {
        setErrorFor(inputMonth, "There are olny 12 month in year");
      } else {
        setSuccessFor(inputMonth);
      }
    }

    //Checking the Year input

    if (yearValue === "") {
      setErrorFor(inputYear, "Can't be blank");
      // inputYear.parentElement.classList.add("error");
    } else {
      if (yearValue * 1 < 22 || yearValue * 1 > 50) {
        setErrorFor(inputYear, "Your card is not valid");
      } else {
        setSuccessFor(inputYear);
      }
    }

    //Checking the CVC input

    if (cvcValue === "") {
      setErrorFor(inputCvc, "Can't be blank");
    } else {
      setSuccessFor(inputCvc);
    }
  } else {
    //if there is no ' error' class on inputs
    articleActiveForm.classList.add("not-active");
    articleCompleteForm.classList.remove("not-active");
  }
};

// the add data function
const addData = (e) => {
  if (e.target.className === "input-name") {
    changeCardholderName();
  } else if (e.target.className === "input-card-number") {
    changeCardNumber();
  } else if (e.target.className === "input-month") {
    changeMonth();
  } else if (e.target.className === "input-year") {
    changeYear();
  } else if (e.target.className === "input-cvc") {
    changeCvc();
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", addData);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dataChecking();
});

buttonCompleteForm.addEventListener("click", () => {
  window.location.reload(true);
});
