// default
selectedBtn("donate");
normalBtn("history");
let mainBalance = parseFloat(getById("mainBalance").innerText);

// making history button work
function showHistory() {
  selectedBtn("history");
  normalBtn("donate");
  getById("historyPage").classList.remove("hidden");
  getById("donatePage").classList.add("hidden");
}
getById("history").addEventListener("click", showHistory);

// show donate page

function showDonation() {
  selectedBtn("donate");
  normalBtn("history");
  getById("historyPage").classList.add("hidden");
  getById("donatePage").classList.remove("hidden");
}
getById("donate").addEventListener("click", showDonation);

// noakhali donation section
function donateNoakhali() {
  const donate = inputToNum("noakhaliInput");
  getById("noakhaliInput").value = "";
  if (donate === false) {
    return;
  } else if (donate > mainBalance) {
    alert("Invalid input");
  } else {
    getById("givenNoakhali").innerHTML = `${donate} BDT`;
    mainBalance -= donate;
    getById("mainBalance").innerHTML = mainBalance;
    makeHistory(donate, "Taka is Donated for famine-2024 at Feni, Bangladesh");
    // my_modal_1.showModal();
    my_modal_5.showModal();
  }
}

getById("donateNoakhali").addEventListener("click", donateNoakhali);
