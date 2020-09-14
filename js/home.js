function deleting() {
    //Cookies.remove("token");
    //window.open("index.html","_self");
    console.log("helo");
}


let deleteToken=document.getElementById("loggingout");
deleteToken.addEventListener('click',deleting);


let newValue = Cookies.get("value");
let newToken=Cookies.get("token");

if (newValue == undefined) {
    document.getElementById("h2tag").innerHTML = "You have to log in";
    //  let newElement=document.createElement('button');
    //  document.body.appendChild(newElement).addEventListener("click",goBack);
    //  function goBack() {
    //     window.open("index.html","_self");
    //  }
    

}
else {
    document.getElementById("h2tag").innerHTML = "Welcome" + " " + newValue;
    readColor();

}



function readColor() {


    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let allColor = JSON.parse(this.responseText);
            console.log(allColor);
            for (let i = 0; i < allColor.data.length; i++) {
                document.getElementById("body").innerHTML += "<h3>" + "name:" + allColor.data[i].name + "</h3>";
                document.getElementById("body").innerHTML += "<h4>" + "year:" + allColor.data[i].year + "</h4>";
                let newVariable=document.createElement('div');
                newVariable.style.width+="50px";
                newVariable.style.height+="50px";
                newVariable.style.backgroundColor+=allColor.data[i].color;

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

