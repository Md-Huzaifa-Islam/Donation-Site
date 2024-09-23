// default
selectedBtn("donate");
normalBtn("history");

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
