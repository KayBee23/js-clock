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
    buttons[1].style.color = "#34ebd8";
    buttons[1].style.textShadow = "0 0 20px #34ebd8";
    buttons[0].style.textShadow = "none";
    buttons[0].style.color = "rgba(255, 255, 255, 0.1)";
  } else {
    currentTime = `${h12}:` + `${m}:` + `${s} ${timeOfDay}`;
    time.innerHTML = `<p> ${currentTime}</p>`;
    buttons[0].style.color = "#34ebd8";
    buttons[0].style.textShadow = "0 0 20px #34ebd8";
    buttons[1].style.textShadow = "none";
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



let monday = document.querySelector("#monday");
let tuesday = document.querySelector("#tuesday");
let wednesday = document.querySelector("#wednesday");
let thursday = document.querySelector("#thursday");
let friday = document.querySelector("#friday");
let saturday = document.querySelector("#saturday");
let sunday = document.querySelector("#sunday");
let mediaQuery = window.matchMedia("(min-width: 1401px)");


    if (mediaQuery.matches) {
      switch (currentDay) {
        case 1:
          monday.style.color = "#34ebd8";
          monday.style.textShadow = " 0 0 20px #34ebd8";
          monday.classList.remove("currentDay");
          break;
        case 2:
          tuesday.style.color = "#34ebd8";
          tuesday.style.textShadow = " 0 0 20px #34ebd8";
          tuesday.classList.remove("currentDay");
          break;
        case 3:
          wednesday.style.color = "#34ebd8";
          wednesday.style.textShadow = " 0 0 20px #34ebd8";
          wednesday.classList.remove("currentDay");
          break;
        case 4:
          thursday.style.color = "#34ebd8";
          thursday.style.textShadow = " 0 0 20px #34ebd8";
          thursday.classList.remove("currentDay");
          break;
        case 5:
          friday.style.color = "#34ebd8";
          friday.style.textShadow = " 0 0 20px #34ebd8";
          friday.classList.remove("currentDay");
          break;
        case 6:
          saturday.style.color = "#34ebd8";
          saturday.style.textShadow = " 0 0 20px #34ebd8";
          saturday.classList.remove("currentDay");
          break;
        case 0:
          sunday.style.color = "#34ebd8";
          sunday.style.textShadow = " 0 0 20px #34ebd8";
          sunday.classList.remove("currentDay");
          break;
      }
    }


     mediaQuery = window.matchMedia("(max-width: 1400px)");
    if (mediaQuery.matches) {
      switch (currentDay) {
        case 1:
          monday.style.color = "#34ebd8";
          monday.style.textShadow = " 0 0 20px #34ebd8";
          monday.classList.add("currentDay");
          break;
        case 2:
          tuesday.style.color = "#34ebd8";
          tuesday.style.textShadow = " 0 0 20px #34ebd8";
          tuesday.classList.add("currentDay");
          break;
        case 3:
          wednesday.style.color = "#34ebd8";
          wednesday.style.textShadow = " 0 0 20px #34ebd8";
          wednesday.classList.add("currentDay");
          break;
        case 4:
          thursday.style.color = "#34ebd8";
          thursday.style.textShadow = " 0 0 20px #34ebd8";
          thursday.classList.add("currentDay");
          break;
        case 5:
          friday.style.color = "#34ebd8";
          friday.style.textShadow = " 0 0 20px #34ebd8";
          friday.classList.add("currentDay");
          break;
        case 6:
          saturday.style.color = "#34ebd8";
          saturday.style.textShadow = " 0 0 20px #34ebd8";
          saturday.classList.add("currentDay");
          break;
        case 0:
          sunday.style.color = "#34ebd8";
          sunday.style.textShadow = " 0 0 20px #34ebd8";
          sunday.classList.add("currentDay");
          break;
      }
    }
