const preview = document.getElementById("preview");
const text = document.getElementById("text");
const banner = document.getElementById("banner");
const mode = document.getElementById("dark");
const nav = document.getElementById("navbar");
const output = document.getElementById("output");
const count = document.getElementById("count");
const chars = document.getElementById("chars");
const read = document.getElementById("read");
const summary = document.getElementById("summary");

count.innerHTML = 0;
chars.innerHTML = 0;
read.innerHTML = 0;
text.addEventListener("input", () => {
  count.innerHTML = text.value.split(" ").length;
  chars.innerHTML = text.value.length;
  read.innerHTML = 0.008 * text.value.length;
});

function succes() {
  banner.style.display = "block";
  setTimeout(() => {
    banner.style.display = "none";
  }, 1000);
}
text.addEventListener("input", () => {
  preview.innerHTML = text.value;
});
function handleClear() {
  if (!text.value == "") {
    text.value = preview.innerHTML = "";
    banner.innerHTML = "Your Text Has Been Cleared";
  } else {
    banner.innerHTML = "Enter Text To Clear";
  }
}
function handleuppercase() {
  if (text.value === "") {
    banner.innerHTML = "Enter Some Text To Convert To UpperCase";
  } else if (text.value == text.value.toUpperCase()) {
    banner.innerHTML = "The Text Is Already In UpperCase";
  } else {
    text.value = preview.innerHTML = text.value.toUpperCase();
    banner.innerHTML = "Your Text Has Been Converted To UpperCase";
  }
}
function handlelowercase() {
  if (text.value === "") {
    banner.innerHTML = "Enter Some Text To Convert To LowerCase";
  } else if (text.value == text.value.toLowerCase()) {
    banner.innerHTML = "The Text Is Already In LowerCase";
  } else {
    text.value = preview.innerHTML = text.value.toLowerCase();
    banner.innerHTML = "Your Text Has Been Conerted To LowerCase";
  }
}

function handlespaces() {
  const input = text.value.trim();
  if (!input) {
    banner.textContent = "There is no spaces to remove";
  } else {
    const output = input.replace(/\s+/g, " ");
    if (output === input) {
      banner.textContent = "There are no extra spaces to remove";
    } else {
      text.value = output;
      banner.textContent = "Spaces have been removed";
    }
  }
}
function handleCopy() {
  if (text.value == "") {
    banner.innerHTML = "There Is No Text To Copy";
  } else {
    navigator.clipboard.writeText(text.value);
    banner.innerHTML = "Text Has Copied To Clipboard";
  }
}

function handlemode() {
  if (!nav.classList.contains("bg-dark")) {
    document.body.style.backgroundColor = "#042743";
    text.style.backgroundColor = "grey";
    changeDark();
    output.style.backgroundColor = "grey";
    nav.classList.add("bg-dark");
    nav.classList.add("navbar-dark");
    mode.classList.add("text-white");
  } else {
    nav.classList.add("bg-light");
    document.body.style.backgroundColor = "white";
    text.style.backgroundColor = "white";
    output.style.backgroundColor = "white";
    changeWhite();
    nav.classList.remove("bg-dark");
    nav.classList.remove("navbar-dark");
    mode.classList.remove("text-white");
    mode.classList.add("text-black");
    mode.innerHTML = "Enable Dark Mode";
  }
}
function changeDark() {
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
  }
}
function changeWhite() {
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }
}
