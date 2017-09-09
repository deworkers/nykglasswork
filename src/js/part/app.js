$(document).ready(function() {
    

    var scrollTo = function(pos) {
        var pos;
        $('html,body').animate({scrollTop:pos}, 1000);
        return false;
    }

    $('.j-scroll-to').click(function(event) {
        event.preventDefault(); 
        var div = $(this).attr('href');
        var toPos = $(div).offset().top;
        scrollTo(toPos);
    });

    /*Модальные окна*/
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal'); 
    var close = $('.modal__close'); 
    var modal = $('.modal'); 

    // для открытия модалки нужна ссылка вида <a href="#name"></a> и класс "open_modal"
    // будет открыта модалка с id="name"
    open_modal.click( function(event){
        modal.fadeOut(200);
        event.preventDefault(); 
        var div = $(this).attr('href'); 
        overlay.fadeIn(400);
        $(div).fadeIn(400);
        $('html, body').addClass('j-noScroll');
        baseBoxHeight = $('.mobile-menu__right').height();
    });

    close.click(function() {
        modal.fadeOut(200);
        overlay.fadeOut(200);
        $('html, body').removeClass('j-noScroll');
    });

    overlay.click(function(event) {
        if ( $( event.target ).attr('id') == 'overlay' ) {
            $(this).fadeOut(200);
            modal.fadeOut(200);
            $('html, body').removeClass('j-noScroll');
        }
    });

    /*селект*/
    $('.select').click(function(e) {
        if ( !$(this).hasClass('j-open') ) {
            e.stopPropagation();
            $(this).addClass('j-open');
            $('.select-list').hide();
            $('.select').not(this).removeClass('j-open');
            $(this).find('.select-list').slideDown(200);
        } else {
            $(this).find('.select-list').slideUp(200);
            $(this).removeClass('j-open');
        }
    });

    $('body').click(function() {
        $('.select-list').slideUp(200);
        $('.select').removeClass('j-open');
    });

    $('.select-list__one').click(function(e) {
        e.stopPropagation();
        var val = $(this).text();
        $('.select').removeClass('j-open');
        $(this).parents('.select').find('input').val(val);
        $(this).parents('.select').find('.select-list').slideUp(200);
    });

    /*календарь*/
    $( ".date input" ).datepicker( $.datepicker.regional[ "ru" ] );

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    
    var preloadImages = function () {
        for(var i = 0; i<arguments.length; i++)
        $("<img />").attr("src", arguments[i]);
    }

    preloadImages("");

    $('.main-slider-inn').owlCarousel({
        loop:true,
        nav:true,
        margin:0,
        items: 1,
        navText: ['','']
    });


    $('.tabs-menu__one').click(function() {
        $('.tabs-one').hide();
        $('.tabs-menu__one').removeClass('active');
        $(this).addClass('active');
        var idx = $(this).index();
        $('.tabs-one').eq(idx).show();
    });

    $('.spoler-title').click(function() {
        $(this).toggleClass('active').next().slideToggle();
    });

    $('.gallery-inn').owlCarousel({
        loop:true,
        nav:false,
        margin:0,
        items: 1,
        URLhashListener:true
    });

    $('.gallery-nav-inn').owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        items: 3,
        navText: ['','']
    });

    $('.portfolio-nav-inn').owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        items: 8,
        navText: ['','']
    });

    $('.references-inn').owlCarousel({
        loop:true,
        nav:true,
        margin:40,
        items: 3,
        navText: ['','']
    });

    $("#order-form").validate({
       rules:{
            name:{
                required: true
            },
            email:{
                required: true,
                email:  true,
            },
       },

       messages:{
            login:{
                required: "This field is required",
            },
            email:{
                required: "This field is required",
                email: "Wrong email adres",
            }
       }
    });  

});