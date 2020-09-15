


let newValue = Cookies.get("value");
let newToken = Cookies.get("token");

if (newValue == undefined) {
    document.getElementById("h2tag").innerHTML = "You have to log in";
    let newElement = document.createElement('button');
    newElement.innerText="Go back";
    document.body.appendChild(newElement).addEventListener("click", goBack);
    function goBack() {
        window.open("index.html", "_self");
    }


}
else {
    document.getElementById("h2tag").innerHTML = "Welcome" + " " + newValue;
    readColor();

}



function readColor() {
    function deleting() {
        Cookies.remove("token");
        Cookies.remove("value");
        window.open("index.html", "_self");
    }
    let deleteToken = document.createElement('button');
    deleteToken.innerText="Log out";
    document.body.appendChild(deleteToken).addEventListener("click", deleting);


    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let allColor = JSON.parse(this.responseText);
            console.log(allColor);
            for (let i = 0; i < allColor.data.length; i++) {
                let newTag=document.createElement('h3');
                newTag.innerText=allColor.data[i].name;
                document.body.appendChild(newTag);
                let newTag2=document.createElement('h4');
                newTag2.innerText=allColor.data[i].year;
                document.body.appendChild(newTag2);

                let newVariable = document.createElement('div');
                newVariable.style.width += "50px";
                newVariable.style.height += "50px";
                newVariable.style.backgroundColor += allColor.data[i].color;

                document.body.appendChild(newVariable);

            }

        } else if (this.readyState != 4) {
            console.log("Loading");
        }
        else {
            console.log("Something went wrong");


        }

    };

    ajax.open("GET", "https://reqres.in/api/unknown", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}

