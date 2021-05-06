function kocka() {
    var a = parseFloat(document.getElementById("kocka_a_oldal").value);
    var kocka_a = 6 * (a * a)
    var kocka_v = a * a * a 
    if (isNaN(a)) {
      alert("Nem szám!")
    }
    if (a == 0 || a < 0) {
      alert("Az a oldal nem lehet 0 vagy negatív szám!")
      return
    }
    document.getElementById("kocka_a").value =
    kocka_a.toLocaleString();
  document.getElementById("kocka_v").value =
    kocka_v.toLocaleString();
}