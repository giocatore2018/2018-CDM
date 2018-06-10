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
var $matchsGA = $('#matchsGroupeA');
var $matchA1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeA[0] + ' - ' + GroupeA[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchA2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeA[2] + ' - ' + GroupeA[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchA3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeA[0] + ' - ' + GroupeA[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchA4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeA[1] + ' - ' + GroupeA[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchA5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeA[0] + ' - ' + GroupeA[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchA6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeA[3] + ' - ' + GroupeA[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
$matchA1.appendTo($matchsGA);
$matchA2.appendTo($matchsGA);
$matchA3.appendTo($matchsGA);
$matchA4.appendTo($matchsGA);
$matchA5.appendTo($matchsGA);
$matchA6.appendTo($matchsGA);
/*for(i=1 ; i<7 ; i++)
{
  window['matchA'+i].appendTo($matchsGA);
}
*/

// Remplissage des matchs du groupe B
var $matchsGB = $('#matchsGroupeB');
var $matchB1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[3] + ' - ' + GroupeB[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchB2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[0] + ' - ' + GroupeB[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchB3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[0] + ' - ' + GroupeB[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchB4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[2] + ' - ' + GroupeB[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchB5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[2] + ' - ' + GroupeB[0] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchB6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeB[1] + ' - ' + GroupeB[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
$matchB1.appendTo($matchsGB);
$matchB2.appendTo($matchsGB);
$matchB3.appendTo($matchsGB);
$matchB4.appendTo($matchsGB);
$matchB5.appendTo($matchsGB);
$matchB6.appendTo($matchsGB);

// Remplissage des matchs du groupe C
var $matchsGC = $('#matchsGroupeC');
var $matchC1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[0] + ' - ' + GroupeC[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchC2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[1] + ' - ' + GroupeC[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchC3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[2] + ' - ' + GroupeC[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchC4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[0] + ' - ' + GroupeC[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchC5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[2] + ' - ' + GroupeC[0] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchC6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeC[3] + ' - ' + GroupeC[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
$matchC1.appendTo($matchsGC);
$matchC2.appendTo($matchsGC);
$matchC3.appendTo($matchsGC);
$matchC4.appendTo($matchsGC);
$matchC5.appendTo($matchsGC);
$matchC6.appendTo($matchsGC);

// Remplissage des matchs du groupe D
var $matchsGD = $('#matchsGroupeD');
var $matchD1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[0] + ' - ' + GroupeD[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchD2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[1] + ' - ' + GroupeD[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchD3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[0] + ' - ' + GroupeD[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchD4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[3] + ' - ' + GroupeD[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchD5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[2] + ' - ' + GroupeD[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchD6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeD[3] + ' - ' + GroupeD[0] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
$matchD1.appendTo($matchsGD);
$matchD2.appendTo($matchsGD);
$matchD3.appendTo($matchsGD);
$matchD4.appendTo($matchsGD);
$matchD5.appendTo($matchsGD);
$matchD6.appendTo($matchsGD);
$// Remplissage des matchs du groupe E
var $matchsGE = $('#matchsGroupeE');
var $matchE1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[2] + ' - ' + GroupeE[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchE2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[0] + ' - ' + GroupeE[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchE3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[3] + ' - ' + GroupeE[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchE4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[0] + ' - ' + GroupeE[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchE5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[3] + ' - ' + GroupeE[0] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchE6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeE[1] + ' - ' + GroupeE[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
$matchE1.appendTo($matchsGE);
$matchE2.appendTo($matchsGE);
$matchE3.appendTo($matchsGE);
$matchE4.appendTo($matchsGE);
$matchE5.appendTo($matchsGE);
$matchE6.appendTo($matchsGE);

// Remplissage des matchs du groupe F
var $matchsGF = $('#matchsGroupeF');
var $matchF1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[0] + ' - ' + GroupeF[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchF2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[2] + ' - ' + GroupeF[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchF3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[0] + ' - ' + GroupeF[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchF4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[3] + ' - ' + GroupeF[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchF5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[3] + ' - ' + GroupeF[0] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchF6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeF[1] + ' - ' + GroupeF[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
$matchF1.appendTo($matchsGF);
$matchF2.appendTo($matchsGF);
$matchF3.appendTo($matchsGF);
$matchF4.appendTo($matchsGF);
$matchF5.appendTo($matchsGF);
$matchF6.appendTo($matchsGF);

// Remplissage des matchs du groupe G
var $matchsGG = $('#matchsGroupeG');
var $matchG1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[0] + ' - ' + GroupeG[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchG2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[2] + ' - ' + GroupeG[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchG3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[0] + ' - ' + GroupeG[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchG4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[1] + ' - ' + GroupeG[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchG5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[3] + ' - ' + GroupeG[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var $matchG6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeG[1] + ' - ' + GroupeG[0] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
$matchG1.appendTo($matchsGG);
$matchG2.appendTo($matchsGG);
$matchG3.appendTo($matchsGG);
$matchG4.appendTo($matchsGG);
$matchG5.appendTo($matchsGG);
$matchG6.appendTo($matchsGG);

// Remplissage des matchs du groupe H
var $matchsGH = $('#matchsGroupeH');
var matchH1 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[1] + ' - ' + GroupeH[3] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var matchH2 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[0] + ' - ' + GroupeH[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var matchH3 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[3] + ' - ' + GroupeH[2] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var matchH4 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[0] + ' - ' + GroupeH[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var matchH5 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[3] + ' - ' + GroupeH[0] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
var matchH6 = $('<div class="row"><div class="col-md-8 col-xs-6">' + GroupeH[2] + ' - ' + GroupeH[1] + ' </div><div class="col-md-4 col-xs-6"><input type="number">  - <input type="number"></div></div>');
matchH1.appendTo($matchsGH);
matchH2.appendTo($matchsGH);
matchH3.appendTo($matchsGH);
matchH4.appendTo($matchsGH);
matchH5.appendTo($matchsGH);
matchH6.appendTo($matchsGH);


//Paramètrages des tableaux
$(function() {
  $(".tablesorter").tablesorter({
    sortList: [[4,1],[3,1],[1,1]]
  });
});

// Création tableau groupe A
var $tableauGA = $('#resultatsGroupeA tbody');
var $tr1TabA = $('<tr><td>' + GroupeA[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabA = $('<tr><td>' + GroupeA[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabA = $('<tr><td>' + GroupeA[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabA = $('<tr><td>' + GroupeA[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabA.appendTo($tableauGA);
$tr2TabA.appendTo($tableauGA);
$tr3TabA.appendTo($tableauGA);
$tr4TabA.appendTo($tableauGA);

// Création tableau groupe B
var $tableauGB = $('#resultatsGroupeB tbody');
var $tr1TabB = $('<tr><td>' + GroupeB[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabB = $('<tr><td>' + GroupeB[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabB = $('<tr><td>' + GroupeB[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabB = $('<tr><td>' + GroupeB[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabB.appendTo($tableauGB);
$tr2TabB.appendTo($tableauGB);
$tr3TabB.appendTo($tableauGB);
$tr4TabB.appendTo($tableauGB);

// Création tableau groupe C
var $tableauGC = $('#resultatsGroupeC tbody');
var $tr1TabC = $('<tr><td>' + GroupeC[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabC = $('<tr><td>' + GroupeC[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabC = $('<tr><td>' + GroupeC[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabC = $('<tr><td>' + GroupeC[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabC.appendTo($tableauGC);
$tr2TabC.appendTo($tableauGC);
$tr3TabC.appendTo($tableauGC);
$tr4TabC.appendTo($tableauGC);

// Création tableau groupe D
var $tableauGD = $('#resultatsGroupeD tbody');
var $tr1TabD = $('<tr><td>' + GroupeD[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabD = $('<tr><td>' + GroupeD[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabD = $('<tr><td>' + GroupeD[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabD = $('<tr><td>' + GroupeD[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabD.appendTo($tableauGD);
$tr2TabD.appendTo($tableauGD);
$tr3TabD.appendTo($tableauGD);
$tr4TabD.appendTo($tableauGD);

// Création tableau groupe E
var $tableauGE = $('#resultatsGroupeE tbody');
var $tr1TabE = $('<tr><td>' + GroupeE[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabE = $('<tr><td>' + GroupeE[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabE = $('<tr><td>' + GroupeE[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabE = $('<tr><td>' + GroupeE[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabE.appendTo($tableauGE);
$tr2TabE.appendTo($tableauGE);
$tr3TabE.appendTo($tableauGE);
$tr4TabE.appendTo($tableauGE);

// Création tableau groupe F
var $tableauGF = $('#resultatsGroupeF tbody');
var $tr1TabF = $('<tr><td>' + GroupeF[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabF = $('<tr><td>' + GroupeF[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabF = $('<tr><td>' + GroupeF[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabF = $('<tr><td>' + GroupeF[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabF.appendTo($tableauGF);
$tr2TabF.appendTo($tableauGF);
$tr3TabF.appendTo($tableauGF);
$tr4TabF.appendTo($tableauGF);

// Création tableau groupe G
var $tableauGG = $('#resultatsGroupeG tbody');
var $tr1TabG = $('<tr><td>' + GroupeG[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabG = $('<tr><td>' + GroupeG[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabG = $('<tr><td>' + GroupeG[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabG = $('<tr><td>' + GroupeG[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabG.appendTo($tableauGG);
$tr2TabG.appendTo($tableauGG);
$tr3TabG.appendTo($tableauGG);
$tr4TabG.appendTo($tableauGG);

// Création tableau groupe H
var $tableauGH = $('#resultatsGroupeH tbody');
var $tr1TabH = $('<tr><td>' + GroupeH[0] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr2TabH = $('<tr><td>' + GroupeH[1] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr3TabH = $('<tr><td>' + GroupeH[2] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
var $tr4TabH = $('<tr><td>' + GroupeH[3] + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>');
$tr1TabH.appendTo($tableauGH);
$tr2TabH.appendTo($tableauGH);
$tr3TabH.appendTo($tableauGH);
$tr4TabH.appendTo($tableauGH);
