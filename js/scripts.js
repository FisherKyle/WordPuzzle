$(document).ready(function() {
  $("form#sentenceBox").submit(function(event) {
    event.preventDefault();
    var vowels = ['a','o','e','u','i'];
    var sentenceWhole = $("#inputSentence").val();
    var sentenceSplit = sentenceWhole.split("");
    var newArr = sentenceSplit.map(function(letter) {

      for (var index = 0; index < vowels.length; index += 1){ // start for loop here
        if (letter === vowels[index]) { // to cycle through our vowels like this
          return "-"; // usually only one return
        }
      }
      return letter; // but 2 here because we used a conditional within our map function
    });
    var joinedSentence = newArr.join("");
    $("#resultBox").text("Try and guess what this puzzle says: " + joinedSentence);
    $("#inputSentence").hide();
    $(".btn").hide();
  });
});
