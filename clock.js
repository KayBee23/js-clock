usTime[0].addEventListener("click", function () {
  let timeOfDay = (h12 < 12)? 'AM' : 'PM';
  let currentTime = `${h12}:` + `${m}:` + `${s}`+ `${timeOfDay}`;
  time.innerHTML = `<p> ${currentTime}</p>`;
  usTime[0].style.color = "#34ebd8";
  euTime[0].style.color = "rgba(255, 255, 255, 0.1)";
});

