function mySlider(id, slideItem, slideCount){
			 //console.time('Function #1'); // log time
			 var getId = document.getElementById('card-slider-1');
		  var getWidth = parseInt($(getId).outerWidth(true))/slideCount;
		var sliderType = getId.getAttribute('card-slider');
		var getContext = $(getId).find('[slide-film] > [slide-item]');
		 var getLength = getContext.length;
		 var getNumber = Math.ceil((getContext.length - slideCount)/slideItem);
		 //alert(getNumber);
		 getContext.width(getWidth);
		   var setNext = $(getId).find('[slide-button="Next"]');
			  var next = setNext.attr('slide-button');
	   var setPrevious = $(getId).find('[slide-button="Previous"]');
		  var previous = setPrevious.attr('slide-button');
			  		     console.log(next + "|" + previous);
   var calcSliderWidth = getLength*getWidth;
 var calcSliderCounter = calcSliderWidth - (getWidth*slideCount);
       	 var slideFilm = $(getId).find('[slide-film]');
       var slideAmount = 0;
           var counter = 1;
 		
 		if(getLength > slideCount){
 			$(setNext).show();
 		}

 		if(sliderType==='Full'){
			$(getId).find('[slide-film]').width(calcSliderWidth);
			console.log(calcSliderWidth);
		}
		else{
			return "No Records Found";
		}
		
		$(setNext).on('click', function(event) {
			event.preventDefault();
			slideAmount = parseInt(slideFilm.attr('slide-film')) + (slideItem * getWidth);
			if(counter <= getNumber){
       	 				  slideFilm.attr('slide-film', slideAmount);
						  slideFilm.css({"transform":"translateX("+ (-slideAmount)+"px)"});
						  $(setPrevious).show();
						  counter++;
						  if(counter > getNumber)
						  	$(this).hide();
						}
		});

		$(setPrevious).on('click', function(event) {
			event.preventDefault();
			slideAmount = parseInt(slideFilm.attr('slide-film')) - (slideItem * getWidth);
			if(counter > 1){
       	 				  slideFilm.attr('slide-film', slideAmount);
						  slideFilm.css({"transform":"translateX("+ -slideAmount+"px)"});
						  $(setNext).show();
						  counter--;
						  if(counter===1)
						  	$(this).hide();
						}
		});
		//console.timeEnd('Function #1'); // log time
	}