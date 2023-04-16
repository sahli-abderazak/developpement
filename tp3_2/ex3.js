function extrait()
{
    x=new Date();
    mois=x.getMonth()+1;
    jour=x.getDate();
    annee=x.getFullYear();
    document.write('<table border="1"><tr><td width="250px" height="22"></td></tr><tr><td height="40" >date du jour:' ,jour ,'/',mois,'/',annee,"</td></tr></table>")}