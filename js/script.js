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

/*for(i=1 ; i<7 ; i++)
{
  window['matchA'+i].appendTo($matchsGA);
}
*/

// Remplissage des matchs du groupe B
var $matchsGB = $('#matchsGroupeB');
var $matchB1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[3] + ' - ' + GroupeB[2] + ' </div><div class="col-md-4 col-xs-6"><input id="BE3M1" type="number">  - <input id="BE2M1" type="number"></div></div>');
var $matchB2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[0] + ' - ' + GroupeB[1] + ' </div><div class="col-md-4 col-xs-6"><input id="BE0M1" type="number">  - <input id="BE1M1" type="number"></div></div>');
var $matchB3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[0] + ' - ' + GroupeB[3] + ' </div><div class="col-md-4 col-xs-6"><input id="BE0M2" type="number">  - <input id="BE3M2" type="number"></div></div>');
var $matchB4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[2] + ' - ' + GroupeB[1] + ' </div><div class="col-md-4 col-xs-6"><input id="BE2M2" type="number">  - <input id="BE1M2" type="number"></div></div>');
var $matchB5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[2] + ' - ' + GroupeB[0] + ' </div><div class="col-md-4 col-xs-6"><input id="BE2M3" type="number">  - <input id="BE0M3" type="number"></div></div>');
var $matchB6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[1] + ' - ' + GroupeB[3] + ' </div><div class="col-md-4 col-xs-6"><input id="BE1M3" type="number">  - <input id="BE3M3" type="number"></div></div>');
$matchB1.appendTo($matchsGB);
$matchB2.appendTo($matchsGB);
$matchB3.appendTo($matchsGB);
$matchB4.appendTo($matchsGB);
$matchB5.appendTo($matchsGB);
$matchB6.appendTo($matchsGB);

// Remplissage des matchs du groupe C
var $matchsGC = $('#matchsGroupeC');
var $matchC1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[0] + ' - ' + GroupeC[3] + ' </div><div class="col-md-4 col-xs-6"><input id="CE0M1" type="number">  - <input id="CE3M1" type="number"></div></div>');
var $matchC2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[1] + ' - ' + GroupeC[2] + ' </div><div class="col-md-4 col-xs-6"><input id="CE1M1" type="number">  - <input id="CE2M1" type="number"></div></div>');
var $matchC3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[2] + ' - ' + GroupeC[3] + ' </div><div class="col-md-4 col-xs-6"><input id="CE2M2" type="number">  - <input id="CE3M2" type="number"></div></div>');
var $matchC4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[0] + ' - ' + GroupeC[1] + ' </div><div class="col-md-4 col-xs-6"><input id="CE0M2" type="number">  - <input id="CE1M2" type="number"></div></div>');
var $matchC5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[2] + ' - ' + GroupeC[0] + ' </div><div class="col-md-4 col-xs-6"><input id="CE2M3" type="number">  - <input id="CE0M3" type="number"></div></div>');
var $matchC6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[3] + ' - ' + GroupeC[1] + ' </div><div class="col-md-4 col-xs-6"><input id="CE3M3" type="number">  - <input id="CE1M3" type="number"></div></div>');
$matchC1.appendTo($matchsGC);
$matchC2.appendTo($matchsGC);
$matchC3.appendTo($matchsGC);
$matchC4.appendTo($matchsGC);
$matchC5.appendTo($matchsGC);
$matchC6.appendTo($matchsGC);

// Remplissage des matchs du groupe D
var $matchsGD = $('#matchsGroupeD');
var $matchD1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[0] + ' - ' + GroupeD[2] + ' </div><div class="col-md-4 col-xs-6"><input id="DE0M1" type="number">  - <input id="DE2M1" type="number"></div></div>');
var $matchD2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[1] + ' - ' + GroupeD[3] + ' </div><div class="col-md-4 col-xs-6"><input id="DE1M1" type="number">  - <input id="DE3M1" type="number"></div></div>');
var $matchD3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[0] + ' - ' + GroupeD[1] + ' </div><div class="col-md-4 col-xs-6"><input id="DE0M2" type="number">  - <input id="DE1M2" type="number"></div></div>');
var $matchD4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[3] + ' - ' + GroupeD[2] + ' </div><div class="col-md-4 col-xs-6"><input id="DE3M2" type="number">  - <input id="DE2M2" type="number"></div></div>');
var $matchD5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[2] + ' - ' + GroupeD[1] + ' </div><div class="col-md-4 col-xs-6"><input id="DE2M3" type="number">  - <input id="DE1M3" type="number"></div></div>');
var $matchD6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[3] + ' - ' + GroupeD[0] + ' </div><div class="col-md-4 col-xs-6"><input id="DE3M3" type="number">  - <input id="DE0M3" type="number"></div></div>');
$matchD1.appendTo($matchsGD);
$matchD2.appendTo($matchsGD);
$matchD3.appendTo($matchsGD);
$matchD4.appendTo($matchsGD);
$matchD5.appendTo($matchsGD);
$matchD6.appendTo($matchsGD);
$// Remplissage des matchs du groupe E
var $matchsGE = $('#matchsGroupeE');
var $matchE1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[2] + ' - ' + GroupeE[3] + ' </div><div class="col-md-4 col-xs-6"><input id="EE2M1" type="number">  - <input id="EE3M1" type="number"></div></div>');
var $matchE2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[0] + ' - ' + GroupeE[1] + ' </div><div class="col-md-4 col-xs-6"><input id="EE0M1" type="number">  - <input id="EE1M1" type="number"></div></div>');
var $matchE3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[3] + ' - ' + GroupeE[1] + ' </div><div class="col-md-4 col-xs-6"><input id="EE3M2" type="number">  - <input id="EE1M2" type="number"></div></div>');
var $matchE4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[0] + ' - ' + GroupeE[2] + ' </div><div class="col-md-4 col-xs-6"><input id="EE0M2" type="number">  - <input id="EE2M2" type="number"></div></div>');
var $matchE5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[3] + ' - ' + GroupeE[0] + ' </div><div class="col-md-4 col-xs-6"><input id="EE3M3" type="number">  - <input id="EE0M3" type="number"></div></div>');
var $matchE6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[1] + ' - ' + GroupeE[2] + ' </div><div class="col-md-4 col-xs-6"><input id="EE1M3" type="number">  - <input id="EE2M3" type="number"></div></div>');
$matchE1.appendTo($matchsGE);
$matchE2.appendTo($matchsGE);
$matchE3.appendTo($matchsGE);
$matchE4.appendTo($matchsGE);
$matchE5.appendTo($matchsGE);
$matchE6.appendTo($matchsGE);

