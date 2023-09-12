$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#mainNav').addClass('navbar-scrolled');
        } else {
            $('#mainNav').removeClass('navbar-scrolled');
        }
    });
});

function refreshPage() {
    location.reload();
}