function getById(id) {
  return document.getElementById(id);
}

function normalBtn(id) {
  getById(id).classList.remove(
    "bg-btn1",
    "text-xl",
    "font-semibold",
    "text-pr",
  );
  getById(id).classList.add(
    "rounded-lg",
    "border",
    "border-solid",
    "border-[#1111114D]",
    "text-xl",
    "font-medium",
    "text-second",
  );
}

function selectedBtn(id) {
  getById(id).classList.remove(
    "rounded-lg",
    "border",
    "border-solid",
    "border-[#1111114D]",
    "text-xl",
    "font-medium",
    "text-second",
  );
  getById(id).classList.add("bg-btn1", "text-xl", "font-semibold", "text-pr");
}

function isNum(value) {
  if (isNaN(value) || value == "") {
    return false;
  } else {
    return true;
  }
}

function inputToNum(id) {
  const value = getById(id).value;
  if (isNum(value)) {
    let temp = parseFloat(value);
    if (temp <= 0) {
      alert("the input amount is invalid");
    } else {
      return temp;
    }
  } else {
    alert("the input amount is invalid");
    return false;
  }
}

function makeHistory(amount, msg) {
  const date = new Date();
  const totalLi = document.createElement("li");
  totalLi.classList.add(
    "space-y-4",
    "rounded-2xl",
    "border",
    "border-solid",
    "border-[#1111111A]",
    "p-8",
  );
  const el1 = document.createElement("p");
  el1.innerText = `${amount} ${msg}`;
  el1.classList.add("text-xl", "font-bold", "text-pr");
  const el2 = document.createElement("p");
  el2.innerText = `${date}`;
  el2.classList.add("font-light", "text-second");
  totalLi.appendChild(el1);
  totalLi.appendChild(el2);
  getById("listOfHistory").appendChild(totalLi);
  console.log(totalLi);
}
