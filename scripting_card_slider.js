const swiper = new Swiper('.slider_wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
    //responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView:1
        },
        710:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });
  