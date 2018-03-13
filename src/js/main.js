//Début formulaire

$.fn.datetimepicker.Constructor.Default = $.extend(
  {},
  $.fn.datetimepicker.Constructor.Default,
  {
    locale: "fr",
    format: "DD MMMM YYYY HH:mm",
    disabledTimeIntervals: [
      [moment({ h: 0 }), moment({ h: 10 })],
      [moment({ h: 13 }), moment({ h: 18 })],
      [moment({ h: 22 }), moment({ h: 24 })]
    ],
    icons: {
      time: "far fa-clock",
      date: "far fa-calendar",
      previous: "far fa-chevron-left",
      next: "far fa-chevron-right",
      today: "far fa-calendar-check-o",
      clear: "far fa-trash",
      close: "far fa-times"
    }
  }
);

(function(global, factory) {
  typeof exports === "object" &&
  typeof module !== "undefined" &&
  typeof require === "function"
    ? factory(require("../moment"))
    : typeof define === "function" && define.amd
      ? define(["../moment"], factory)
      : factory(global.moment);
})(this, function(moment) {
  "use strict";

  var fr = moment.defineLocale("fr", {
    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
      "_"
    ),
    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
      "_"
    ),
    monthsParseExact: true,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Aujourd’hui à] LT",
      nextDay: "[Demain à] LT",
      nextWeek: "dddd [à] LT",
      lastDay: "[Hier à] LT",
      lastWeek: "dddd [dernier à] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function(number, period) {
      switch (period) {
        // TODO: Return 'e' when day of month > 1. Move this case inside
        // block for masculine words below.
        // See https://github.com/moment/moment/issues/3375
        case "D":
          return number + (number === 1 ? "er" : "");

        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case "M":
        case "Q":
        case "DDD":
        case "d":
          return number + (number === 1 ? "er" : "e");

        // Words with feminine grammatical gender: semaine
        case "w":
        case "W":
          return number + (number === 1 ? "re" : "e");
      }
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return fr;
});

$("#datetimepicker1").datetimepicker({ sideBySide: true, debug: true });
$("#datetimepicker1").datetimepicker("sideBySide", true);

//Fin formulaire

$(document).ready(function() {
    $("#menu-icon").click(function() {
        $(this).toggleClass("open");
        $("#site-container").toggleClass("menu-opened");
        $("body").toggleClass("menu-opened");
        $("#navbar-mobile").toggleClass("show");
        if ($("#logo-header img").attr("src") == "./images/logo_black.png") {
            $("#logo-header img").attr("src", "./images/logo_white.png");
        } else {
            $("#logo-header img").attr("src", "./images/logo_black.png");
        }
    });

    $("#navbar-mobile a").click(function() {
        $("#navbar-mobile").removeClass("show");
        $("#logo-header img").attr("src", "./images/logo_black.png");
        $("#site-container").removeClass("menu-opened");
        $("body").removeClass("menu-opened");
        $("#menu-icon").removeClass("open");
    });
});

$(document).ready(function() {
  $("#buttonCard4").click(function() {
    $("div.card4Hover").toggle(2000, "swing");
  });
  $("div.card4Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });
  $("#buttonCard3").click(function() {
    $("div.card3Hover").toggle(2000, "swing");
  });
  $("div.card3Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });

  $("#buttonCard2").click(function() {
    $("div.card2Hover").toggle(2000, "swing");
  });
  $("div.card2Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });
  $("#buttonCard1").click(function() {
    $("div.card1Hover").toggle(2000, "swing");
  });
  $("div.card1Hover").click(function() {
    $(this).css({
      display: "none"
    });
  });
});
