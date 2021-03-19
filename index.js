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

    // var navLink= $(".scroll");
    //
    // navLink.on("click", function(e){
    //   e.preventDefault();
    //   $("body,html").animate({
    //     scrollTop: $(this.hash).offset().top - 110
    //   }, 1250)
    //
    // })

  //   var sec= $("section");
  //
  // window.addEventListener("mousewheel", function(e){
  //   const delta= e.deltaY;
  //   var activeSec= Number(document.querySelector(".activeLink").classList[1]);
  //   if(delta > 0){
  //     var classnumNxt= activeSec +1;
  //     var classnumNxtStr= classnumNxt.toString();
  //     var secOffset= $(".sec" + classnumNxt).offset().top;
  //     window.scrollTo(0, secOffset);
  //   }else{
  //     var classnumNxt= activeSec +1;
  //     var classnumNxtStr= classnumNxt.toString();
  //     var secOffset= $(".sec" + classnumNxt).offset().top;
  //     window.scrollTo(0, secOffset);
  //   }
  //
  //    var wheelTop= e.pageY;
  //
  //   navLink.each(function(){
  //     var sectionOffset= $(this.hash).offset().top - 130;
  //
  //
  //
  //     if ( sectionOffset <= window.pageYOffset) {
  //       $(this).parent().addClass('activeLink');
  //       $(this).parent().siblings().removeClass('activeLink');
  //     }
  //   })
  //   })
  //   //
  //   // $(window).on("scroll", function(){
  //   //   var scrollBarLocation= $(this).scrollTop();
  //   //
  //   //
  //   //   })
    //   })
