var menu = $('select');
var articles = $('article');

menu.on('change', function(){
  if (menu.val() !== 'all') {
      articles.each(function(){
      $(this).addClass('hide');

      if($(this).hasClass(menu.val())) {
        $(this).removeClass('hide');
      }
    })
  } else {
  articles.each(function(){
    $(this).removeClass('hide');
    })
  }
})

var openBtn = $('.open-menu');

openBtn.on('click', function(){
  $('nav').fadeIn();
  $('body').addClass('stop-scroll');
})

var closeBtn = $('.close-menu');

closeBtn.on('click', function(){
  $('nav').fadeOut();
  $('body').removeClass('stop-scroll');
})
