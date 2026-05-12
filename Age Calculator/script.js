let yearBox = document.querySelector(".year");
let monthBox = document.querySelector(".month");
let dayBox = document.querySelector(".day");
 let input = document.getElementById("dob");
 

function calculateAge() {
     if (input.value === "") {
    alert("select Data First");
    return;
  }
  let date = input.value;
 
  let birth = new Date(date);
  let today = new Date();
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth;
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  console.log(days, months, years);
  yearBox.innerHTML = years;
  monthBox.innerHTML = months;
  dayBox.innerHTML = days;
}
function reset() {
  input.value = "";
  yearBox.innerHTML = "";
  monthBox.innerHTML = "";
  dayBox.innerHTML = "";
}
