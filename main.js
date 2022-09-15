// Najpierw zrobić STYLE for MOBILE

// moje zadania

// Wypełnij formularz i zobacz aktualizację danych karty w czasie rzeczywistym

// Otrzymuj komunikaty o błędach po przesłaniu formularza, jeśli:
// Każde pole wejściowe jest puste Numer karty,
// data ważności lub pola CVC mają nieprawidłowy format

// Zobacz optymalny układ w zależności od rozmiaru ekranu urządzenia

// Zobacz stan najechania, aktywności i fokusu dla interaktywnych elementów na stronie

// _____________________________________________

//polecenia:
// 1. Aktualizuj dane na karcie, gdy użytkownik wypełnia pola
// 2. Sprawdź poprawność pól formularza po prz.esłaniu formularza
// 3. Jeśli nie ma błędów, wyświetl stan ukończenia
// 4. Zresetuj formularz, gdy użytkownik kliknie „Kontynuuj” w wypełnionym stanie
//  WAŻNE ⚠️: Kiedy tworzysz wersję swojego projektu na żywo, zalecamy nadanie jej losowej nazwy dla adresu URL. Dzieje się tak, ponieważ ponieważ jest to fałszywy formularz karty kredytowej, niektóre przeglądarki otworzą ostrzeżenie, zanim ludzie będą mogli uzyskać dostęp do Twojego projektu. Dlatego najlepiej nadać projektowi nazwę niezwiązaną z kartami kredytowymi, aby przeglądarki nie wyświetlały ostrzeżenia osobom przeglądającym Twój projekt.

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
console.log(form);
const inputs = [...document.querySelectorAll("input")];
// const pError = [...document.querySelectorAll("p.error")];

// const pErrorName = document.querySelector(".error__name");
// const pErrorNumber = document.querySelector(".error__number");
// const pErrorMonth = document.querySelector(".error__month");
// const pErrorYear = document.querySelector(".error__year");
// const pErrorCvc = document.querySelector(".error__cvc");

const divsFormControl = [...document.querySelectorAll(".form-control")];
console.log(inputs);

// alert(
//   "This is an example page for science. Please do not enter correct data in the form fields!"
// );

// //Imię
const changeCardholderName = (e) => {
  cardholderName.textContent = inputName.value;
};

// //numer karty
const changeCardNumber = (e) => {
  cardNumber.textContent = inputNumber.value;

  // cardNumber.textContent = "0000 0000 0000 0000";

  // inputNumber.removeEventListener("keyup", changeCardNumber);
};
const changeMonth = (e) => {
  spanMonth.textContent = inputMonth.value;
};
const changeYear = () => {
  spanYear.textContent = inputYear.value;
};
const changeCvc = () => {
  pCvc.textContent = inputCvc.value;
};
const completeForm = (e) => {
  articleActiveForm.classList.toggle("not-active");
  articleCompleteForm.classList.toggle("not-active");
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const pError = formControl.querySelector("p.error");

  formControl.classList.add("error");
  pError.textContent = message;
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const pError = formControl.querySelector("p.error");

  formControl.classList.remove("error");
  pError.textContent = "";
};

const dataChecking = () => {
  const cardholderNameValue = inputName.value.trim();
  const cardNumberValue = inputNumber.value.trim();
  const monthValue = inputMonth.value.trim();
  const yearValue = inputYear.value.trim();
  const cvcValue = inputCvc.value.trim();

  //check name input

  divsFormControl.forEach((div) => {
    if (div.className === "form-control error") {
      if (cardholderNameValue === "") {
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
        cardholderNameValue.includes("9") ||
        cardholderNameValue.includes(" ")
      ) {
        setErrorFor(inputName, "Wrong format, letters only");
      } else {
        setSuccessFor(inputName);
      }

      //check card number input

      if (cardNumberValue === "") {
        setErrorFor(inputNumber, "Can't be blank");
      } else {
        setSuccessFor(inputNumber);
      }

      //Check Month input

      if (monthValue === "") {
        setErrorFor(inputMonth, "Can't be blank");
      } else {
        if (monthValue * 1 > 12) {
          setErrorFor(inputMonth, "There are olny 12 month in year");
        } else {
          setSuccessFor(inputMonth);
        }
      }

      //Check Year input

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

      //Check CVC input

      if (cvcValue === "") {
        setErrorFor(inputCvc, "Can't be blank");
      } else {
        setSuccessFor(inputCvc);
      }
    } else if (div.className === "form-control") {
      // zły warunek
      console.log("niema klasy error");
      // articleActiveForm.classList.add("not-active");
      // articleCompleteForm.classList.remove("not-active");
    }
  });
};

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

// buttonActiveForm.addEventListener("click", (e) => {
//   dataChecking();
//   // e.preventDefault();
// });

/* 
const completeForm = (e) => {
  articleActiveForm.classList.toggle("not-active");
  articleCompleteForm.classList.toggle("not-active");
};
*/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dataChecking();
  // divsFormControl.forEach((div) => {
  //   if (div.className === "form-control error") {
  //     console.log("Tak");
  //     dataChecking();
  //   } else {
  //     console.log("Nie");
  //     articleActiveForm.classList.toggle("not-active");
  //     articleCompleteForm.classList.toggle("not-active");
  //   }
  // });
});

buttonCompleteForm.addEventListener("click", (e) => {
  e.preventDefault();
  completeForm();
});
