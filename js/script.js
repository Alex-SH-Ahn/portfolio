$(document).ready(function () {
  $(".highlight-container").hover(
    function () {
      const titleWidth = $(this).find(".project-title").width();
      $(this).find(".highlight").css("width", titleWidth + "px");
    },
    function () {
      $(this).find(".highlight").css("width", "0px");
    }
  );
  $(".highlight-container").hover(
    function () {
      const titleWidth = $(this).find(".contact-item").width();
      $(this).find(".highlight").css("width", titleWidth + "px");
    },
    function () {
      $(this).find(".highlight").css("width", "0px");
    }
  );
});
