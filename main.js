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
alert(
  "To jest strona przykładowa, na potrzeby nauki. Uprzejmie proszę nie wpisywać poprawnych danych w pola formularza!"
);
//Imię
const changeCardholderName = (e) => {
  cardholderName.textContent = inputName.value;
};

//numer karty
const changeCardNumber = (e) => {
  if (inputNumber.value.length < 20) {
    cardNumber.textContent = inputNumber.value;

    console.log(inputNumber.value.length);
  } else {
    // Czasowe rozwiązanie, dalej będzie funkcja po sprawdzaniu poprawności wpisanych danych po przesyłaniu inputa(jeśli wszysko ok, to na article.active form: dispay - none, )
    alert(
      "the maximum length of the card number - 19 characters (including 3 spaces), please enter it correctly, according to the example "
    );
    cardNumber.textContent = "0000 0000 0000 0000";
    return (inputNumber.value = "");
    // inputNumber.removeEventListener("keyup", changeCardNumber);
  }
};
const changeMonth = () => {
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
  completeForm();
};

inputName.addEventListener("keyup", changeCardholderName);
inputNumber.addEventListener("keyup", changeCardNumber);
inputMonth.addEventListener("keyup", changeMonth);
inputYear.addEventListener("keyup", changeYear);
inputCvc.addEventListener("keyup", changeCvc);
buttonActiveForm.addEventListener("click", (e) => {
  e.preventDefault();

  dataChecking();
});
buttonCompleteForm.addEventListener("click", (e) => {
  e.preventDefault();
  completeForm();
});
