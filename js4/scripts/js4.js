let form = document.getElementById("searchNames");
form.onsubmit=search;

function search(){

    const obj = JSON.parse(data);
    document.getElementById("found").innerHTML =
        "Name: " + namesSearch.fullName +
        "Sex: " + namesSearch.sex +
        "Born: " + namesSearch.born +
        "Died: " + namesSearch.died +
        "Father: " + namesSearch.father +
        "Mother: " + namesSearch.mother;

    data = JSON.stringify(obj);

}

function filter(namesSearch, test)
{
    let passed = [];
    for(let element of namesSearch)
    {
        if(test(element))
        {
            passed.push(element);
        }
    }
    return passed;
}