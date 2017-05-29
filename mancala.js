//ws2
var HOST = location.origin.replace(/^http/, 'ws');
//var ws = new WebSocket(HOST);





//WS1
var socket = new WebSocket(HOST);
socket.onopen = function (event) {
    socket.send("Can you hear me?");
};
socket.onmessage = function (event) {

    if (event.data.includes("name")) {
        var username = prompt(event.data);

        console.log("welcome " + username);
    } else {
        //add to log
        console.log(event.data);
        var log = document.getElementById("log").innerHTML;
        document.getElementById("log").innerHTML = log + "<br>" + event.data;
    }
};

function send() {
    socket.send("msg " + document.getElementById("msg").value);
}





//function codeAddress() {
//    turn = "player 1";
//    emptyme = 0;
//    turnsame = 0;
//}
//window.onload = codeAddress;
//
//
//function p1(num) {
//    moves = document.getElementById("b" + num).innerHTML
//    if (turn == "player 1" && moves > 0) {
//        // alert(turn)
//        remainingMoves = moves;
//        console.log(moves)
//        spotNum = num.toString()
//        // alert(spotNum);
//        moves = document.getElementById("b" + num).innerHTML
//        old = document.getElementById("b" + num).innerHTML
//        while (moves > 0) {
//            spotNum++
//            if (spotNum > 13) {
//                spotNum = 1
//            }
//            if (moves == 1 && document.getElementById("b" + spotNum).innerHTML == 0 && spotNum > 0 && spotNum < 7) {
//                alert("empty");
//                added = 1;
//                if (spotNum == 1) {
//                    opposite = 13;
//                } else if (spotNum == 2) {
//                    opposite = 12;
//                } else if (spotNum == 3) {
//                    opposite = 11;
//                } else if (spotNum == 4) {
//                    opposite = 10;
//                } else if (spotNum == 5) {
//                    opposite = 9;
//                } else if (spotNum == 6) {
//                    opposite = 8;
//                }
//                added = added + Number(document.getElementById("b" + opposite).innerHTML)
//                document.getElementById("b" + opposite).innerHTML = 0;
//
//                document.getElementById("b7").innerHTML = Number(document.getElementById("b7").innerHTML) + added
//                document.getElementById("b" + spotNum).innerHTML = 0;
//                emptyme = 1;
//
//            }
//            document.getElementById("b" + spotNum).innerHTML = Number(document.getElementById("b" + spotNum).innerHTML) + 1;
//            if (emptyme == 1) {
//
//                document.getElementById("b" + spotNum).innerHTML = 0;
//            }
//            emptyme = 0;
//
//            if (moves == 1 && spotNum == 7) {
//                turnsame = 1;
//                alert("again")
//            }
//
//            moves--
//
//
//        }
//        document.getElementById("b" + num).innerHTML = document.getElementById("b" + num).innerHTML - old;
//    } else if (turn == "player 2") {
//        alert("its not ur turn fam");
//    } else {
//        alert("you got no turns, go again");
//    }
//    if (turnsame == 0) {
//        alert("player 2 turn")
//        turn = "player 2"
//    } else {
//        alert("its player 1 again")
//        turn = "player 1";
//        // turnsame=
//    }
//
//
//}
//
//function p2(num) {
//    moves = document.getElementById("b" + num).innerHTML
//    if (turn == "player 2" && moves > 0) {
//        // alert(turn)
//        remainingMoves = moves;
//        console.log(moves);
//        spotNum = num.toString();
//        // alert(spotNum);
//        moves = document.getElementById("b" + num).innerHTML;
//        old = document.getElementById("b" + num).innerHTML;
//
//        while (moves > 0) {
//            spotNum++
//            if (spotNum > 14) {
//                spotNum = 1
//            }
//            if (spotNum == 7) {
//                spotNum = 8
//            }
//            if (moves == 1 && document.getElementById("b" + spotNum).innerHTML == 0 && spotNum > 7 && spotNum < 14) {
//                alert("empty");
//                added = 1;
//                if (spotNum == 8) {
//                    opposite = 6;
//                } else if (spotNum == 9) {
//                    opposite = 5;
//                } else if (spotNum == 10) {
//                    opposite = 4;
//                } else if (spotNum == 11) {
//                    opposite = 3;
//                } else if (spotNum == 12) {
//                    opposite = 2;
//                } else if (spotNum == 13) {
//                    opposite = 1;
//                }
//                added = added + Number(document.getElementById("b" + opposite).innerHTML)
//                document.getElementById("b" + opposite).innerHTML = 0;
//
//                document.getElementById("b14").innerHTML = Number(document.getElementById("b14").innerHTML) + added
//                document.getElementById("b" + spotNum).innerHTML = 0;
//                emptyme = 1;
//
//            }
//
//
//            document.getElementById("b" + spotNum).innerHTML = Number(document.getElementById("b" + spotNum).innerHTML) + 1;
//            if (emptyme == 1) {
//
//                document.getElementById("b" + spotNum).innerHTML = 0;
//            }
//
//            emptyme = 0;
//            moves--
//        }
//        document.getElementById("b" + num).innerHTML = 0;
//    } else if (turn == "player 1") {
//        alert("its not ur turn fam");
//    } else {
//        alert("you got no turns, go again");
//    }
//
//    turn = "player 1";
//
//
//}
