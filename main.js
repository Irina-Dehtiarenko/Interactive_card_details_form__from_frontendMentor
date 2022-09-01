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
const spanMonth = document.querySelector(".month");
console.log(spanMonth);

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
    alert(
      "the maximum length of the card number - 19 characters (including 3 spaces), please enter it correctly, according to the example "
    );
    cardNumber.textContent = "0000 0000 0000 0000";
    return (inputNumber.value = "");
    // inputNumber.removeEventListener("keyup", changeCardNumber);
  }
};

inputName.addEventListener("keyup", changeCardholderName);
inputNumber.addEventListener("keyup", changeCardNumber);
