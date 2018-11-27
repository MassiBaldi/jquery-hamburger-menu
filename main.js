// $('.hamburger').click(function(){
//   $('.ham_menu').toggle()
// });

$('.hamburger').click(function(){
  $('.ham_menu').show(function(){
    $('.hamburger').hide(function(){
    })
  })
});
$('.x').click(function(){
  $('.ham_menu').hide(function(){
    $('.hamburger').show()
  })
});
