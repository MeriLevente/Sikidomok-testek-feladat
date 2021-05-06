function paralelogramma() {
  var a_oldal = parseFloat(document.getElementById("a_oldal").value);
  var b_oldal = parseFloat(document.getElementById("b_oldal").value);
  var ma = parseFloat(document.getElementById("ma").value);
  var mb = parseFloat(document.getElementById("mb").value);
  if (a_oldal * ma != b_oldal * mb) {
    alert(
      "A paralelogramma a oldalának és a-hoz tartozó magasság szorzatának egyenlőnek kell lenni a b oldal és hozzá tartozó magasság szorzatával!"
    );
  }
  if (isNaN(a_oldal) || isNaN(b_oldal) || isNaN(ma) || isNaN(mb)){
    alert("Nem szám!")
  }
  if (a_oldal == 0 || a_oldal < 0) {
    alert("Az a oldal nem lehet 0 vagy negatív szám!")
    return
  }
  if (b_oldal == 0 || b_oldal < 0) {
    alert("A b oldal nem lehet 0 vagy negatív szám!")
    return
  }
  if (ma == 0 || ma < 0) {
    alert("Az a-hoz tartozó magasság nem lehet 0 vagy negatív szám!")
    return
  }
  if (mb == 0 || mb < 0) {
    alert("A b-hez tartozó magasság nem lehet 0 vagy negatív szám!")
    return
  }
  var paralelogramma_k = (a_oldal + b_oldal) * 2;
  document.getElementById("paralelogramma_k").value =
    paralelogramma_k.toLocaleString() + "";
  var paralelogramma_t = a_oldal * ma || b_oldal * mb;
  document.getElementById("par_t").value =
    paralelogramma_t.toLocaleString() + "";
}
