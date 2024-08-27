
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }
  

  // big heading//
  function firstPageAnim(){
    var tl = gsap.timeline();

    tl.to(".first-big-heading",{
        y:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })

        .to(".second-big-heading",{
            y:0,
            duration:1.5,
            delay:-1,
            ease:Expo.easeInOut,
        })

}
firstPageAnim();
  
$('.owl-custom').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText: ["<div class='slider-arrow nav-button-prev'></div>", "<div class='slider-arrow nav-button-next'></div>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})



	 
	// mega menu
$(function () {
    $('.toggle-menu').click(function(){
       $('.exo-menu').toggleClass('display');
       
    });
    
   });
   
     




// owl-trending//

$('.owl-custom-trending').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<div class='slider-arrow nav-button-prev'></div>", "<div class='slider-arrow nav-button-next'></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  })









//tooltip//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))