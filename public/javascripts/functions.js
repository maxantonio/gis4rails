// GIS frontpage js functions//
// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if ( navigator.appVersion.indexOf("Mac")!=-1 ) 
	jQuery('html').addClass('osx');

// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";


/* --------------------------------------------------------	
	 External Links
   --------------------------------------------------------	*/	

	  $(window).load(function() {
			$('a[rel=external]').attr('target','_blank');	
		});

/* --------------------------------------------------------	
	 Tooltips
   --------------------------------------------------------	*/	

    $('body').tooltip({
        delay: { show: 300, hide: 0 },
        selector: '[data-toggle=tooltip]:not([disabled])'
    });
    
/* --------------------------------------------------------	
	 Back To Top
   --------------------------------------------------------	*/	
    
		$('.back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		}); 
    
/* --------------------------------------------------------	
	 Inc Dec
   --------------------------------------------------------	*/	
    
    $(function() {
      $(".inc").click(function() { var $button = $(this); var old = $button.parent().find("input").val(); var newVal = parseFloat(old) + 1; $button.parent().find("input").val(newVal); }); 
      
      $(".dec").click(function() { var $button = $(this); var old = $button.parent().find("input").val(); var newVal = parseFloat(old) - 1; $button.parent().find("input").val(newVal); }); 
    }); 
    
/* --------------------------------------------------------	
	 Dynamic Progress Bar
   --------------------------------------------------------	*/
  
    $(window).load(function(){    
      $('.bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
    });
    
/* --------------------------------------------------------	
	 Back To Top Button
   --------------------------------------------------------	*/	

	(function() {   
  		$('<a id="back-to-top"></a>').appendTo($('body'));

			$(window).scroll(function() {
				if($(this).scrollTop() != 0) {
					$('#back-to-top').fadeIn();	
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			
			$('#back-to-top').click(function() {
				$('body,html').animate({scrollTop:0},800);
			});	        
	})();  

/* --------------------------------------------------------	
	 Responsive Navigation
   --------------------------------------------------------	*/	

  jQuery('header nav').meanmenu({
    meanMenuClose: "X", // single character you want to represent the close menu button
    meanMenuCloseSize: "22px", // set font size of close button
    meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
    meanRevealPosition: "right", // left right or center positions
    meanRevealPositionDistance: "0", // Tweak the position of the menu
    meanRevealColour: "", // override CSS colours for the reveal background
    meanRevealHoverColour: "", // override CSS colours for the reveal hover
    meanScreenWidth: "979", // set the screen width you want meanmenu to kick in at
    meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
    meanShowChildren: true, // true to show children in the menu, false to hide them
    meanExpandableChildren: true, // true to allow expand/collapse children
    meanExpand: "+", // single character you want to represent the expand for ULs
    meanContract: "-", // single character you want to represent the contract for ULs
    meanRemoveAttrs: false // true to remove classes and IDs, false to keep them
  });

  //Move Nav
   
  $(window).scroll(function(){ 
   if ($(this).scrollTop() > 50){ 
  	$('.navbar').addClass("navbar-move");
    $('.navbar .nav > li > a').addClass("menu-scroll-a");
    $('.logo').addClass("navbar-move");
   } 
   else{
  	$('.navbar').removeClass("navbar-move");
    $('.navbar .nav > li > a').removeClass("menu-scroll-a");
    $('.logo').removeClass("navbar-move");
   }
  }); 
  
/* --------------------------------------------------------	
	 Owl Carousel
   --------------------------------------------------------	*/
    
  $(".carousel-top-navigation").owlCarousel({
    slideSpeed : 600,
    paginationSpeed: 2000, 
    autoPlay: false,
    items : 6,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [960,4],
    itemsTablet: [768,3],
    itemsMobile : [480,2],
    navigation:true,
    pagination:false,
    navigationText : false
  });                
  
/* --------------------------------------------------------	
	 Magnific Popup
   --------------------------------------------------------	*/ 

    $('.image-link').magnificPopup({type:'image'});

  	$('.popup-gallery').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: true,
  			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
  			}
  		}
  	});

/* --------------------------------------------------------	
	 Portfolio 
   --------------------------------------------------------	*/	
  
  (function() {
   
    $(window).load(function(){
    	// container
    	var $container = $('#portfolio-items');
    	function filter_projects(tag)
    	{
    	  // filter projects
    	  $container.isotope({ filter: tag });
    	  // clear active class
    	  $('li.act').removeClass('act');
    	  // add active class to filter selector
    	  $('#portfolio-filter').find("[data-filter='" + tag + "']").parent().addClass('act');
    	}
    	if ($container.length) {
    		// conver data-tags to classes
    		$('.project').each(function(){
    			var $this = $(this);
    			var tags = $this.data('tags');
    			if (tags) {
    				var classes = tags.split(',');
    				for (var i = classes.length - 1; i >= 0; i--) {
    					$this.addClass(classes[i]);
    				};
    			}
    		})
    		// initialize isotope
    		$container.isotope({
    		  // options...
    		  itemSelector : '.project',
    		  layoutMode   : 'fitRows'
    		});
    		// filter items
    		$('#portfolio-filter li a').click(function(){
    			var selector = $(this).attr('data-filter');
    			filter_projects(selector);
    			return false;
    		});
    		// filter tags if location.has is available. e.g. http://example.com/work.html#design will filter projects within this category
    		if (window.location.hash!='')
    		{
    			filter_projects( '.' + window.location.hash.replace('#','') );
    		}
    	}
      
    })

	})();

/* --------------------------------------------------------	
	 Parallax
   --------------------------------------------------------	*/	

    var detectmob = false;	
    if(navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {							
        detectmob = true;
    }
    
    if (detectmob === true) {
      $( '.parallax' ).each(function(){
    			$(this).addClass('parallax-mobile');
    	});
    }
    else {
        $( '#parallax-one' ).parallax();
        $( '#parallax-two' ).parallax();
        $( '#parallax-three' ).parallax();
    }  

/* --------------------------------------------------------	
	 Flex Initialize
   --------------------------------------------------------	*/	

    $(window).load(function() {
    
      $('.flex-1').flexslider({
        animation: "slide",
        slideshow: false,
        useCSS : false,
        animationLoop: true 	
      });
     
      jQuery('.flex-1 .flex-direction-nav .flex-next').html('<i class="fa fa-angle-right"></i>');
      jQuery('.flex-1 .flex-direction-nav .flex-prev').html('<i class="fa fa-angle-left"></i>'); 
     
      $('.flex-2').flexslider({
        animationLoop: false,
    		animation: 'slide',
        useCSS : false
    	 });     
    
      $('.flex-3').flexslider({
        animation: "slide",
        slideshow: false,
        useCSS : false,
        animationLoop: false 	
      });
     
      jQuery('.flex-3 .flex-direction-nav .flex-next').html('<i class="fa fa-angle-right"></i>');
      jQuery('.flex-3 .flex-direction-nav .flex-prev').html('<i class="fa fa-angle-left"></i>'); 
    
      $('.flex-4').flexslider({
        animationLoop: true,
    		animation: 'slide',
        slideshow: true,
        useCSS : false
    	 }); 

    
    }); 

/* --------------------------------------------------------	
	 Fitvids
   --------------------------------------------------------	*/	

    $(window).load(function() {
      $("body").fitVids();
    });

/* --------------------------------------------------------	
	 Refine Slider
   --------------------------------------------------------	*/	
  
  $(window).load(function() {
  
    //main slider
    $('.main-slider-direct-nav').refineSlide({
      maxWidth              : 1920,      // Max slider width - should be set to image width
      transition            : 'random',  // String (default 'cubeV'): Transition type ('custom', random', 'cubeH', 'cubeV', 'fade', 'sliceH', 'sliceV', 'slideH', 'slideV', 'scale', 'blockScale', 'kaleidoscope', 'fan', 'blindH', 'blindV')
      fallback3d            : 'random', // String (default 'sliceV'): Fallback for browsers that support transitions, but not 3d transforms (only used if primary transition makes use of 3d-transforms)
      customTransitions     : [],       // Arr (Custom transitions wrapper)
      perspective           : 1000,     // Perspective (used for 3d transforms)
      useThumbs             : false,     // Bool (default true): Navigation type thumbnails
      useArrows             : true,    // Bool (default false): Navigation type previous and next arrows
      thumbMargin           : 3,        // Int (default 3): Percentage width of thumb margin
      autoPlay              : false,    // Int (default false): Auto-cycle slider
      delay                 : 5000,     // Int (default 5000) Time between slides in ms
      transitionDuration    : 800,      // Int (default 800): Transition length in ms
      startSlide            : 0,        // Int (default 0): First slide
      keyNav                : true,     // Bool (default true): Use left/right arrow keys to switch slide
      captionWidth          : 50,       // Int (default 50): Percentage of slide taken by caption
      arrowTemplate         : '<div class="rs-arrows"><a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a></div>', // String: The markup used for arrow controls (if arrows are used). Must use classes '.rs-next' & '.rs-prev'
      onInit                : function () {}, // Func: User-defined, fires with slider initialisation
      onChange              : function () {}, // Func: User-defined, fires with transition start
      afterChange           : function () {}  // Func: User-defined, fires after transition end
  
    });
    jQuery('.rs-arrows .rs-next').html('<i class="fa fa-angle-right"></i>');
    jQuery('.rs-arrows .rs-prev').html('<i class="fa fa-angle-left"></i>');
  
  });      
  
/* --------------------------------------------------------	
	 SLY Effects
   --------------------------------------------------------	*/

  (function () {
  
		var $frame = $('#effects');
		var $wrap  = $frame.parent();
    
		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
		  cycleBy:       'items', // Enable automatic cycling by 'items' or 'pages'.
		  cycleInterval: 5000, // Delay between cycles in milliseconds.
		  pauseOnHover:  0,    // Pause cycling when mouse hovers over the FRAME.
		  startPaused:   0,    // Whether to start in paused sate.      
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
	 		easing: 'swing',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
  
			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});

    // reload on resize
    $(window).resize(function(e) {
      
      $frame.sly('reload');       
       
    });

  })();    

/* --------------------------------------------------------	
	 Layer Slider
   --------------------------------------------------------	*/

	$('#layerslider').layerSlider({
		skinsPath : '../recursos/layerslider/skins/',
		skin : 'fullwidth',
		thumbnailNavigation : 'hover',
		hoverPrevNext : true,
    touchNav : true,   
    hoverBottomNav : true,  
		responsive : true
    
	});

  // static top header.
    $(document).ready(function () {

       $(window).scroll(function () {

           var scrollPosition = $(this).scrollTop();
           var heightHeaderTop = $('#headerTop').height();

           if (scrollPosition > heightHeaderTop) {
               $('.navbar-fixed-top').css({
                   'position': 'fixed'
               });            }

           else {
               $('.navbar-fixed-top').css({
                   'position': 'static'
               });
           }
       })
   });


});
