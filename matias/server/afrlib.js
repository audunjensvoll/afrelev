function skriv(id, innhold) {
    document.getElementById(id).innerHTML = innhold;
}

function html(element, innhold) {
    return "<" + element + ">" + innhold + "</" + element + ">";
}

function get(url, onOk) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            onOk(JSON.parse(this.responseText));
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function post(url, data, onOK) {
    if(url == ""){
        var bruker = data;
        data.id = 123;
        onOk(bruker);
    }
}