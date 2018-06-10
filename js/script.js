//Groupes de la coupe du monde 2018
var GroupeA = [/*0*/"Russie",/*1*/"Uruguay",/*2*/"Egypte",/*3*/"A. Saoudite"] ;
var GroupeB = [/*0*/"Portugal",/*1*/"Espagne",/*2*/"Iran",/*3*/"Maroc"] ;
var GroupeC = [/*0*/"France",/*1*/"Pérou",/*2*/"Danemark",/*3*/"Australie"] ;
var GroupeD = [/*0*/"Argentine",/*1*/"Croatie",/*2*/"Islande",/*3*/"Nigéria"] ;
var GroupeE = [/*0*/"Brésil",/*1*/"Suisse",/*2*/"Costa Rica",/*3*/"Serbie"] ;
var GroupeF = [/*0*/"Allemagne",/*1*/"Mexique",/*2*/"Suède",/*3*/"Corée du Sud"] ;
var GroupeG = [/*0*/"Belgique",/*1*/"Angleterre",/*2*/"Tunisie",/*3*/"Panama"] ;
var GroupeH = [/*0*/"Pologne",/*1*/"Colombie",/*2*/"Sénégal",/*3*/"Japon"] ;

//alphabet jusque H
var alphabet = ["A","B","C","D","E","F","G","H"];

//Remplissage des groupes de la partie HTML
for(i = 0 ; i < 4 ; i++){
  $('#A' + i).text(GroupeA[i]);
  $('#B' + i).text(GroupeB[i]);
  $('#C' + i).text(GroupeC[i]);
  $('#D' + i).text(GroupeD[i]);
  $('#E' + i).text(GroupeE[i]);
  $('#F' + i).text(GroupeF[i]);
  $('#G' + i).text(GroupeG[i]);
  $('#H' + i).text(GroupeH[i]);
}

// Fonction permettant de générer le tableau des matchs

// Remplissage des matchs du groupe A
$('#matchA1').append(GroupeA[0] + ' - ' + GroupeA[3]);
$('#matchA2').append(GroupeA[2] + ' - ' + GroupeA[1]);
$('#matchA3').append(GroupeA[0] + ' - ' + GroupeA[2]);
$('#matchA4').append(GroupeA[1] + ' - ' + GroupeA[3]);
$('#matchA5').append(GroupeA[0] + ' - ' + GroupeA[1]);
$('#matchA6').append(GroupeA[3] + ' - ' + GroupeA[2]);

// Remplissage des matchs du groupe B
$('#matchB1').append(GroupeB[3] + ' - ' + GroupeB[2]);
$('#matchB2').append(GroupeB[0] + ' - ' + GroupeB[1]);
$('#matchB3').append(GroupeB[0] + ' - ' + GroupeB[3]);
$('#matchB4').append(GroupeB[2] + ' - ' + GroupeB[1]);
$('#matchB5').append(GroupeB[2] + ' - ' + GroupeB[0]);
$('#matchB6').append(GroupeB[1] + ' - ' + GroupeB[3]);


// Remplissage des matchs du groupe C
$('#matchC1').append(GroupeC[0] + ' - ' + GroupeC[3]);
$('#matchC2').append(GroupeC[1] + ' - ' + GroupeC[2]);
$('#matchC3').append(GroupeC[2] + ' - ' + GroupeC[3]);
$('#matchC4').append(GroupeC[0] + ' - ' + GroupeC[1]);
$('#matchC5').append(GroupeC[2] + ' - ' + GroupeC[0]);
$('#matchC6').append(GroupeC[3] + ' - ' + GroupeC[1]);


// Remplissage des matchs du groupe D
$('#matchD1').append(GroupeD[0] + ' - ' + GroupeD[2]);
$('#matchD2').append(GroupeD[1] + ' - ' + GroupeD[3]);
$('#matchD3').append(GroupeD[0] + ' - ' + GroupeD[1]);
$('#matchD4').append(GroupeD[3] + ' - ' + GroupeD[2]);
$('#matchD5').append(GroupeD[2] + ' - ' + GroupeD[1]);
$('#matchD6').append(GroupeD[3] + ' - ' + GroupeD[0]);


