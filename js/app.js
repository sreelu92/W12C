function login() {
    let emailInput = document.getElementById("email-input").value;
    let passwordInput = document.getElementById("pwd").value;

    let dataObject = {
        email: emailInput,
        password: passwordInput
    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("login-status").innerHTML = "Login success";
            let tokenObject=JSON.parse(this.responseText);
            Cookies.set("value",dataObject.email);
            Cookies.set("token",tokenObject.token);
            window.open("home.html");
            
        } else if (this.readyState != 4) {
            document.getElementById("login-status").innerHTML = "Loading";
        }
        else {
            document.getElementById("form").innerHTML = "Invalid login";
        }
    };

    ajax.open("POST", "https://reqres.in/api/login", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(dataObject));

}




document.getElementById("data-submit").addEventListener("click", login);