document.getElementById("schetsen").addEventListener("click", schetsProfiel);

function schetsProfiel() {
  var naamEl = document.getElementById("naam").value;
  var plaatsEl = document.getElementById("plaats").value;
  document.getElementById("profielSchets").innerHTML = "Hallo, mijn naam is " + naamEl + "<br> en ik woon in " + plaatsEl;
}
