 jQuery(document).ready(function(){
     
   "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,
       
    });
  
     $(".section-one-slider-text").typed({
        strings:[
        "<span><span class='anzte-black'>anz</span><span class='anzte-red btn-light'>te</span><span> -</span><span> Technology People</span></span>",
        "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> A team</span></span>",
        "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> Born out of the BOX</span></span>",
        "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> Make people's lives SIMPLE</span></span>",
        "<span><span class='anzte-black'>anz</span><span class='anzte-red'>te</span><span> -</span><span> Information Technology and Services Company</span></span>"        
        ],
         typespeed:0,
         loop:true
         
     });
});