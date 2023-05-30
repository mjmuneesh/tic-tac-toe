// Winning pattern
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

// Player 'X' plays first
let Turn = "X";
let count = 0;
let winSet = [];

// Winning logic
function winChecker() {
    for (let arr of winningPattern) {
        for (let item of arr) {
            let value = $("#" + item).text();
            if (value === Turn) {
                count++;
                winSet.push(item);
            }
        }
        if (count === 3) {
            $(".container").html("")
                $("#message").html(`<h3 id="winningMsg">Player ${Turn} wins.</h3>`)
                $("#restart").css("display", "none")
                $(".popup").css("display", "block")
;            break;
        }
        else{
            count = 0;
        }
    }
}

// Display X/O on click
$(".button-options").on("click", function () {
    if (count != 3 && $(this).text()=="") {
        $(this).text(Turn);
        winChecker();
        if (Turn === "X") {
            Turn = "O";
        } else {
            Turn = "X";
        }
    }
});