// Remplissage des matchs du groupe F
var $matchsGF = $('#matchsGroupeF');
var $matchF1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[0] + ' - ' + GroupeF[1] + ' </div><div class="col-md-4 col-xs-6"><input id="FE0M1" type="number">  - <input id="FE1M1" type="number"></div></div>');
var $matchF2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[2] + ' - ' + GroupeF[3] + ' </div><div class="col-md-4 col-xs-6"><input id="FE2M1" type="number">  - <input id="FE3M1" type="number"></div></div>');
var $matchF3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[0] + ' - ' + GroupeF[2] + ' </div><div class="col-md-4 col-xs-6"><input id="FE0M2" type="number">  - <input id="FE2M2" type="number"></div></div>');
var $matchF4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[3] + ' - ' + GroupeF[1] + ' </div><div class="col-md-4 col-xs-6"><input id="FE3M2" type="number">  - <input id="FE1M2" type="number"></div></div>');
var $matchF5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[3] + ' - ' + GroupeF[0] + ' </div><div class="col-md-4 col-xs-6"><input id="FE3M3" type="number">  - <input id="FE0M3" type="number"></div></div>');
var $matchF6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[1] + ' - ' + GroupeF[2] + ' </div><div class="col-md-4 col-xs-6"><input id="FE1M3" type="number">  - <input id="FE2M3" type="number"></div></div>');
$matchF1.appendTo($matchsGF);
$matchF2.appendTo($matchsGF);
$matchF3.appendTo($matchsGF);
$matchF4.appendTo($matchsGF);
$matchF5.appendTo($matchsGF);
$matchF6.appendTo($matchsGF);

// Remplissage des matchs du groupe G
var $matchsGG = $('#matchsGroupeG');
var $matchG1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[0] + ' - ' + GroupeG[3] + ' </div><div class="col-md-4 col-xs-6"><input id="GE0M1" type="number">  - <input id="GE0M3" type="number"></div></div>');
var $matchG2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[2] + ' - ' + GroupeG[1] + ' </div><div class="col-md-4 col-xs-6"><input id="GE2M1" type="number">  - <input id="GE0M1" type="number"></div></div>');
var $matchG3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[0] + ' - ' + GroupeG[2] + ' </div><div class="col-md-4 col-xs-6"><input id="GE0M2" type="number">  - <input id="GE0M2" type="number"></div></div>');
var $matchG4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[1] + ' - ' + GroupeG[3] + ' </div><div class="col-md-4 col-xs-6"><input id="GE1M2" type="number">  - <input id="GE0M3" type="number"></div></div>');
var $matchG5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[3] + ' - ' + GroupeG[2] + ' </div><div class="col-md-4 col-xs-6"><input id="GE3M3" type="number">  - <input id="GE0M2" type="number"></div></div>');
var $matchG6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[1] + ' - ' + GroupeG[0] + ' </div><div class="col-md-4 col-xs-6"><input id="GE1M3" type="number">  - <input id="GE0M0" type="number"></div></div>');
$matchG1.appendTo($matchsGG);
$matchG2.appendTo($matchsGG);
$matchG3.appendTo($matchsGG);
$matchG4.appendTo($matchsGG);
$matchG5.appendTo($matchsGG);
$matchG6.appendTo($matchsGG);

// Remplissage des matchs du groupe H
var $matchsGH = $('#matchsGroupeH');
var matchH1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[1] + ' - ' + GroupeH[3] + ' </div><div class="col-md-4 col-xs-6"><input id="HE1M1" type="number">  - <input id="HE3M1" type="number"></div></div>');
var matchH2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[0] + ' - ' + GroupeH[2] + ' </div><div class="col-md-4 col-xs-6"><input id="HE0M1" type="number">  - <input id="HE2M1" type="number"></div></div>');
var matchH3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[3] + ' - ' + GroupeH[2] + ' </div><div class="col-md-4 col-xs-6"><input id="HE3M2" type="number">  - <input id="HE2M2" type="number"></div></div>');
var matchH4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[0] + ' - ' + GroupeH[1] + ' </div><div class="col-md-4 col-xs-6"><input id="HE0M2" type="number">  - <input id="HE1M2" type="number"></div></div>');
var matchH5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[3] + ' - ' + GroupeH[0] + ' </div><div class="col-md-4 col-xs-6"><input id="HE3M3" type="number">  - <input id="HE0M3" type="number"></div></div>');
var matchH6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[2] + ' - ' + GroupeH[1] + ' </div><div class="col-md-4 col-xs-6"><input id="HE2M3" type="number">  - <input id="HE1M3" type="number"></div></div>');
matchH1.appendTo($matchsGH);
matchH2.appendTo($matchsGH);
matchH3.appendTo($matchsGH);
matchH4.appendTo($matchsGH);
matchH5.appendTo($matchsGH);
matchH6.appendTo($matchsGH);


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
