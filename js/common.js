jQuery(document).ready(function($){

//Для заполнения всего начального экрана ------------+-------------------------+-------------------------+-------------

    function WindowResize() {
        // $(".js-resize").css("min-height", $(window).height());
        $(".first-full-screan").css("min-height", $(window).height()-50);
    }

    WindowResize();
    $(window).resize(function () {
        WindowResize();
    });

//-------------- For Menu

$(".navbar-collapse a").click(function() {
  //если она не имеет класс dropdown-toggle 
  // Этот клас отвечает за пункты со стрелочкой
  if (!$(this).hasClass("dropdown-toggle")) {
    //то закрыть меню
    $(".navbar-collapse").collapse('hide');
  }
});

//    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // Эта функция делает анимацию при клике на ссылку
    // Необходима отдельная библеотека
    // $('a.js-link').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top - 5)
    //     }, 1250, 'easeInOutExpo');
    //     event.preventDefault();
    // });


//Smooth Scroll
  // $('a[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 250);
  //       return false;
  //     }
  //   }
  // });
//Для табов------------+-------------------------+-------------------------+-------------------------+-------------
        // $('#myTab a').tab('show');
        
        $(".js-tab-image-group .a-tile-main, .js-tab-image-group .inner-link").click(function(event) {
            event.preventDefault();
            var target_href = $(this).attr('href');
            // target_href = target_href.substring(1);
            var element = $('a[href="'+target_href+'"]').parents(".pricer-tab");
            $.scrollTo(element, 1500, {margin:true, offset:-50});
            $('a[href="'+target_href+'"]').tab('show');
        });


        $('.myTab a').click(function (e) {
          e.preventDefault();
          $(this).tab('show');
        });

        // $(...).scrollTo('li:eq(15)', 2500, {easing:'elasout'});


        // $('.dropdown-toggle').dropdown();
            var today = new Date();
            var yr = today.getFullYear();
            var day = today.getUTCDate();
            var month = today.getMonth();
            // var rus_txt_month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
            var rus_txt_month = [" января "," февраля "," марта "," апреля "," мая "," июня "," июля "," августа "," сентября "," октября "," ноября "," декабря "];
            $(".js-year").html(yr);
            $(".js-tomorrow").text(day + rus_txt_month[month] + yr + "г.");


// Плаыный скролл мыши ------------+-------------------------+-------------------------+-------------------------+-------------

//Для табов------------+-------------------------+-------------------------+-------------------------+-------------

    // $(".tab_item").not(":first").hide();
    // $(".js-wrapper .tab").click(function() {
    //     $(".js-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    //     $(".js-wrapper .tab_item").hide().eq($(this).index()).fadeIn()
    // }).eq(0).addClass("active");

//SVG Fallback ------------+-------------------------+-------------------------+-------------------------+-------------
    // if(!Modernizr.svg) {
    //     $("img[src*='svg']").attr("src", function() {
    //         return $(this).attr("src").replace(".svg", ".png");
// ANIMATE + WAYPOINTS
    // /*Анимация элемента по клику*/
    // $("").click(function() {
    //     $("").animateCss('bounce');
    // });
    // /*Анимация элемента*/
    // $("").hover(
    //     function() {
    //         $(this).addClass('animated shake');
    //     },
    //     function() {
    //         $(this).removeClass('animated shake');
    //     }
    // );
    // /*Анимация элемента + отслеживание окончания анимации*/
    // $("").click(function() {
    //     $("").addClass('animated shake');
    // });
    // $("").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //     $("").addClass('fadeOut', function() {$("").hide();});
    // });
    // /*отслеживание появление элемента при скролинге к верхней точке экоана
    // плюс 90% экрана в итоге точка срабатывания анимации*/
    // $(window).scroll(function() {
    //     $("").each(function(){
    //         if ($(this).offset().top < $(window).scrollTop() + $(window).height()*0.9){
    //             $(this).addClass('animated wobble');
    //         }
    //     });
    // });

// FANSYBOX  ------------+-------------------------+-------------------------+-------------------------+-------------
//http://fancyapps.com/
    // $("a.gallery").fancybox({ 
    //         "autoSize" : true,                      
    //         // "padding" : 20,//padding - отступ контента (фотографий) от краев окна.
    //         "imageScale" : true,   //imageScale - true - контент масштабируется по размеру окна, 
    //         //                         // false - окно вытягивается по размеру контента. По умолчанию - true;
    //         // "zoomOpacity" : false,  //zoomOpacity - изменение прозрачности контента во время анимации
    //         // "zoomSpeedIn" : 1000,   //zoomSpeedIn - скорость анимации в мс при увеличении фото (по умолчанию 0);
    //         // "zoomSpeedOut" : 1000,  //zoomSpeedOut - скорость анимации в мс при уменьшении фото (по умолчанию 0) ;
    //         // "zoomSpeedChange" : 1000, //zoomSpeedChange - скорость анимации в мс при смене фото (по умолчанию 0);
    //         // "frameWidth" : 700,  //frameWidth - ширина окна, px (425px - по умолчанию);
    //         // "frameHeight" : 600, //frameHeight - высота окна, px(355px - по умолчанию);
    //         // "overlayShow" : true, //overlayShow - (по умолчанию true) если true, то затенят страницу под всплывающим окном. 
    //         //                         //Цвет задается в jquery.fancybox.css - div#fancy_overlay 
    //         // "overlayOpacity" : 0.8, //overlayOpacity - Прозрачность затемнения (0.3 по умолчанию);
    //         // "hideOnContentClick" :false, //hideOnContentClick -  true закрывает окно по клику по любой его точке (кроме элементов навигации). По умолчанию true;
    //          "centerOnScroll" : false, //centerOnScroll - Если true, то окно центрируется на экране, когда пользователь прокручивает страницу.
    //             next : {
    //                     13 : 'left', // enter
    //                     34 : 'up',   // page down
    //                     39 : 'left', // right arrow
    //                     40 : 'up'    // down arrow
    //             },
    //             prev : {
    //                     8  : 'right',  // backspace
    //                     33 : 'down',   // page up
    //                     37 : 'right',  // left arrow
    //                     38 : 'down'    // up arrow
    //             },
    //                 close  : [27], // escape key
    //                 play   : [32], // space - start/stop slideshow
    //                 toggle : [70]  // letter "f" - toggle fullscreen
    //         });
//E-mail Ajax Send------------+-------------------------+-------------------------+-------------------------+-------------
    //Documentation & Example: https://github.com/agragregra/uniMail
    // $("form").submit(function() { //Change
    //     var th = $(this);
    //     $.ajax({
    //         type: "POST",
    //         url: "mail.php", //Change
    //         data: th.serialize()
    //     }).done(function() {
    //         alert("Thank you!");
    //         setTimeout(function() {
    //             // Done Functions
    //             th.trigger("reset");
    //         }, 1000);
    //     });
    //     return false;
    // });

    // //Chrome Smooth Scroll
    // try {
    //     $.browserSelector();
    //     if($("html").hasClass("chrome")) {
    //         $.smoothScroll();
    //     }
    // } catch(err) {

    // };

    // $("img, a").on("dragstart", function(event) { event.preventDefault(); });


//Цели для Яндекс.Метрики и Google Analytics ------------+-------------------------+-------------------------+-------------

    // $(".count_element").on("click", (function () {
    //     ga("send", "event", "goal", "goal");
    //     yaCounterXXXXXXXX.reachGoal("goal");
    //     return true;
    // }));

    // //SVG Fallback
    // if (!Modernizr.svg) {
    //     $("img[src*='svg']").attr("src", function () {
    //         return $(this).attr("src").replace(".svg", ".png");
    //     });
    // }

//Фиксация меню при прокрутке до уровня  ------------+-------------------------+-------------------------+-------------------------+-------------
    // var h_hght = 225; // высота шапки
    // var h_mrg = 25;     // отступ когда шапка уже не видна
    // var h_mnhght = 0; // максимальный отступ
    //     $(window).scroll(function(){
    //         //отступ сверху
    //         var top = $(this).scrollTop();
    //         // элемент
    //         var elem = $('#top_nav');
    //         //высота элемента
    //         var h_elem = elem.height();

    //         if (top+h_mrg < h_hght) {
    //             elem.css('top', (h_hght-top));
    //         } else {
    //             elem.css('top', h_mrg);
    //         }
    //         if (top+h_mrg+h_elem > h_mnhght && h_mnhght != 0) {
    //             elem.css('top', (h_mnhght-top-h_elem-h_mrg));
    //         }
    //     })

//Аякс отправка форм ------------+-------------------------+-------------------------+-------------------------+-------------
//Документация: http://api.jquery.com/jquery.ajax/
  
    // $("#form").submit(function (e) {
    //     e.preventDefault;
    //     $.ajax({
    //         type: "POST",
    //         url: "mail.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         alert("Спасибо за заявку!");
    //         setTimeout(function () {
    //             $.fancybox.close();
    //         }, 1000);
    //     });
    // });
        // $(window).load(function() {
        //     $(".loader_inner").fadeOut();
        //     $(".loader").delay(400).fadeOut("slow");

        // });

});
//------------+-------------------------+-------------------------+-------------------------+-------------