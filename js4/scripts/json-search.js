//let form = document.getElementById("searchNames");
//form.onsubmit=filter;

let namesSearch = [
                    {
                        "fName": "Jane",
                        "lName": "Doe",
                        "sex": "f",
                        "born": "1876",
                        "died": "1956",
                        "father": "Petreus de Milliano",
                        "mother": "Sophia van Damme"
                    },

                    {
                        "fName": "Jane",
                        "lName" : "Ramirez",
                        "sex": "f",
                        "born": "1102",
                        "died": "--",
                        "father": "Themistocles Merovech",
                        "mother": "Amara Floros"
                    },

                    {
                        "fName": "Kobe",
                        "lName": "Bryant",
                        "sex": "m",
                        "born": "1978",
                        "died": "2020",
                        "father": "Joe Bryant",
                        "mother": "Pam Bryant"
                    },

                    {
                        "fName": "Shelly",
                        "lName": "Belly",
                        "sex": "f",
                        "born": "1775",
                        "died": "1817",
                        "father": "George Porge",
                        "mother": "Cassie Lassie"
                    },

                    {
                        "fName": "Alan",
                        "lName": "Rickman",
                        "sex": "m",
                        "born": "1946",
                        "died": "2016",
                        "father": "Bernard Rickman",
                        "mother": "Margaret Bartlett"
                    }

]
//console.log(namesSearch);

let findName = document.getElementById("findName").value;

namesSearch.filter( record => record.fName === findName);


/**
 *
 *

document.getElementById("found").innerHTML =
    "Name: " + namesSearch.fName + " " + namesSearch.lName + "<br>" +
    "Sex: " + namesSearch.sex + "<br>" +
    "Born: " + namesSearch.born + "<br>" +
    "Died: " + namesSearch.died + "<br>" +
    "Father: " + namesSearch.father + "<br>" +
    "Mother: " + namesSearch.mother;

 */

function filter() {
    let searchValue = document.getElementById("findName").value;
    //console.log(searchValue);
    //console.log(namesSearch.length);
    for (let i = 0; i < namesSearch.length; i++) {
        if (searchValue == namesSearch[i].fName) {
            //console.log(namesSearch[i].fName);
            document.getElementById("found").innerHTML =
                "Name: " + namesSearch[i].fName + " " + namesSearch[i].lName +
                "<br>Sex: " + namesSearch[i].sex +
                "<br>Born: " + namesSearch[i].born +
                "<br>Died: " + namesSearch[i].died +
                "<br>Father: " + namesSearch[i].father +
                "<br>Mother: " + namesSearch[i].mother;

        }

    }
}



    function search1(){

        const obj = JSON.parse(namesSearch);

        for(i = 0; i < namesSearch.length; i++)
        {
            if(namesSearch[i].names.fName === findName)
            {

                document.getElementById("found").innerHTML =
                    "Name: " + namesSearch.fName + " " + namesSearch.lName +
                    "Sex: " + namesSearch.sex +
                    "Born: " + namesSearch.born +
                    "Died: " + namesSearch.died +
                    "Father: " + namesSearch.father +
                    "Mother: " + namesSearch.mother;

            }
            else
            {
                document.getElementById("found").innerHTML = "No person found."
            }
        }


        //namesSearch = JSON.stringify(obj);







    //let results = [];
    //let searchField = "fName";
   // let searchVal = findName;
    //for (let i=0 ; i < obj.namesSearch.length ; i++)
   // {
      //  if (obj.list[i][searchField] == searchVal) {
      //      results.push(obj.list[i]);
      //  }
   // }


    //namesSearch.names.filter( record => record.fName === findName);
}