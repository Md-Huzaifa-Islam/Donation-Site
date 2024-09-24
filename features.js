function getById(id) {
  return document.getElementById(id);
}

function normalBtn(id) {
  getById(id).classList.remove(
    "bg-btn1",
    "md:text-xl",
    "text-lg",
    "font-medium",
    "md:font-semibold",
    "text-pr",
  );
  getById(id).classList.add(
    "rounded-lg",
    "border",
    "border-solid",
    "border-[#1111114D]",
    "md:text-xl",
    "text-lg",
    "md:font-medium",
    "font-normal",
    "text-second",
  );
}

function selectedBtn(id) {
  getById(id).classList.remove(
    "rounded-lg",
    "border",
    "border-solid",
    "border-[#1111114D]",
    "md:text-xl",
    "text-lg",
    "md:font-medium",
    "font-normal",
    "text-second",
  );
  getById(id).classList.add(
    "bg-btn1",
    "md:text-xl",
    "text-lg",
    "font-medium",
    "md:font-semibold",
    "text-pr",
  );
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
      alert("Invalid Donation Amount");
      return false;
    } else {
      return temp;
    }
  } else {
    alert("Invalid Donation Amount");
    return false;
  }
}

function makeHistory(amount, msg) {
  const date = new Date();
  const totalLi = document.createElement("li");
  totalLi.classList.add(
    "md:space-y-4",
    "space-y-2",
    "rounded-2xl",
    "border",
    "border-solid",
    "border-[#1111111A]",
    "md:p-8",
    "p-5",
  );
  const el1 = document.createElement("p");
  el1.innerText = `${amount} ${msg}`;
  el1.classList.add(
    "md:text-xl",
    "md:font-bold",
    "text-pr",
    "text-lg",
    "font-semibold",
  );
  const el2 = document.createElement("p");
  el2.innerText = `Date: ${date}`;
  el2.classList.add("font-light", "text-second", "text-sm", "md:text-base");
  totalLi.appendChild(el1);
  totalLi.appendChild(el2);
  getById("listOfHistory").appendChild(totalLi);
}
