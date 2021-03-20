 var navLink= $(".scroll");

  navLink.on("click", function(e){
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $(this.hash).offset().top - 110
    }, 1250)

    $(this).parent().addClass('activeLink');
    $(this).parent().siblings().removeClass('activeLink');

  })

  function fullPageAnimation(){
    if ($(window).width() < 426){
      document.body.classList.remove("fullscreen");

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
    }else{

      document.body.classList.add("fullscreen");

      if(document.body.classList.contains("fullscreen")){

        const sections= document.querySelectorAll("section");
        const content= document.querySelector(".main-content");
        const links= document.querySelectorAll(".nav-item");

        let spinValue= 0;
        let canScroll= true;

        window.addEventListener("mousewheel", function(e){

          if(canScroll){
            canScroll= false;
            if(e.deltaY >0){
              if(spinValue< sections.length-1){
                  spinValue +=1;
              }
            }else{
              if(spinValue>0){
                spinValue -=1;
              }
            }

            scrollContent(spinValue);
          }

          setTimeout(function(){
            canScroll=true;
          }, 560);
        })

        function scrollContent(count){
          content.setAttribute("style", "transform: translateY(-" + count*100+ "vh)");

          document.querySelector(".activeLink").classList.remove("activeLink");
          links[count].classList.add("activeLink");
        }


    }


    }

  }

window.addEventListener("load", fullPageAnimation);

window.addEventListener("resize", fullPageAnimation);
