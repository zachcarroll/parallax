// parallax scrolling.
// set data-type="background" and data-speed="whatever" on background div you want to exihibit parallax scrolling.


$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
  $('div[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
		}); // window scroll Ends
 	});	
}); 