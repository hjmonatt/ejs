//JSON array
const namesSearch = [
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
                        "lName": "Ramirez",
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

//findName() method - traverses through array looking for the value typed in text box
function findName()
{
    //collecting value
    let searchValue = document.getElementById("findName").value;

    //loop through array
    for (let i = 0; i < namesSearch.length; i++)
    {
        //condensing name
        let fullName = namesSearch[i].fName + " " + namesSearch[i].lName;

        let jane = "jane";

        //conditional for names in array, case does not matter
        if (searchValue.toUpperCase() === namesSearch[i].fName.toUpperCase() || searchValue.toUpperCase() === fullName.toUpperCase()) {

            return document.getElementById("found").innerHTML =

                "Name: " + namesSearch[i].fName + " " + namesSearch[i].lName +
                "<br>Sex: " + namesSearch[i].sex +
                "<br>Born: " + namesSearch[i].born +
                "<br>Died: " + namesSearch[i].died +
                "<br>Father: " + namesSearch[i].father +
                "<br>Mother: " + namesSearch[i].mother;

        }
        //if name provided doesn't match any in array, display message that no person was found
        if (searchValue.toUpperCase() !== namesSearch[i].fName.toUpperCase() || searchValue.toUpperCase() !== fullName.toUpperCase())
        {
            document.getElementById("found").innerHTML = "No person found.";
        }

    }
}


//console.log(namesSearch);

//let findName = document.getElementById("findName").value;

//namesSearch[i].filter( nameSearch => nameSearch[i].fName === searchValue);


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

//let jane = "Jane";
//console.log(namesSearch.filter(n => n.fName === jane.toUpperCase()));

//let parsedArr = JSON.parse(namesSearch);
//let dups = namesSearch.filter(it => it.fName.includes('jane'));
//console.log(searchValue);

//console.log(namesSearch.length);
//let results = [];
//let fullName = namesSearch[i].fName + " " + namesSearch[i].lName;


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
