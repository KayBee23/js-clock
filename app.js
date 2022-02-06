let format;
let time = document.querySelector("#hour");
let buttons = document.querySelectorAll(".format button");
let currentTime;
let timeOfDay;
let currentDate = new Date();
let currentDay = currentDate.getDay();

function displayTime() {
  format = time.getAttribute("data-format");
  let currentDate = new Date();
  let h24 = currentDate.getHours();
  let m = currentDate.getMinutes();
  let s = currentDate.getSeconds();
  let h12 = h24 > 12 ? h24 - 12 : h24;
  m = (m < 10 ? "0" : "") + m;
  s = (s < 10 ? "0" : "") + s;
  timeOfDay = h24 < 12 ? "AM" : "PM";

  if (format === "24") {
    currentTime = `${h24}:` + `${m}:` + `${s}`;
    time.innerHTML = `<p> ${currentTime}</p>`;
    buttons[1].style.color="#34ebd8";
    buttons[1].style.textShadow="0 0 20px #34ebd8";
    buttons[0].style.textShadow="none";
    buttons[0].style.color = "rgba(255, 255, 255, 0.1)";
  } else {
    currentTime = `${h12}:` + `${m}:` + `${s} ${timeOfDay}`;
    time.innerHTML = `<p> ${currentTime}</p>`;
    buttons[0].style.color="#34ebd8";
    buttons[0].style.textShadow="0 0 20px #34ebd8";
    buttons[1].style.textShadow="none";
    buttons[1].style.color = "rgba(255, 255, 255, 0.1)";
  }
}

setInterval(displayTime, 1000);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    format = button.getAttribute("data-format");
    time.setAttribute("data-format", format);
  });
});



switch (currentDay) {
  case 1:
    document.getElementsByClassName("monday")[0].style.color = "#34ebd8";
    document.getElementsByClassName("monday")[0].style.textShadow =
      " 0 0 20px #34ebd8";
    break;
  case 2:
    document.getElementsByClassName("tuesday")[0].style.color = "#34ebd8";
    document.getElementsByClassName("tuesday")[0].style.textShadow =
      " 0 0 20px #34ebd8";
    break;
  case 3:
    document.getElementsByClassName("wednesday")[0].style.color = "#34ebd8";
    document.getElementsByClassName("wednesday")[0].style.textShadow =
      " 0 0 20px #34ebd8";
    break;
  case 4:
    document.getElementsByClassName("thursday")[0].style.color = "#34ebd8";
    document.getElementsByClassName("thursday")[0].style.textShadow =
      " 0 0 20px #34ebd8";
    break;
  case 5:
    document.getElementsByClassName("friday")[0].style.color = "#34ebd8";
    document.getElementsByClassName("friday")[0].style.textShadow =
      " 0 0 20px #34ebd8";
    break;
  case 6:
    document.getElementsByClassName("saturday")[0].style.color = "#34ebd8";
    document.getElementsByClassName("saturday")[0].style.textShadow =
      " 0 0 20px #34ebd8";
    break;
  case 0:
    document.getElementsByClassName("sunday")[0].style.color = "#34ebd8";
    document.getElementsByClassName("sunday")[0].style.textShadow =
      " 0 0 20px #34ebd8";
    break;
}

