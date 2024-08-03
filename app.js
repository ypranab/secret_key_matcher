function getKey() {
  const key = generateKey().toString();
  if (key.length === 6) {
    return key;
  } else {
    return getKey();
  }
}

function generateKey() {
  const random = Math.floor(Math.random() * 1000000);
  return random;
}

document.getElementById("generate-key").addEventListener("click", function () {
  const key = getKey();
  const displayKeyField = document.getElementById("display-key");
  displayKeyField.value = key;
});

document
  .getElementById("key-generator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;

    if (previousTypedNumber.length > 5) {
      const calc = document.getElementById("key-generator");
      //calc.setAttribute('disabled', true);
      calc.style.pointerEvents = none;
    }

    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  });

document
  .getElementById("clear-number")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.slice(0, -1);
        typedNumberField.value = digits;
      }
    }
  });

document.getElementById("verify-key").addEventListener("click", function () {
  const displayKeyField = document.getElementById("display-key");
  const currentKey = displayKeyField.value;

  const typedNumberField = document.getElementById("typed-numbers");
  const typedNumber = typedNumberField.value;

  const keySuccessMessage = document.getElementById("key-success");
  const keyFailureMessage = document.getElementById("key-failure");
  const keyBlankMessage = document.getElementById("key-blank");

  if (currentKey == "") {
    keySuccessMessage.style.display = "none";
    keyFailureMessage.style.display = "none";
    keyBlankMessage.style.display = "block";
  } else if (typedNumber === currentKey) {
    keySuccessMessage.style.display = "block";
    keyFailureMessage.style.display = "none";
    keyBlankMessage.style.display = "none";
  } else {
    keyFailureMessage.style.display = "block";
    keySuccessMessage.style.display = "none";
    keyBlankMessage.style.display = "none";
  }
});
