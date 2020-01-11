var updatetime = "";

var mainLoopId = setInterval(function(){
    var epoch = Math.round(new Date().getTime());

    var myDate = new Date(apidate).toLocaleString(undefined, options);
    var epochMin = new Date(epoch).toLocaleString(undefined, options);

    // console.log("EPOCH " + epochMin + "\n",
    //             "API " + myDate)
    
    updatetime = epochMin - myDate;

    if(updatetime < 0 ) {
        updatetime = 60 - (Math.abs(updatetime))
        document.getElementById("updatetime").textContent=updatetime + " minuten geleden";
    }else if(updatetime < 1) {
        document.getElementById("updatetime").textContent="zojuist";
    }else if(updatetime == 1) {
        document.getElementById("updatetime").textContent=updatetime + " minuut geleden";
    }else if(updatetime == "offline") {
        document.getElementById("updatetime").textContent="Offline";
    }else{
        document.getElementById("updatetime").textContent=updatetime + " minuten geleden";
    }

    document.getElementById("playercount").textContent=playercount.replace("/", " / ");
    document.getElementById("serverip").textContent=serverip;
    document.getElementById("votes").textContent=votes;

    var connectbtn = "fivem://connect/" + serverip
    document.getElementById("launchbtn").href=connectbtn;

}, 500);