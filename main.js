



var wh = window.innerHeight,
  $container = $('.section'),
	$sectionone = $('.sectionone'),
	$sectiontwo = $('.sectiontwo'),
	$sectionthree = $('.sectionthree'),
	$sectionfour = $('.sectionfour'),
	$pic1 = $('.pic1'),
	$pic2 = $('.pic2'),
	$pic3 = $('.pic3')
  $pic4 = $('.pic4');
  //
  // var nav = window.innerHeight,
  // $pixel1 = $('.pixel1'),
  // $pixel2 = $('.pixel2'),
  // $pixel3 = $('.pixel3'),
  // $pixel4 = $('.pixel4'),


	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});
  // init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

	// Create scene
	$("section").each(function() {
		new ScrollMagic.Scene({
			triggerElement: this,
			duration: '70%'
		})
		.setPin(this)
		.addTo(ctrl)
    .on("enter leave", function(e){
      $('.pixel').removeClass("pixelbold")
      var el = e.target.triggerElement();
      var indexNo = $(el).parent().index()
      console.log(indexNo)
      // debugger

      if( $(el).is('section') ){
          $(".page-nav a:nth-child("+ ( indexNo - 1 ) +") div ").addClass( "pixelbold" );
          console.log($(".page-nav a:nth-child("+ ( indexNo - 1 ) +") div "))
      }
// debugger
      // $( el ).find( " .sectiontwo .container .pixel" ).toggleClass( "pixelbold" );
      // $( el ).find( " .sectionthree .container .pixel" ).toggleClass( "pixelbold" );
      // $( el ).find( " .sectionfour .container .pixel" ).toggleClass( "pixelbold" );

    })
	});

  $(document).ready(function (){
      $(".page-nav a").click(function (e){
        // console.log(e);
        // $('.pixel').removeClass("pixelbold")
        e.preventDefault();
        console.log($(this).attr('href'))
        var elId = $(this).attr('href')
        var thisEl = $(this).find("div");
          $('html, body').animate({
              scrollTop: $( elId ).offset().top
          }, 600, "linear", function(){console.log(thisEl)

            if( thisEl.hasClass("pixelbold") === false ){
              $('.pixel').removeClass("pixelbold")
              thisEl.addClass("pixelbold")
            }

          });
          // debugger
        // $('.pixel').removeClass("pixelbold")
        // $(this).find("div").addClass("pixelbold");

      });
  });
