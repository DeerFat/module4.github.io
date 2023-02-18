$(document).ready(function() {
    function getGreeting(name) {
      var firstLetter = name.charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        return "Goodbye " + name;
      } else {
        return "Hello " + name;
      }
    }

    $("#greet-button").click(function() {
      var name = $("#name-input").val();
      var greeting = getGreeting(name);
      $("#greeting-output").text(greeting);
    });
  });