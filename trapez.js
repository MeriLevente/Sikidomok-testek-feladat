function trapez() {
    var a_oldal = parseFloat(document.getElementById("trapez_a").value);
    var b_oldal = parseFloat(document.getElementById("trapez_b").value);
    var c_oldal = parseFloat(document.getElementById("trapez_c").value);
    var d_oldal = parseFloat(document.getElementById("trapez_d").value);
    var magassag = parseFloat(document.getElementById("trapez_magassag").value);
    var trapez_k = a_oldal + b_oldal + c_oldal + d_oldal
    if (isNaN(a_oldal)){
        alert("Az a oldal nem szám!")
      }
      if (isNaN(b_oldal)){
        alert("A b oldal nem szám!")
      }
      if (isNaN(c_oldal)){
        alert("A c oldal nem szám!")
      }
      if (isNaN(d_oldal)){
        alert("A d nem szám!")
      }
      if (isNaN(magassag)){
        alert("A magasság nem szám!")
      }  
      if (a_oldal == 0 || a_oldal < 0) {
        alert("Az a oldal nem lehet 0 vagy negatív szám!")
        return
      }
      if (b_oldal == 0 || b_oldal < 0) {
        alert("Az b oldal nem lehet 0 vagy negatív szám!")
        return
      }
      if (c_oldal == 0 || c_oldal < 0) {
        alert("Az c oldal nem lehet 0 vagy negatív szám!")
        return
      }
      if (d_oldal == 0 || d_oldal < 0) {
        alert("Az d oldal nem lehet 0 vagy negatív szám!")
        return
      }
      if (magassag == 0 || magassag < 0) {
        alert("Az magasság nem lehet 0 vagy negatív szám!")
        return
      }
    document.getElementById('trapez_k').value = trapez_k.toLocaleString() + " cm";
    var trapez_t = ((a_oldal + c_oldal)/2) * magassag
    document.getElementById('trapez_t').value = trapez_t.toLocaleString() + " cm";
}