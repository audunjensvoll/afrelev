function skriv(id, innhold) {
    document.getElementById(id).innerHTML = innhold;
}

function html(element, innhold) {
    return "<" + element + ">" + innhold + "</" + element + ">";
}

var token = null; 

function setToken(tokenvalue) {
    token = tokenvalue; 
}

function get(url, onOk) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText && this.responseText!="")
                onOk(JSON.parse(this.responseText));                
            else onOk(null); 
        }
    };
    xmlhttp.open("GET", url, true);
    if (token)
    {
        xmlhttp.setRequestHeader("Token",token); 
    }
    xmlhttp.send();
}        

  

function post(url, data, onOk) {
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText && this.responseText!="")
                onOk(JSON.parse(this.responseText));
            else onOk(null); 
        }
    };    
    xmlhttp.open("POST", url, true);
    if (token)
    {
        xmlhttp.setRequestHeader("Token",token); 
    }
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
}        