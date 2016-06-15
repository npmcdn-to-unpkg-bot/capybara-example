$(function () {
  console.log("here");
  $("body")
    .append("<div class='time-button'>Get the current time.</div>")
    .click(function () {
      $.ajax({url: "/timestamp"})
        .done(function (data) {
          $(".time-button").addClass("done");
          $(".time-button").text("The time is " + data + "!");
        });
    });
});
