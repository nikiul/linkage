// бургер и бокове меню
const headerBurger = document.querySelector('.header__burger');
const headerBurgerIcon = document.querySelector('.header__burger-icon');
const mobileNavBurger = document.querySelector('.mobile__nav-burger')
const mobileNavBurgerIcon = document.querySelector('.mobile__nav-burger-icon')
const headerNav = document.querySelector('.mobile__menu');
const bodyLock = document.querySelector('body')

headerBurger.addEventListener('click', function(){
    headerNav.classList.add('mobile__menu_active');
    headerBurgerIcon.classList.add('header__burger-icon_active');
    mobileNavBurgerIcon.classList.add('mobile__nav-burger-icon_active');
    bodyLock.classList.add('body__lock');
})

mobileNavBurger.addEventListener('click', function(){
    headerNav.classList.remove('mobile__menu_active');
    headerBurgerIcon.classList.remove('header__burger-icon_active');
    mobileNavBurgerIcon.classList.remove('mobile__nav-burger-icon_active');
    bodyLock.classList.remove('body__lock');
})
//


// скролл к якорным ссылкам
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 0
    }, 800);
});
//


$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});


// липкий хедер
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
//


// Аккордеон
const questionsItem = document.querySelectorAll('.method__item');

questionsItem.forEach(function(item) {
    const accordeonTitleIcon = item.querySelector('.method__icon')
    const accordeonTitle = item.querySelector('[data-name="accordeon-title"]')

    accordeonTitle.addEventListener("click", function(){
        accordeonTitleIcon.classList.toggle("method__icon_active")
        let loock = this.nextElementSibling;
        if (loock.style.maxHeight){
        loock.style.maxHeight = null;
        } else {
            loock.style.maxHeight = loock.scrollHeight + "px";
        }
    })
})
//

// табы
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tablinks_active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tablinks_active";
}

if (document.getElementById("defaultOpen") !== null) {
    document.getElementById("defaultOpen").click();
}
//

//
const modalCloseBtnFirst = document.querySelector('.modal__cases-btn-close_first');
const modalCloseBtnSecond = document.querySelector('.modal__cases-btn-close_second');
const modalCloseBtnThird = document.querySelector('.modal__cases-btn-close_third');
const modalCloseBtnFourth = document.querySelector('.modal__cases-btn-close_fourth');
const modalCloseBtnFifth = document.querySelector('.modal__cases-btn-close_fifth');
const modalCloseBtnSixth = document.querySelector('.modal__cases-btn-close_sixth');
const modalCloseBtnThanks = document.querySelector('.modal__thanks-close-btn');

const modalWrap = document.querySelector('.modal__wrap');
const modalWrapFirst = document.querySelector('.modal__wrap_first');
const modalWrapSecond = document.querySelector('.modal__wrap_second');
const modalWrapThird = document.querySelector('.modal__wrap_third');
const modalWrapFourth = document.querySelector('.modal__wrap_fourth');
const modalWrapFifth = document.querySelector('.modal__wrap_fifth');
const modalWrapSixth = document.querySelector('.modal__wrap_sixth');
const modalWrapThanks = document.querySelector('.modal__wrap-thanks');
const modalWrapForm = document.querySelector('.modal__wrap-form')

const casesItemFirst = document.querySelector('.cases__item_first');
const casesItemSecond = document.querySelector('.cases__item_second');
const casesItemThird = document.querySelector('.cases__item_third');
const casesItemFourth = document.querySelector('.cases__item_fourth');
const casesItemFifth = document.querySelector('.cases__item_fifth');
const casesItemSixth = document.querySelector('.cases__item_sixth');

const btnConsultation = document.querySelector('.consultation-btn');
const heroBtn = document.querySelector('.hero-btn');
const headerCall = document.querySelector('.header__call');
const headerBtn = document.querySelector('.header__btn');
const headerBtnTablet = document.querySelector('.header__btn_tablet');
const btnModalForm = document.querySelector('.btn__modal-form');

casesItemFirst.addEventListener('click', function(){
    modalWrapFirst.classList.add('modal__wrap_first-active')
})

modalCloseBtnFirst.addEventListener('click', function(){
    modalWrapFirst.classList.remove('modal__wrap_first-active')
})


casesItemSecond.addEventListener('click', function(){
    modalWrapSecond.classList.add('modal__wrap_second-active')
})

modalCloseBtnSecond.addEventListener('click', function(){
    modalWrapSecond.classList.remove('modal__wrap_second-active')
})


casesItemThird.addEventListener('click', function(){
    modalWrapThird.classList.add('modal__wrap_third-active')
})

