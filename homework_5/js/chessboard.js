var board = document.createElement("div");
board.className = "board";
document.body.appendChild(board);
for (var i = 1; i < 11; i++) {
    var row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);
    for (var j = 1; j < 11; j++) {
        var square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
        boardItem(i, j);
        figeres(i, j);
    }
}

function boardItem(a, b) {
    if ((a == 1 && b == 1) || (a == 10 && b == 1) || (a == 1 && b == 10) || (a == 10 && b == 10)) {
        return square.classList.add("corner");
    } else if (a == 1 || a == 10) {
        square.innerHTML = "<span>" + String.fromCharCode(63+b) + "</span>";
        return square.classList.add("border1");
    } else if (b == 1 || b == 10) {
        square.innerHTML = "<span>" + String.fromCharCode(58 - a) + "</span>";
        return square.classList.add("border2");
    } else if ((a + b) % 2 == 0) {
        return square.classList.add("black");
    } else {
        return square.classList.add("white");
    }
    
}

function figeres(a, b) {
    if ((a == 2 && b == 2) || (a == 2 && b == 9)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9820) + "</span>";
    } else if ((a == 2 && b == 3) || (a == 2 && b == 8)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9822) + "</span>";
    4} else if ((a == 2 && b == 4) || (a == 2 && b == 7)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9821) + "</span>";
    } else if (a == 2 && b == 5) {
        return square.innerHTML = "<span>" + String.fromCharCode(9819) + "</span>";
    } else if (a == 2 && b == 6) {
        return square.innerHTML = "<span>" + String.fromCharCode(9818) + "</span>";
    } else if (a == 3 && (b > 1 && b < 10)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9823) + "</span>";
    } else if ((a == 9 && b == 2) || (a == 9 && b == 9)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9814) + "</span>";
    } else if ((a == 9 && b == 3) || (a == 9 && b == 8)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9816) + "</span>";
    4} else if ((a == 9 && b == 4) || (a == 9 && b == 7)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9815) + "</span>";
    } else if (a == 9 && b == 5) {
        return square.innerHTML = "<span>" + String.fromCharCode(9813) + "</span>";
    } else if (a == 9 && b == 6) {
        return square.innerHTML = "<span>" + String.fromCharCode(9812) + "</span>";
    } else if (a == 8 && (b > 1 && b < 10)) {
        return square.innerHTML = "<span>" + String.fromCharCode(9817) + "</span>";
    }
}