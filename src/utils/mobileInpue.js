window.addEventListener('resize', function () {
  $('#wrp').scrollTop(0)
  // if(document.activeElement.tagName === 'INPUT'){
  //   $('#HasInputContent').height($(document).height())
  //   $('#HasInputContent').scrollTop($(document.activeElement).position().top + $('#HasInputContent').scrollTop() + 30)
  // }
})

$('input[type="text"],textarea').blur(function() {
  
  setTimeout(() => {
    $(window).scrollTop(0)
  })
  
  // alert($(window).scrollTop())
  // alert($('#wrp').scrollTop())
  $('#wrp').scrollTop(0)
  // setTimeout(() => {
  // $('#HasInputContent').height($(document).height())
  // $('#HasInputContent').scrollTop($(document.activeElement).position().top + $('#HasInputContent').scrollTop() + 30)
  // }, 300)
})

$('input[type="text"],textarea').on('click', function () {
  
  if(!isAndroid()) {
    return
  }
  
  var target = this;
  // if($(target).hasClass('name')) {
  //   return
  // }

  setTimeout(function () {  
    target.scrollIntoViewIfNeeded();
  }, 500);
});

function isAndroid() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

  return isAndroid
}

$('body').on('blur', 'input,select', function(event) {
  setTimeout(() => {
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.scrollTo(0, Math.max(scrollHeight - 1, 0));
  }, 100);
});