
function remplacerimg(id)
{
    if(id=="i1")
    {
        document.images["i2"].src="./i4.jpg"
        document.images["i4"].src="./i2.jpg"
    }
    else if( id =="i2")
    {
        document.images["i1"].src="./i3.jpg"
        document.images["i3"].src="./i1.jpg"
    }

}
function retourner(id)
{
    if (id=="i1")
    {
        document.images["i2"].src="./i2.jpg"
        document.images["i4"].src="./i4.jpg"
    }
    else if( id=="i2")
    {
        document.images["i1"].src="./i1.jpg"
        document.images["i3"].src="./i3.jpg"
    }
}
