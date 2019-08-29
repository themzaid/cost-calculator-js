function calculate() {
  let data = document.getElementById("data").value;
  let minutes = document.getElementById("minutes").value;
  let cost = document.getElementById("cost").value;

  let costPerMinute = 0.4;

  document.getElementById("answer1").innerHTML =
    "Talktime in AED : " + minutes * costPerMinute;
  document.getElementById("answer2").innerHTML =
    "Cost for " +
    data +
    " mb " +
    "Data : " +
    (cost - minutes * costPerMinute) +
    " AED";
  document.getElementById("answer3").innerHTML =
    "Data(mb) per AED : " + data / (cost - minutes * costPerMinute) + " MB";
}
