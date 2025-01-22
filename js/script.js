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

function checkScreenWidth() {
  const minWidth = 1280;
  const warning = document.querySelector('.warning');
  const bookContainer = document.querySelector('.book-container');

  if (window.innerWidth < minWidth) {
    warning.style.display = 'block';
    bookContainer.classList.add('hidden');
    document.body.style.backgroundColor = '#f8f9fa';
    document.body.style.overflow = 'hidden';
  } else {
    warning.style.display = 'none';
    bookContainer.classList.remove('hidden');
    document.body.style.backgroundColor = '';
    document.body.style.overflow = '';
  }
}

setInterval(checkScreenWidth, 1000);

checkScreenWidth();