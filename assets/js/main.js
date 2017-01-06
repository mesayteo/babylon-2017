$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});
	
	/* ======= Fixed Header animation ======= */ 
        
    $(window).on('scroll load', function() {
         
         if ($(window).scrollTop() > 0 ) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');             
         }
    }); 

    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    
    $('#bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 6000
    });
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();         
    
    /* ======= Instagram ======= */
    //Instafeed.js - add Instagram photos to your website
    //Ref: http://instafeedjs.com/
    
    var userFeed = new Instafeed({
        limit: 24,
        get: 'user',
        userId: 428286876, /* Find out your userID: http://www.pinceladasdaweb.com.br/instagram/user-id/ */
        accessToken: '428286876.5b9e1e6.a571e5d5b5904f5491c5df82adb989fa', /* You need to generate your own token: http://www.pinceladasdaweb.com.br/instagram/access-token/ */
        template: '<a class="item" href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a>',
        resolution: 'low_resolution'
    });
    userFeed.run();
    

    /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 34.1491491,
        lng: -118.102661,
    });
    map.addMarker({
        lat: 34.1491491,
        lng: -118.102661,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">Babylon</h5><p><span class="street-address">162 N Sierra Madre Blvd</span><br><span class="city">Pasadena, CA</span><br><span class="postal-code">91107</span><br></p>'
        }
        
    });
    
    /* ===== Bootstrap DateTime Picker ==== */
    
    $('.make-datepicker').datetimepicker({
        format: 'MMM Do YYYY',
        defaultDate: new Date()
    });
    
    $('.make-timepicker').datetimepicker({
        format: 'LT',
        stepping: 15
    });

    
    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $(".reserve-form").validate({
		messages: {
		    date: {
				required: 'Please enter a date' //You can customise this message
			},
			time: {
				required: 'Please enter a time' //You can customise this message
			},
		    name: {
    			required: 'Please enter your name' //You can customise this message
			},
			email: {
				required: 'Please enter your email' //You can customise this message
			},
			phone: {
				required: 'Please enter your phone number' //You can customise this message
			}
		}
	});
	
	$(".subscribe-form").validate({
		messages: {
			email: {
				required: 'Please enter your email' //You can customise this message
			}
		}
	});
	
	/* ====== Fullscreen Modal ====== */
	// .modal-backdrop classes
    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });
	
	   

});
