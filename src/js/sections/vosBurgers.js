$(document).ready(function() {
    var num = 0;

    $("#icons-vos-burgers button").click(function() {
        var orderBtn = $("#send-order");

        if ($(this).hasClass("active")) {
            num -= 1;
        } else {
            if (num >= 5) {
                return;
            }
            num += 1;
        }

        $(this).toggleClass("active");
        $(this)
            .next()
            .toggleClass("active");

        if (num > 0) {
            orderBtn.prop("disabled", false);
        } else {
            orderBtn.prop("disabled", true);
        }

        if (num <= 1) {
            $("#num-ingredients").text(num + " ingrédient sélectionné");
        } else {
            $("#num-ingredients").text(num + " ingrédients sélectionnés");
        }
    });
});
