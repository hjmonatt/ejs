const submit = document.getElementById("submit");
submit.addEventListener("click", findNames);

// Traverses through array looking for the value typed in text box
function findNames () {

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
    ];

    //collecting value
    let searchValue = document.getElementById("findName").value;
    let found = document.getElementById("found");
    found.innerHTML = "";
    let counter = 0;

    //loop through array
    for (let i = 0; i < namesSearch.length; i++)
    {
        //condensing name
        let fullName = namesSearch[i].fName + " " + namesSearch[i].lName;

        //conditional for names in array, case does not matter
        if (searchValue.toUpperCase() === namesSearch[i].fName.toUpperCase() || searchValue.toUpperCase() === fullName.toUpperCase()) {

            found.innerHTML +=

                "Name: " + namesSearch[i].fName + " " + namesSearch[i].lName +
                "<br>Sex: " + namesSearch[i].sex +
                "<br>Born: " + namesSearch[i].born +
                "<br>Died: " + namesSearch[i].died +
                "<br>Father: " + namesSearch[i].father +
                "<br>Mother: " + namesSearch[i].mother +
                "<br><br>";
            counter++
        }
    }

    //if name provided doesn't match any in array, display message that no person was found
    if (counter === 0)
    {
        found.innerHTML = "No person found.";
    }
}


