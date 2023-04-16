let mywindow= null
function openwindow()
{
    mywindow = window.open('',mywindow,'width=200,height=100,top=200,left=150');
    mywindow.document.write('this is<span style="color:blue">mywindow</span>');
}
function close()
{
    if(mywindow){
        mywindow=window.close();
    }
}