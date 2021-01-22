for (let current = 1; current <= 100; current++) {
    if(current % 3 == 0 && current % 5 == 0)
    {
        document.write("Hee Haw! <br>");
    }else if(current % 5 == 0)
    {
        document.write("Haw! <br>");
    }else if(current % 3 == 0)
    {
        document.write("Hee! <br>");
    }else
    {
        document.write(current + " <br>");
    }

}