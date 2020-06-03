$(function(){

	$(".menu-btn-js").on("click" , function(){
		$(".menu__item").slideToggle(700);
	});

	    $("#see-portfolio").on("click", function(e) {

        e.preventDefault();
        var plansOffset = $("#my-work-js").offset().top;

        $("html, body").animate({
            scrollTop: plansOffset
        }, 500);

    });

    $("#js-nav a").on("click", function(e) {

        e.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 20
        }, 1500);

    });



});