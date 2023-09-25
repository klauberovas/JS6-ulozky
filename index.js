// VÝPLATA
// Spočítejte si svoji měsíční výplatu pomocí funkcí.
// Vytvořte funkci salary se třemi parametry
// wage - hrubá mzda v korunách za hodinu
// hours - kolik hodin denně průměrně pracujete
// days - kolik dní v měsící průměrně pracujete
// Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.
// Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.
// Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.

// SPOČTENÍ VÝPLATY
// const salary = (wage, hours, days) => {
//   return wage * hours * days;
// };
// // SPOČTENÍ VÝPLATY PO ZDANĚNÍ
// const taxed = (salary, tax) => {
//   return Math.ceil(salary - salary * (tax / 100));
// };

// document.body.innerHTML += `<p>Výplata po zdanění ${taxed(
//   salary(200, 8, 22),
//   15,
// )}</p>`;

// //-------------------------------------------

// KALKULAČKA
// Napište funkci, která spočítá výsledek výpočtu.
// Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

// Napište funkci calculate se třemi parametry number1, operation a number2, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.

// const calculate = (number1, operation, number2) => {
//   if (operation === '+') {
//     return number1 + number2;
//   }
//   if (operation === '-') {
//     return number1 - number2;
//   }
//   if (operation === '*') {
//     return number1 * number2;
//   }
//   return number1 / number2;
// };

// document.body.innerHTML += `2 + 3 = ${calculate(2, '+', 3)}<br>`; // vypíše výsledek 5
// document.body.innerHTML += `3 * 7 = ${calculate(3, '*', 7)}<br>`; // vypíše výsledek 21
// document.body.innerHTML += `10 / 4 = ${calculate(10, '+', 4)}<br>`; // vypíše výsledek 2.5
// document.body.innerHTML += `10 - 4 = ${calculate(10, '-', 4)}<br>`; // vypíše výsledek 6

// //------------------------------------------------
// VÝPLŇOŘEZ
// Napište funkci, která ořízne nebo prodlouží řetězec.
// Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
// Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
// Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
// Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
// const fillcut = (str, len) => {
//   if (str.length > len) {
//     return str.slice(0, len);
//   }
//   if (str.length < len) {
//     return str.padStart(len, '.');
//   }
//   return str;
// };

// document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
// document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
// document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“

// //--------------------------------------------
// PŘESTUPNÝ ROK JAKO FUNKCE
// Napište funkci, která zjistí, zda je zadaný rok přestupný.
// Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
// const isLeapYear = (year) => {
//   if (
//     (year % 4 === 0 && year % 100 !== 0) ||
//     (year % 400 === 0 && year % 100 === 0)
//   ) {
//     return true;
//   }
//   return false;
// };

// document.body.innerHTML += isLeapYear(2024) + '<br>';
// document.body.innerHTML += isLeapYear(1900) + '<br>'; //není
// document.body.innerHTML += isLeapYear(1700) + '<br>'; //není
// document.body.innerHTML += isLeapYear(1988) + '<br>';
