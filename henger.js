function henger() {
  var sugar = parseFloat(document.getElementById("sugar").value);
  var magassag = parseFloat(document.getElementById("henger_magassag").value);
  if (isNaN(sugar) || isNaN(magassag)) {
    alert("Nem szám!");
  }
  if (sugar == 0 || sugar < 0) {
    alert("A henger sugara nem lehet 0 vagy negatív szám!");
    return;
  }
  if (magassag == 0 || magassag < 0) {
    alert("A magasság nem lehet 0 vagy negatív szám!");
    return;
  }
  var henger_a = 2 * sugar * Math.PI * (sugar * magassag);
  var henger_v = sugar * sugar * Math.PI * magassag;
  document.getElementById("henger_a").value = henger_a.toLocaleString() + " cm";
  document.getElementById("henger_v").value = henger_v.toLocaleString() + " cm";
}
