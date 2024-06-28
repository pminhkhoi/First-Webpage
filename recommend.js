function recommendation() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    if (message == "") {
        alert('Please enter some text into the box!');
        document.getElementById("message").focus();
    }
    else {
        if (name == "") {
            document.getElementById("post").innerHTML += "<p><i><span>\"</span> " + message + " <span>\"</span></i></p>";
        }
        else {
            document.getElementById("post").innerHTML += "<p><i><span>\"</span> " + message + " <span>\" " + name + "</span></i></p>";
        }
        alert("Message has been added.");
    }
}