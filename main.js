var prviBroj = document.getElementById("broj1");
var drugiBroj = document.getElementById("broj2");
var operacija = document.getElementById("operacija");

prviBroj.addEventListener("keyup", racuanje);
drugiBroj.addEventListener("keyup", racuanje);
operacija.addEventListener("change", racuanje);

function racuanje() {

    var vrijednost1 = prviBroj.value;
    var vrijednost2 = drugiBroj.value;
    var vrijednost3 = operacija.value;

    if (vrijednost1 != "" && vrijednost2 != "") {
        var rez = eval(vrijednost1 + vrijednost3 + vrijednost2);
        var rezultat = document.getElementById("rezultat").innerText = rez;

        var btn = document.querySelector("button").classList.remove("none")
    }
}

function obrisi() {
    prviBroj.value = "";
    drugiBroj.value = "";
    operacija.value = "+"
    var rezultat = document.getElementById("rezultat").innerText = "";
    var btn = document.querySelector("button").classList.add("none")

}