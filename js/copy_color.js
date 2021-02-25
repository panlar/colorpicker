const $btnHEX = d.getElementById("btn-hex"),
  $btnRGB = d.getElementById("btn-rgb"),
  $alert = d.getElementById("alert"),
  $nameColorAlert = d.getElementById("name-color-alert");
  ls = localStorage;

if (ls.getItem("format") === null) {
  ls.setItem("format", "rgb");
}

if (ls.getItem("format") === "rgb") {
  $btnRGB.classList.add("active");
  $btnHEX.classList.remove("active");
}

if (ls.getItem("format") === "hex") {
  $btnHEX.classList.add("active");
  $btnRGB.classList.remove("active");
}

d.addEventListener("click", (e) => {
  let origen = e.target;

  if (origen === $btnHEX) {
    $btnHEX.classList.add("active");
    $btnRGB.classList.remove("active");
    ls.setItem("format", "hex");
  }

  if (origen === $btnRGB) {
    $btnRGB.classList.add("active");
    $btnHEX.classList.remove("active");
    ls.setItem("format", "rgb");
  }

  if (origen.matches(".color") || origen.matches(".color *")) {
    let color;

    if (ls.getItem("format") === "rgb") {
      if (origen.matches(".color span")) {
        color = origen.parentElement.style.backgroundColor;
      } else {
        color = origen.style.backgroundColor;
      }
    } else {
      if (origen.matches(".color span")) {
        color = origen.parentElement.getAttribute("data-color");
      } else {
        color = origen.getAttribute("data-color");
      }
    }

    navigator.clipboard.writeText(color);
    $nameColorAlert.innerText = color;
    $alert.style.backgroundColor = color;
    $alert.classList.add("active");
    setTimeout(() => {
      $alert.classList.remove("active");
    }, 1050);
  }
});
