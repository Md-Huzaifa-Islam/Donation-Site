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
    const previousBalance = Number(getById("givenNoakhali").innerText);
    getById("givenNoakhali").innerHTML = `${donate + previousBalance}`;
    mainBalance -= donate;
    getById("mainBalance").innerHTML = mainBalance;
    makeHistory(donate, "Taka is Donated for Flood at Noakhali, Bangladesh");
    my_modal_5.showModal();
  }
}

getById("donateNoakhali").addEventListener("click", donateNoakhali);

//feni donation section
function donateFeni() {
  const donate = inputToNum("feniInput");
  getById("feniInput").value = "";
  if (donate === false) {
    return;
  } else if (donate > mainBalance) {
    alert("Invalid input");
  } else {
    const previousBalance = Number(getById("givenFeni").innerText);
    getById("givenFeni").innerHTML = `${donate + previousBalance}`;
    mainBalance -= donate;
    getById("mainBalance").innerHTML = mainBalance;
    makeHistory(donate, "Taka is Donated for famine-2024 at Feni, Bangladesh");
    my_modal_5.showModal();
  }
}

getById("donateFeni").addEventListener("click", donateFeni);

//Quota donation section
function donateQuota() {
  const donate = inputToNum("quotaInput");
  getById("quotaInput").value = "";
  if (donate === false) {
    return;
  } else if (donate > mainBalance) {
    alert("Invalid input");
  } else {
    const previousBalance = Number(getById("givenQuota").innerText);
    getById("givenQuota").innerHTML = `${donate + previousBalance}`;
    mainBalance -= donate;
    getById("mainBalance").innerHTML = mainBalance;
    makeHistory(
      donate,
      "Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh",
    );
    my_modal_5.showModal();
  }
}

getById("donateQuota").addEventListener("click", donateQuota);
