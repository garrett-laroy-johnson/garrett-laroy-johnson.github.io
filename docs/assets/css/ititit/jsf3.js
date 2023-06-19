$(window).load(function () {
    $(".popup").click(function(){
       $('.popupscreen').show();
    });
    $('.popupscreen').click(function(){
        $('.popupscreen').hide();
    });
    $('.closebutton').click(function(){
        $('.popupscreen').hide();
    });
});
