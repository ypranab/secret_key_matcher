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
  const displayKey = document.getElementById("display-key");
  displayKey.value = key;
});

document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const typedNumbers = document.getElementById("typed-numbers");
  const previousTypedNumber = typedNumbers.value;

  if (previousTypedNumber.length > 5) {
    const keys = document.getElementById("keypad");
    //keys.setAttribute('disabled', true);
    keys.style.pointerEvents = none;
  }

  const newTypedNumber = previousTypedNumber + number;
  typedNumbers.value = newTypedNumber;
});

document
  .getElementById("clear-number")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumbers = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumbers.value;

    if (typeof number == "string") {
      if (number === "C") {
        typedNumbers.value = "";
      } else if (number === "X") {
        const digits = previousTypedNumber.slice(0, -1);
        typedNumbers.value = digits;
      }
    }
  });

document.getElementById("check-key").addEventListener("click", function () {
  const displayKey = document.getElementById("display-key");
  const currentKey = displayKey.value;

  const typedNumbers = document.getElementById("typed-numbers").value;

  const keySuccessMessage = document.getElementById("key-success");
  const keyFailureMessage = document.getElementById("key-failure");
  const keyBlankMessage = document.getElementById("key-blank");

  if (currentKey == "") {
    keySuccessMessage.style.display = "none";
    keyFailureMessage.style.display = "none";
    keyBlankMessage.style.display = "block";
  } else if (typedNumbers === currentKey) {
    keySuccessMessage.style.display = "block";
    keyFailureMessage.style.display = "none";
    keyBlankMessage.style.display = "none";
  } else {
    keyFailureMessage.style.display = "block";
    keySuccessMessage.style.display = "none";
    keyBlankMessage.style.display = "none";
  }
});
