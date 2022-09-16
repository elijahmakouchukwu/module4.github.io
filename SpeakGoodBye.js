(function (window) {
  var byeSpeaker = {};
  byeSpeaker.name = ["Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura"];
  var speakWord = "Good Bye";
  byeSpeaker.speak = function () {
    console.log(speakWord  +  byeSpeaker.name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
