const dateEl = document.querySelector(".date");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function time() {
  const time = new Date();
  const day = time.getDate();
  const year = time.getFullYear();
  const month = time.getMonth();
  const hh = time.getHours();
  const mm = time.getMinutes();
  const ss = time.getSeconds();

  dateEl.innerHTML = `${year} - ${months[month]} - ${
    day > 9 ? day : "0" + day
  } `;
  hoursEl.innerHTML = hh > 9 ? hh + ":" : "0" + hh + ":";
  minutesEl.innerHTML = mm > 9 ? mm + ":" : "0" + mm + ":";
  secondsEl.innerHTML = ss > 9 ? ss : "0" + ss;
}

setInterval(time, 1000);
