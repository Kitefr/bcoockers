$(document).ready(function () {

    //$('div.date').click(function () {
    //$('input.datepcker').datepicker({
    //    uiLibrary: 'bootstrap4',
    //    showButtonPanel: false,
    //    format: 'dd mmmm yyyy',


    let datepcker = $('.datepcker').datepicker();
    $('input.datepcker').click(() => {
        datepcker.open();
    })
    //});

    $("input.datepcker").focus(function () {
        $(this).css('background-color', 'blue')
    })

    $("input.datepcker").blur(function () {
        $("input.datepcker").css('background-color', 'white')

    })


});