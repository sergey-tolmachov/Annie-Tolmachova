    $(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Bubble",
            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
          });
        },
        swfPath: "../js",
        supplied: "m4a, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
    });


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-150;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 300) {
//         $("#menu").style.color = "rgba(255, 255, 255, 0.9)";
//         }
//         else {
//         $("#menu").style.color = "red";
//       }
// });

$(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
        $( ".menu" ).addClass("menu2");
        }
        else {
        $( ".menu" ).removeClass("menu2");
      }
});