$// Remplissage des matchs du groupe E
$('#matchE1').append(GroupeE[2] + ' - ' + GroupeE[3]);
$('#matchE2').append(GroupeE[0] + ' - ' + GroupeE[1]);
$('#matchE3').append(GroupeE[3] + ' - ' + GroupeE[1]);
$('#matchE4').append(GroupeE[0] + ' - ' + GroupeE[2]);
$('#matchE5').append(GroupeE[3] + ' - ' + GroupeE[0]);
$('#matchE6').append(GroupeE[1] + ' - ' + GroupeE[2]);


// Remplissage des matchs du groupe F
$('#matchF1').append(GroupeF[0] + ' - ' + GroupeF[1]);
$('#matchF2').append(GroupeF[2] + ' - ' + GroupeF[3]);
$('#matchF3').append(GroupeF[0] + ' - ' + GroupeF[2]);
$('#matchF4').append(GroupeF[3] + ' - ' + GroupeF[1]);
$('#matchF5').append(GroupeF[3] + ' - ' + GroupeF[0]);
$('#matchF6').append(GroupeF[1] + ' - ' + GroupeF[2]);

// Remplissage des matchs du groupe G
$('#matchG1').append(GroupeG[0] + ' - ' + GroupeG[3]);
$('#matchG2').append(GroupeG[2] + ' - ' + GroupeG[1]);
$('#matchG3').append(GroupeG[0] + ' - ' + GroupeG[2]);
$('#matchG4').append(GroupeG[1] + ' - ' + GroupeG[3]);
$('#matchG5').append(GroupeG[3] + ' - ' + GroupeG[2]);
$('#matchG6').append(GroupeG[1] + ' - ' + GroupeG[0]);

// Remplissage des matchs du groupe H
$('#matchH1').append(GroupeH[1] + ' - ' + GroupeH[3]);
$('#matchH2').append(GroupeH[0] + ' - ' + GroupeH[2]);
$('#matchH3').append(GroupeH[3] + ' - ' + GroupeH[2]);
$('#matchH4').append(GroupeH[0] + ' - ' + GroupeH[1]);
$('#matchH5').append(GroupeH[3] + ' - ' + GroupeH[0]);
$('#matchH6').append(GroupeH[2] + ' - ' + GroupeH[1]);

//Paramètrages des tableaux
$(function() {
  $(".tablesorter").tablesorter({
    sortList: [[8,1],[5,1],[7,1]]
  });
});

// Création tableau groupe A
$('#Atd00').append(GroupeA[0]);
$('#Atd10').append(GroupeA[1]);
$('#Atd20').append(GroupeA[2]);
$('#Atd30').append(GroupeA[3]);

// Création tableau groupe B
$('#Btd00').append(GroupeB[0]);
$('#Btd10').append(GroupeB[1]);
$('#Btd20').append(GroupeB[2]);
$('#Btd30').append(GroupeB[3]);


// Création tableau groupe C
$('#Ctd00').append(GroupeC[0]);
$('#Ctd10').append(GroupeC[1]);
$('#Ctd20').append(GroupeC[2]);
$('#Ctd30').append(GroupeC[3]);


// Création tableau groupe D
$('#Dtd00').append(GroupeD[0]);
$('#Dtd10').append(GroupeD[1]);
$('#Dtd20').append(GroupeD[2]);
$('#Dtd30').append(GroupeD[3]);

// Création tableau groupe E
$('#Etd00').append(GroupeE[0]);
$('#Etd10').append(GroupeE[1]);
$('#Etd20').append(GroupeE[2]);
$('#Etd30').append(GroupeE[3]);


// Création tableau groupe F
$('#Ftd00').append(GroupeF[0]);
$('#Ftd10').append(GroupeF[1]);
$('#Ftd20').append(GroupeF[2]);
$('#Ftd30').append(GroupeF[3]);


// Création tableau groupe G
$('#Gtd00').append(GroupeG[0]);
$('#Gtd10').append(GroupeG[1]);
$('#Gtd20').append(GroupeG[2]);
$('#Gtd30').append(GroupeG[3]);


// Création tableau groupe H
$('#Htd00').append(GroupeH[0]);
$('#Htd10').append(GroupeH[1]);
$('#Htd20').append(GroupeH[2]);
$('#Htd30').append(GroupeH[3]);



$('#AE0M1').on('input',function(e){
     var element = $('#resultatsGroupeA td:eq(5)');
     element.text($(this).val() + element.val());
 });
