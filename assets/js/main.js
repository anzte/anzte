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
        "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Information Technology and Services Company</span></span>",
        "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Web Development</span></span>",
        "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span class='anzte-silver'> -</span><span class='anzte-black'> Make people's lives SIMPLE</span></span>"
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
});