modalCloseBtnThird.addEventListener('click', function(){
    modalWrapThird.classList.remove('modal__wrap_third-active')
})


casesItemFourth.addEventListener('click', function(){
    modalWrapFourth.classList.add('modal__wrap_fourth-active')
})

modalCloseBtnFourth.addEventListener('click', function(){
    modalWrapFourth.classList.remove('modal__wrap_fourth-active')
})


casesItemFifth.addEventListener('click', function(){
    modalWrapFifth.classList.add('modal__wrap_fifth-active')
})

modalCloseBtnFifth.addEventListener('click', function(){
    modalWrapFifth.classList.remove('modal__wrap_fifth-active')
})


casesItemSixth.addEventListener('click', function(){
    modalWrapSixth.classList.add('modal__wrap_sixth-active')
})

modalCloseBtnSixth.addEventListener('click', function(){
    modalWrapSixth.classList.remove('modal__wrap_sixth-active')
})


btnConsultation.addEventListener('click', function(){
    modalWrapThanks.classList.add('modal__wrap-thanks_active')
})

modalCloseBtnThanks.addEventListener('click', function(){
    modalWrapThanks.classList.remove('modal__wrap-thanks_active')
})


heroBtn.addEventListener('click', function(){
    modalWrapForm.classList.add('modal__wrap-form_active')
})


headerCall.addEventListener('click', function(){
    modalWrapForm.classList.add('modal__wrap-form_active')
})


headerBtn.addEventListener('click', function(){
    modalWrapForm.classList.add('modal__wrap-form_active')
})


headerBtnTablet.addEventListener('click', function(){
    modalWrapForm.classList.add('modal__wrap-form_active')
})


btnModalForm.addEventListener('click', function(){
    modalWrapForm.classList.remove('modal__wrap-form_active')
})


btnModalForm.addEventListener('click', function(){
    modalWrapForm.classList.remove('modal__wrap-form_active')
    modalWrapThanks.classList.add('modal__wrap-thanks_active')
})
//


// Закрваем модалку при клике вне модалки
window.onclick = function(event) {
    if (event.target == modalWrapFirst) {
        modalWrapFirst.classList.remove('modal__wrap_first-active');
    } else if (event.target == modalWrapSecond) {
        modalWrapSecond.classList.remove('modal__wrap_second-active');
    } else if (event.target == modalWrapThird) {
        modalWrapThird.classList.remove('modal__wrap_third-active');
    } else if (event.target == modalWrapFourth) {
        modalWrapFourth.classList.remove('modal__wrap_fourth-active');
    } else if (event.target == modalWrapFifth) {
        modalWrapFifth.classList.remove('modal__wrap_fifth-active');
    } else if (event.target == modalWrapSixth) {
        modalWrapSixth.classList.remove('modal__wrap_sixth-active');
    } else if (event.target == modalWrapThanks) {
        modalWrapThanks.classList.remove('modal__wrap-thanks_active');
    } else if (event.target == modalWrapForm) {
        modalWrapForm.classList.remove('modal__wrap-form_active');
    }
}
//


// маска номером
jQuery(function($){
    $("#consultation__tel").mask("+7 (999) 999 99 99",{placeholder:"_"});

    $("#ordering__tel").mask("+7 (999) 999 99 99",{placeholder:"_"});

    $("#get__tel").mask("+7 (999) 999 99 99",{placeholder:"_"});

    $("#modal__form-tel").mask("+7 (999) 999 99 99",{placeholder:"_"});

    //Ловим событие изменения инпута
    $('body').on('keyup', '#modal__form-tel', function() {
        //Проверяем длинну символов в веденном импуте для телефона (через рекурсию удаляем все кроме цифр, по логике их должно быть 11
        if($(this).val().replace(/[^0-9]/g,"").length < 11) {
            //Если символов меньше 11 то отображаем предупреждение
            $(this).parent().find('.modal__form-error').css({
                'opacity':'100',
            })
            // добавляем красную рамку, если поле заполнено неверно
            $(this).css({
                'border':'2px solid #E31A3B'
            })
            //Делаем наш импут черным на случай если опять стерли символы
            $(this).css({
                'color':'black'
            })
            //Выходим из функции что бы дальше функция не выполнялась
            return false;
        }
        //Если условие ложно и символов 11 прячем красное предупреждение
        $(this).parent().find('.modal__form-error').css({
            'opacity':'0'
        })
        // убираем красную рамку, если поле заполнено верно
        $(this).css({
            'border':'transparent'
        })
    })
});