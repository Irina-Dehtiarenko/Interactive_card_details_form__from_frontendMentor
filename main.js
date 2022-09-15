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

const dataChecking = () => {
  form.onsubmit = () => {
    console.log("coś");
    inputs.forEach((input) => {
      if (input.value === "") {
        console.log("wpisz coś");
      }
    });
    e.preventDefault();
  };
  // completeForm();
};

// inputName.addEventListener("keyup", changeCardholderName);
// inputNumber.addEventListener("keyup", changeCardNumber);
// inputMonth.addEventListener("keyup", changeMonth);
// inputYear.addEventListener("keyup", changeYear);
// inputCvc.addEventListener("keyup", changeCvc);
const addData = (e) => {
  console.log(e.target.value);
  console.log(e.target);
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

buttonActiveForm.addEventListener("click", (e) => {
  dataChecking();
  // e.preventDefault();
});

buttonCompleteForm.addEventListener("click", (e) => {
  e.preventDefault();
  completeForm();
});
