function getKey() {
  const key = generateKey();
  const keyString = key + "";
  if (keyString.length === 6) {
    return key;
  } else {
    return getKey();
  }
}

function generateKey() {
  const random = Math.round(Math.random() * 1000000);
  return random;
}

document.getElementById("generate-key").addEventListener("click", function () {
  const key = getKey();
  // display Key
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
    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.slice(0, -1);
        typedNumberField.value = digits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNumberField.value = newTypedNumber;
    }
  });

document.getElementById("verify-key").addEventListener("click", function () {
  const displayKeyField = document.getElementById("display-key");
  const currentKey = displayKeyField.value;

  const typedNumberField = document.getElementById("typed-numbers");
  const typedNumber = typedNumberField.value;

  const keySuccessMessage = document.getElementById("key-success");
  const keyFailureMessage = document.getElementById("key-failure");

  if (typedNumber === currentKey) {
    keySuccessMessage.style.display = "block";
    keyFailureMessage.style.display = "none";
  } else {
    keyFailureMessage.style.display = "block";
    keySuccessMessage.style.display = "none";
  }
});
