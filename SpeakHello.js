(function (window) {

  var helloSpeaker = {};

  helloSpeaker.name = ["John", "Jen", "Jason", "Jim"];

  var speakWord = "Hello";

  helloSpeaker.speak = function () {

    console.log(speakWord  +  helloSpeaker.name);

  }



  window.helloSpeaker = helloSpeaker;



})(window);
