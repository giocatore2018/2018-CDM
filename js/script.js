//Groupes de la coupe du monde 2018
var Groupe_A = ["Russie","Uruguay","Egypte","A. Saoudite"] ;
var Groupe_B = ["Portugal","Espagne","Iran","Maroc"] ;
var Groupe_C = ["France","Pérou","Danemark","Australie"] ;
var Groupe_D = ["Argentine","Croatie","Islande","Nigéria"] ;
var Groupe_E = ["Brésil","Suisse","Costa Rica","Serbie"] ;
var Groupe_F = ["Allemagne","Mecique","Suède","Corée du Sud"] ;
var Groupe_G = ["Belgique","Angleterre","Tunisie","Panama"] ;
var Groupe_H = ["Pologne","Colombie","Sénégal","Japon"] ;

//alphabet jusque H
var alphabet = ["A","B","C","D","E","F","G","H"];
//Remplissage des groupes de la partie HTML
for(i = 0 ; i < 4 ; i++){
  $('#A' + i).text(Groupe_A[i]);
  $('#B' + i).text(Groupe_B[i]);
  $('#C' + i).text(Groupe_C[i]);
  $('#D' + i).text(Groupe_D[i]);
  $('#E' + i).text(Groupe_E[i]);
  $('#F' + i).text(Groupe_F[i]);
  $('#G' + i).text(Groupe_G[i]);
  $('#H' + i).text(Groupe_H[i]);
}
