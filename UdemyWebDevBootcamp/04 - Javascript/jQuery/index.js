// jQuery examples
// $("h1").addClass("big-title");
$("h1").html("goodbye");
$("button").css("background-color", "orange");
$("a").attr("href", "https://bing.com");

// Callback function examples
$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("button").click(function() {
  // $("h1").toggleClass("big-title");
  // $("h1").fadeToggle();
  $("h1").slideToggle();
});

$(document).keydown(function(e) {
  $("h1").text(e.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "orange");
});
