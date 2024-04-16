$(function() {
    var url = window.location.href;
    $(".nav a").each(function() {
        if (url == (this.href)) {
            $(this).closest("li").addClass("active");
           $(this).closest("li").parent().parent().addClass("active");
        }
    });
}); 
