let dateWrapper = document.querySelector(".date");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function countTime() {
  let newDate = new Date();
  let month = newDate.getMonth();
  let day = newDate.getDay();
  let year = newDate.getFullYear();
  let ampm =  newDate.getHours() >=12 ? 'pm' : 'am'
  let time = `${newDate.toLocaleTimeString()}`;
  dateWrapper.innerHTML = `${monthNames[month]} ${day +12} ${year}, ${time} ${ampm}`;
}

setInterval(countTime, 1000);
