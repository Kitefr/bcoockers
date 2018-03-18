// Manage validation on forms.
(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var formulaire = document.querySelector(".needs-validation");
            // Loop over them and prevent submission
            formulaire.addEventListener(
                "submit",
                function(event) {
                    if (formulaire.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        event.preventDefault();
                        event.stopPropagation();
                        $("#reservationSentModal").modal();
                    }
                    formulaire.classList.add("was-validated");
                },
                false
            );
        },
        false
    );
})();

// Validation Formulaire
$(document).ready(function() {
    // Capitilize first letter on Name change
    $("#form-reservation #name").change(function() {
        var values = $(this)
            .val()
            .split(" ");

        $(this).val(
            values
                .map(function(x) {
                    x.replace(/\b\w/g, function(l) {
                        l.toUpperCase();
                    });
                })
                .join(" ")
        );
    });

    // Hide form p element by default
    $("textarea#message")
        .next()
        .hide();

    // Chow on change
    $("#resa-select").change(function() {
        var message = $("textarea#message");
        var p = message.next();
        var btn = $("#send-resa");

        if (this.value == 5) {
            message.hide();
            p.show();
            btn.attr("disabled", true);
        } else {
            message.show();
            p.hide();
            btn.attr("disabled", false);
        }
    });

    // On modal close, clear
    $("#reservationSentModal").on("hidden.bs.modal", function(e) {
        $("#form-reservation")
            .find("input,textarea")
            .val("")
            .end()
            .find("select")
            .val(1)
            .end();

        $("#form-reservation").removeClass("was-validated");
    });
});

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
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
        ),
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
