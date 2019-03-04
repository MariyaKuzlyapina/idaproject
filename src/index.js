"use strict";
import $ from 'jquery';
import './fonts/index.scss';
import './scss/index.scss';

$(function () {

    $('.card__button').click(function (event) {
        // присваиваем переменные
        var codeCvv = $('.bank-right__code'); 
        var cardNumber = $('.bank-left__field input');
        var userName = $('.bank-left__name');
        var regexp = /^[a-z\s]+$/i;

        // чтобы не было краной границы при повторном вводе данных
        if ($('input').hasClass('valid-error')) {
            $('input').removeClass('valid-error');
        }

        // Создам общую функцию для валидации, который буду вызывать при необходимости
        function inputValid(object) {
            object.addClass('valid-error');
            event.preventDefault();
        }

        // валидация cvv 
        if (codeCvv.val().length !== 3 || (!$.isNumeric(codeCvv.val()))) {
            inputValid (codeCvv);
        }

        // валидация номера карты
        $.each(cardNumber, function(key, value) {
            if ($(value).val().length !== 4 || (!$.isNumeric($(value).val()))) {
                inputValid (cardNumber);
            }
        });

        // валидация держателя карты
        if((userName.val().length < 4) || (!regexp.test(userName.val()))) {
            inputValid (userName);
        }
    });

    // гамбургер 
    $('.tablet-mobile').click(function() {
        $('.navigation').toggleClass('menu-open');
    });
    $('.navigation__point').click(function() {
        $('.navigation').toggleClass('menu-open');
    });

    // перехват фокуса при вводе номера карты
    $('.bank-left__input').keyup(function() {
        if (this.value.length == 4) {
            var el = $(this);
            el.next('.bank-left__input').focus();
        }
    });
});
