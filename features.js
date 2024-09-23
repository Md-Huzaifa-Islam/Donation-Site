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
