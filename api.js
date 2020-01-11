var playercount = "";
var serverip = "";
var apidate = "";
var votes = "";

const options = {
    minute: "2-digit"
};

API();

var Loop = setInterval(function(){
    API();
}, 60000)

function API() {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.trackyserver.com/widget/index.php?id=271810', true)

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        playercount = data.playerscount.toString();
        serverip = data.ip.toString();
        apidate = data.date
        votes = data.votes.toString();
        console.log("PLAYERCOUNT " + playercount + "\n",
                    "SERVERIP " + serverip + "\n",
                    "APIDATE " + apidate + "\n",
                    "VOTES " + votes + "\n")
    }
    // Send request
    request.send()
}