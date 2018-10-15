$(document).ready(function() {
  // Here we are provided an initial array of letters.
  // Use this array to dynamically create buttons on the screen.
  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "_"
  ];

  // DYNAMICALLY CREATE BUTTONS
  // =================================================================================

  // 1. Create a for-loop to iterate through the letters array.
  for (var i = 0; i < letters.length; i++) {
    // Inside the loop...

    //used case statement to keep buttons dynamically generated but allow
    //for the space key to be called space. Had to use hypen for spaces
    //because the regex stuff  needed to detect white space is a little murky to me at this point.

    switch (i) {
      case 27: //funny thing is...if I set this to 26 it will change the button, but it doens't do so for whitespace or for a hyphen.
        letterBtn.text("Space");
        break;

      case 13:
        //allows for 2x 13-button rows
        $("#buttons").append(hRule);

      default:
        // 2. Create a variable named "letterBtn" equal to $("<button>");
        //also added in a spacer div to give the interface a more pleasant
        //appearance.
        var letterBtn = $("<button>");
        var buttonSpacer = $("<div>");
        var hRule = $("<hr>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn.addClass("btn btn-primary  btn-lg");
        buttonSpacer.addClass("divider");
        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.attr("id", letters[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn.text(letters[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(letterBtn);
        $("#buttons").append(buttonSpacer);
    }
  }
});
