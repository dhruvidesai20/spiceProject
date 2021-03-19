  var navLink= $(".scroll");

  navLink.on("click", function(e){
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $(this.hash).offset().top - 110
    }, 1250)

  })


  $(window).on("scroll", function(){
    var scrollBarLocation= $(this).scrollTop();

    navLink.each(function(){
      var sectionOffset= $(this.hash).offset().top - 130;

      if ( sectionOffset <= scrollBarLocation ) {
        $(this).parent().addClass('activeLink');
        $(this).parent().siblings().removeClass('activeLink');
      }
    })
    })

   
