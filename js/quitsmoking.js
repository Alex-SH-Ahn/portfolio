$(document).ready(function () {
  $(".quit-mission-card").hover(
    function () {
      $(this).find("img").attr("src", "/assets/quit/quit-card-before.png");
    },
    function () {
      $(this).find("img").attr("src", "/assets/quit/quit-card-after.png");
    }
  );
});
