$(".img-boxg1, .img-boxg2, .img-boxg3, .img-boxg4").click(function () {
    // set css props
    $('.infoboard').css({ 'z-index': 1031 });
    $('.infoboard').css({ 'opacity': 1 });
    $('.infoboard').css({ 'transition': 'opacity 1s, filter 1s' });
    $('.infoboard').css({ 'background-image': $(this).css('background-image') });
    $('.container1').css({ 'filter': 'blur(50px)' });
    $('.container2').css({ 'filter': 'blur(50px)' });
    $('.nav').css({ 'filter': 'blur(2px)' });

    // is-mainline-dev: prevent memory leaks
    $('.infoboard_is-mainline-dev').html('');
    $('.infoboard_is-mainline-dev').css({ 'opacity': 0 });
    $('.infoboard_contacts #gh').css({ 'opacity': 0});

    // load html props and manline dev checks
    var name = $(this).find('h3').text();
    const mainline_devs_identity = [
        '| mainline devs 👨‍💻👑',
        '| mainline devs 👨‍💻',
        '| mainline devs 👩‍💻'
    ];
    for (_ = 0; _ < mainline_devs_identity.length; _++) {
        if (name.indexOf(mainline_devs_identity[_]) != -1) {
            $('.infoboard_is-mainline-dev').html(mainline_devs_identity[_]);
            $('.infoboard_is-mainline-dev').css({ 'opacity': 1 });
            $('.infoboard_contacts #gh').css({ 'opacity': 1});
            name = name.replaceAll(mainline_devs_identity[_], '');
        }
    }
    $('.infoboard_name').html(name);
});
$(".infoboard_close").click(function () {
    $('.infoboard').css({ 'z-index': -1 });
    $('.infoboard').css({ 'opacity': 0 });
    $('.container1').css({ 'filter': 'blur(0)' });
    $('.container2').css({ 'filter': 'blur(0)' });
    $('.infoboard').css({ 'transition': 'filter 1s' });
    $('.nav').css({ 'filter': 'blur(0)' });
});
$(document).mouseup(function (e) {
    var container = $(".infoboard");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.infoboard').css({ 'z-index': -1 });
        $('.infoboard').css({ 'opacity': 0 });
        $('.container1').css({ 'filter': 'blur(0)' });
        $('.container2').css({ 'filter': 'blur(0)' });
        $('.infoboard').css({ 'transition': 'filter 1s' });
        $('.nav').css({ 'filter': 'blur(0)' });
    }
});
$(document).keydown(function (e) {
    var container = $(".infoboard");
    if (e.keyCode == 27) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.infoboard').css({ 'z-index': -1 });
            $('.infoboard').css({ 'opacity': 0 });
            $('.container1').css({ 'filter': 'blur(0)' });
            $('.container2').css({ 'filter': 'blur(0)' });
            $('.infoboard').css({ 'transition': 'filter 1s' });
            $('.nav').css({ 'filter': 'blur(0)' });
        }
    }
});