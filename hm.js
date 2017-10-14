function fnCheck()
{
    var cnRefVal = document.getElementById("cn").value;
    var cidRefVal = document.getElementById("cid").value;
    var nodRefVal = document.getElementById("nod").value;
    var nopRefVal = document.getElementById("nop").value;
    var aaRefVal = document.getElementById("aa").value;
    var btnRef = document.getElementById("bttn");
     if (cnRefVal !== "" && cidRefVal !== "" && nodRefVal !== "" && nopRefVal !== "" && aaRefVal !== "") {
         btnRef.removeAttribute('disabled');
    } else {
         btnRef.setAttribute("disabled", "disabled");
    }
}

function fnReg() {
    var cnRefVal = document.getElementById("cn").value;
    var cidRefVal = document.getElementById("cid").value;
    var nodRefVal = document.getElementById("nod").value;
    var nopRefVal = document.getElementById("nop").value;
    var deluxRef = document.getElementById("delux");
    var suiteRef = document.getElementById("suite");
    var acRef = document.getElementById("ac");
    var lockerRef = document.getElementById("locker");
    var aaRefVal = document.getElementById("aa").value;
    var resRef = document.getElementById("res");
    var btnRef = document.getElementById("bttn");
    var roomVal;
    var room;
    var facilities;
    if (deluxRef.checked) {
        roomVal = 2500;
         room = deluxRef.value;
    }
    if (suiteRef.checked) {
        roomVal = 4000;
        room = suiteRef.value;
    }
    if (acRef.checked) {
        roomVal = roomVal + 500;
        facilities = acRef.value;
    }
    if (lockerRef.checked) {
        roomVal = roomVal + 250;
        facilities = facilities + lockerRef.value;
    }

    var baRefVal = Number(roomVal) - Number(aaRefVal);
    var tableRef = "<table class='table table-bordered table-striped'><tr><th>Customer Name</th><td>" + cnRefVal + "</td></tr>" +
        "<tr><th>Check-In Date</th><td>" + cidRefVal + "</td></tr><tr><th>No Of Persons</th><td>" + nopRefVal + "</td></tr>" +
        "<tr><th>No Of Days</th><td>" + nodRefVal + "</td></tr><tr><th>Room Type</th><td>" + room + "</td></tr>" +
        "<tr><th>Aminities</th><td>" + facilities + "</td></tr>" +
        "<tr><th>Advance Amount</th><td>" + aaRefVal + "</td></tr><tr><th>Balenced Amount</th><td>" + baRefVal + "</td></tr></table>";
    resRef.innerHTML = tableRef;
}