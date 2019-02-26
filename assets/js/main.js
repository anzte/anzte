 jQuery(document).ready(function(){
     
   "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,
       
    });
  
    $(".section-one-slider-text").typed({
        strings:[
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red btn-light'>te</span><span> -</span><span> Technology People</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> A team</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> Born out of the BOX</span></span>",        
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Information Technology and Services Company</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Web Development</span></span>",
        // "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Make people's lives SIMPLE</span></span>"
        // "<span class='anzte-black'> Make people's lives SIMPLE </span>,"
        "<span class='anzte-black'> We’re an agile, dynamic, full service web agency, offering a wide range of design and development services </span>",
        "<span class='anzte-black'> Website design and development are at the core of our capabilities, with other services adding strength and depth to what we can offer </span>",
        "<span class='anzte-black'> <a href='/' class='anzte-a anzte-black'>Information Technology &amp; Services </a></span>",
        "<span class='anzte-black'> Website Design &amp; Development </span>",
        "<span class='anzte-black'> Web Hosting &amp; Ongoing Support </span>",
        "<span class='anzte-black'> eCommerce Websites </span>",
        "<span class='anzte-black'> eMarketing Campaigns </span>"
        
        ],
         typespeed:0,
         loop:true
         
    });

    $(window).scroll(function(){
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
          // console.log(top>=60);
        }
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
                // console.log('test message remove secondary');
            }
    });

    $("a").on("click", function() {
      var id = $(this).attr('href');
      $('.anzte-padding-top').removeClass('anzte-padding-top'); // remove existing active
      $(id).addClass('anzte-padding-top'); // set current link as active
    });


    //magnific popup: Responsive jQuery Lightbox Plugin - Dmitry Semenov
    $('.works').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{
        enabled:true
      }
    });

});