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
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var chatlist = [
    { user: "audun",
    message: "Hei, hvordan står det til"
}
];

function getChat(req, res){
    res.send(JSON.stringify(chatlist));
}

app.get("/chat", getChat);

function postChat(req, res){
    var message = {
        user: req.body.user,
        message: req.body.message
    }
    list.push(message);
    res.send(JSON.stringify(chatlist));
}

app.post("/chat", postChat);