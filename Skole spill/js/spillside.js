// helper som lager area-html'en til mappen
function getArea(inner, romnr, viewnr, areanr, inareanr) {
    return "<area shape='poly' coords='" + inner + "' onclick=\"sjekkType(" + romnr + ", " + viewnr + ", " + areanr + ", " + inareanr + ")\">";
}

//Sjekker type (om det er et bilde eller en dør
function sjekkType(Rnr, Vnr, Anr, inAnr) {
    romnr = Rnr;
    viewnr = Vnr;
    areanr = Anr;
    inareanr = inAnr
    var view = rom[Rnr].view[Vnr].areas[Anr];
    if (view.type == "dør") {
        if (view.laast) {
            document.getElementById('ModalSafe').style.display = "block";
            document.getElementById("kodesynlig").style.display = "block";
        } else {
            last_rom(view.nesterom);
        }
    } else if (view.type == "bilde") {
        document.getElementById('myModal').style.display = "block";
        document.getElementById("detailedinfo").innerHTML = "<img src='" + view.img + "'>";
        nytt_area(viewnr, areanr)
    } else if (view.type == "lys") {
        document.getElementById("hovedbildeytter").style.filter = "brightness(100%)";
    } else if (view.type == "låstdør"){
        if(view.laast){
            document.getElementById('myModal').style.display = "block";
            document.getElementById("detailedinfo").innerHTML = "<p>Døren er låst</p>";
        } else {
            last_rom(view.nesterom);
        }
        
    } else if (view.type == "bildenøkkel"){
        document.getElementById('myModal').style.display = "block";
        document.getElementById("detailedinfo").innerHTML = "<img src='" + view.img + "'>";
        document.getElementById('nøkkel').style.display = "block";
        rom[1].view[1].areas[1].laast = false; 
    } else if (view.type == "spesieldør"){
        if(view.laast){
            document.getElementById('modal').style.display = "block";
            document.getElementById("info").innerHTML = "<img src='" + view.img + "'>";
        } else{
            document.getElementById('hoved').innerHTML = "<p>Du har vunnet</p>";
        }
    }
}

//Laster rom
function last_rom(nr, tilbakeview) {
    var rommet = rom[nr];
    var viewnr;
    if(tilbakeview == undefined){
        viewnr = rommet.startview;
    } else {
        viewnr = tilbakeview;
    }
    romnr = nr;
    
    nytt_view(viewnr)
}

//Laster bildet der du befinner deg + legger til Maps på bildet + gjør tilbake knappen synlig/usynlig 
function nytt_view(view_nr) {
    var rommet = rom[romnr]; // samme rom som før
    var view = rommet.view[view_nr];
    viewnr = view_nr;
    document.getElementById("hovedbilde").src = view.img;
    var resultat = ""
    for (var i = 0; i < view.areas.length; i++) {
        resultat = resultat + getArea(view.areas[i].coords, romnr, viewnr, i)
    }
    document.getElementById("Map").innerHTML = resultat
    if (typeof view.sistrom === 'undefined') {
        document.getElementById("tilbake").style.display = "none";
    } else {
        document.getElementById("tilbake").style.display = "block";
    }
    var lengde = rommet.view.length;

    if (viewnr >= lengde-1) {
        document.getElementById("mothoyre").style.visibility = "hidden";
    } else {
        document.getElementById("mothoyre").style.visibility = "visible";
    }

    if (viewnr <= 0) {
        document.getElementById("motvenstre").style.visibility = "hidden";
    } else {
        document.getElementById("motvenstre").style.visibility = "visible";
    }
}

function nytt_area(view_nr, area_nr) {
    var rommet = rom[romnr]; // samme rom som før
    var view = rommet.view[view_nr];
    viewnr = view_nr;
    document.getElementById("detailedinfo").src = view.areas[area_nr].img;
    var resultat = ""
    for (var i = 0; i < view.areas.length; i++) {
        resultat = resultat + getArea(view.areas[i].coords, romnr, viewnr, i)
    }
    document.getElementById("Map").innerHTML = resultat
}

//Viser detaljbilder etter du trykker på Mapet
function vis(ting) {

    document.getElementById("detalj").style.visibility = "visible";
    document.getElementById("detalj").innerHTML = ting;
}
function skjul() {
    document.getElementById("detalj").style.visibility = "hidden"
}

//Klokke til linje 259
var sek = 1800;

var fortsett = true;

function tell() {
    if (fortsett) {
        sek = sek - 1;
        skrivtid(sek);
        setTimeout(tell, 1000);
        if (sek < 1) {
            fortsett = false;
        }
    }
}

//Startet setup-funksjonen hint og tell
window.onload = startup;

function startup() {
    setTimeout(tell, 1000);
    setupHint();
}


function tallTilTekst(tall) {
    //Sekunder og minutter som tekst
    if (tall < 10) {
        return "0" + tall;
    } else {
        return tall;
    }
    return "" + tall;
}

function skrivtid(tid) {
    var minutter = 0;
    var sekunder = 0;

    //regn ut minutter og sekunder
    minutter = Math.floor(tid / 60);
    sekunder = tid - 60 * minutter;

    document.getElementById("klokke").innerHTML = tallTilTekst(minutter) + " " + ":" + " " + tallTilTekst(sekunder);
    if(Number(tallTilTekst(minutter)) == 0 && Number(tallTilTekst(sekunder)) == 0){
        document.getElementById('hoved').innerHTML = "<img src='./bilder/EFDoor0Apen.jpg'>";
    }
}

//Beveger seg til bildet til høyre
function hoyre() {

    viewnr = viewnr + 1;
    nytt_view(viewnr);
}

//Beveger seg til bildet til venstre
function venstre() {
    viewnr = viewnr - 1;
    nytt_view(viewnr);
}

//For å komme tilbake til sist rom
function tilbake() {
    var view = rom[romnr].view[viewnr];
    last_rom(view.sistrom, view.tilbakeview);
}
//Setter sammen hint info + tid for når de skal viser på alle hintene
function setupHint() {
    for (var i = 0; i < hint.length; i++) {
        setTimeout(skrivHint, hint[i].tid, hint[i].tekst);
    }
}
//Skriver ut hintene på siden
function skrivHint(tekst) {
    document.getElementById("hintTekst").innerHTML = tekst;
    document.getElementById("taVekk").checked = false;
}

function fjernHint(){
    document.getElementById("hintTekst").innerHTML = "&nbsp;";
}

//Kode til linje 359
var resultatTekst = "";

function skriv() {

    document.getElementById("resultat").innerHTML = resultatTekst;

}

function klikk(verdi) {

    if(resultatTekst == "&nbsp;"){
        resultatTekst = verdi;
    } else {
        resultatTekst += verdi;
    }    
    skriv();
}

function kommando(verdi) {

    if (verdi == "C") {
        reset();
    }
}

function reset() {

    resultatTekst = "&nbsp;";
    skriv();

}

function resultat() {
    var area = rom[romnr].view[viewnr].areas[areanr];
    if (Number(resultatTekst) == Number(area.kode)) {
        rom[romnr].view[viewnr].img = area.apendoor;
        last_rom(area.nesterom);
        area.laast = false;
        document.getElementById('ModalSafe').style.display = "none";

    }
    else {
        alert("FEIL");
    }
    reset();
}


