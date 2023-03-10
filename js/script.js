// Multipli di 3 "Fizz", multipli di 5 "Buzz", multipli di entrambi "FizzBuzz"
const gridElem = document.querySelector(".grid");
for (let i = 1; i <= 100; i++) {
  let internalTxt;
  let classColor;
  if (i % 3 === 0 && i % 5 === 0) {
    internalTxt = "fizzbuzz";
    console.log(i, internalTxt);
    classColor = internalTxt;
  } else if (i % 3 === 0) {
    internalTxt = "fizz";
    console.log(i, internalTxt);
    classColor = internalTxt;
  } else if (i % 5 === 0) {
    internalTxt = "buzz";
    console.log(i, internalTxt);
    classColor = internalTxt;
  } else {
    internalTxt = i;
    console.log(i, internalTxt);
  }
  gridElem.innerHTML += `<div class="box ${classColor}">${internalTxt}</div>`;
}
