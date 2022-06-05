
let pathname = window.location.pathname;
console.log(pathname);
$(document).ready(function () {
  $('.nav__list_links a').each(function () {
    console.log($(this).attr('href'))
    if ($(this).attr('href') == pathname) {
      $(this).addClass('active');
    }
  })
  $('.nav__list_links a').click(function () {
    $('.active').removeClass('active')
    $(this).addClass('active');
  })
});
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('.navbar').addClass('sticky collapse')
  } else{
      $('.navbar').removeClass('sticky collapse')
  }
});
