var submit = document.getElementById("search-name");
var region_select = document.getElementById("region-selector");
var region_label = document.getElementById("region-label");
var region_key = ""
var region = "na1"
var summonerName = ""
console.log("test");
// region display
function setRegion(region_name) {
    console.log("reached");
    region_label.innerHTML = region_name;
}
document.getElementById("region-na").addEventListener("click", setRegion("NA"));

var euw = document.getElementById("region-euw");
var eune = document.getElementById("region-eune");
var br = document.getElementById("region-br");
var jp = document.getElementById("region-jp");
var kr = document.getElementById("region-kr");
var lan = document.getElementById("region-lan");
var las = document.getElementById("region-las");
var oce = document.getElementById("region-oce");
var tr = document.getElementById("region-tr");
var ru = document.getElementById("region-ru");
var pbe = document.getElementById("region-pbe");

// region keys for API call
if (region == "NA") {
    region_key = "na1";
} else if (region == "EUW") {
    region_key = "euw1";
} else if (region == "EUNE") {
    region_key = "eun1";
} else if (region == "BR") {
    region_key = "br1";
} else if (region == "JP") {
    region_key = "jp1";
} else if (region == "KR") {
    region_key = "kr";
} else if (region == "LAN") {
    region_key = "la1";
} else if (region == "LAS") {
    region_key == "la2";
} else if (region == "OCE") {
    region_key == "oc1";
} else if (region == "TR") {
    region_key = "tr1";
} else if (region == "RU") {
    region_key = "ru";
} else if (region == "PBE") {
    region_key = "pbe1";
}



submit.addEventListener("click", function() {
    summonerName = document.getElementById("summoner-name").value;
});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        retval = JSON.parse(xhttp.responseText);
        console.log(retval);
    }
}

xhttp.open("GET", "https://" + region_key + ".api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName, true)