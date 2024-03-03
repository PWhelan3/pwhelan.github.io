



document.addEventListener("DOMContentLoaded", function () {
    // Get the loading screen and loading icon elements
    const loadingScreen = document.getElementById("loadingScreen");
    const loadingIcon = document.querySelector(".loading-icon");

    document.addEventListener("DOMContentLoaded", function () {
        // Hide loading screen after 5 seconds
        setTimeout(function () {
            document.getElementById("loadingScreen").style.display = "none";
        }, 1000);
    });

    // Set a timeout to hide the loading screen and play the slideOff animation after 5 seconds
    setTimeout(function () {
        // Play the slideOff animation
        loadingScreen.style.animation = "slideOff .5s ease-out forwards";

        // Hide the loading screen after the slideOff animation completes
        loadingScreen.addEventListener("animationend", function () {
            loadingScreen.style.display = "none";
        });
    }, 1000);
});





    // // Array of text elements
    // var textOptions = [
    //     "recent graduate",
    //     "practising artist",
    //     "critical thinker",
    //     "curious problem solver",
        
    //     // Add more text elements as needed
    //   ];
  
    //   function changeText() {
    //     // Get a random index from the array
    //     var randomIndex = Math.floor(Math.random() * textOptions.length);
  
    //     // Get the text element and set its content to the randomly chosen text
    //     var span1 = document.getElementById("span1");
    //     span1.textContent = textOptions[randomIndex];
    //   }




      var targetWords = [
        "must",
        "have to",
        "should"
    ];

    function changeRandomWord() {
      // Get all elements with the class 'target-word'
      var wordElements = document.getElementsByClassName("interchangables");

      // Loop through each target word element and replace its text content
      for (var i = 0; i < wordElements.length; i++) {
        // Get a random index from the array
        var randomIndex = Math.floor(Math.random() * targetWords.length);

        // Set the text content to the randomly chosen target word
        wordElements[i].textContent = targetWords[randomIndex];
      }
    }