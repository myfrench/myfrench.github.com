function log_in(form){
    // username len > 5 && <20
    // code len > 3 && <20
    if(true){
        document.getElementById('username_error').innerHTML = "username is invalid";
        document.getElementsByClassName('username').style = "border: 1px red solid;";
    }
    document.getElementById('username_error').innerHTML = "";
    try{
        let code = form.code.value;
        let username = form.username.value;
    
        var request = new XMLHttpRequest();
        request.open("GET", `https://arugatu.000webhostapp.com/index.php?func=SignIn&code=${code}&name=${username}`);
        request.send();
        request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if(this.responseText === "Failed"){
                
            }
            if(this.responseText === "Success"){

            }
        }
        };
        // document.getElementById("s_name").innerHTML = s_name;
        // document.getElementById("t_name").innerHTML = t_name;
    }catch(e){}
    event.preventDefault();

}
