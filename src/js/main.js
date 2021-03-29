//var secrets = require("./auth.json");
//console.log(secrets);

var pym = require("./lib/pym");

////////// fullPage.js
// Optional. When using fullPage extensions
// require("./lib/fullpage.dragAndMove.min.js");
require("./lib/fullpage.scrollHorizontally.min");
require("./lib/fullpage.fadingEffect.min.js");
require("./lib/scrolloverflow.js");

// Optional. When using scrollOverflow:true
// require('fullpage.js/vendors/scrolloverflow');

//var fullpage = require('fullpage.js');

// When using fullPage extensions replace the previos require
// of fullpage.js for this file
var fullpage = require("./lib/fullpage.extensions.min");

// Initializing it
var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'D8303C79-0BD64932-AEC886F3-4E1AAB2D',
    anchors: ['page'],
    sectionsColor: ['#000000'],
    slidesNavigation:true,
    navigation: true,
    navigationPosition: 'right',
    //verticalCentered: false,
    //navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    // responsiveWidth: 900,
    animateAnchor: false,
    autoScrolling: true,
    keyboardScrolling: true,
    // scrollingSpeed: 0,
    scrollOverflow: true,
    // dragAndMove: true,
    scrollHorizontally: true,
    // fadingEffect:'slides',
    // fadingEffectKey: 'bG93d2FnZXdvcmtlcnNwZ2gucHVibGljc291cmNlLm9yZ190OUFabUZrYVc1blJXWm1aV04wUUUz',
    scrollHorizontallyKey: 'cHJvamVjdHMucHVibGljc291cmNlLm9yZ19HeHJjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDU4NG4=',
    // dragAndMoveKey: 'bG93d2FnZXdvcmtlcnNwZ2gucHVibGljc291cmNlLm9yZ18wdDdaSEpoWjBGdVpFMXZkbVU9NDV2',
    loopHorizontal:false,
    afterResize: function(width, height){
  		var fullpageContainer = this;
  	},
  	afterLoad: function(origin, destination, direction) {
    	var sectionURL = origin.item.baseURI;
    	var googleURL = sectionURL.replace('https://lowwageworkerspgh.publicsource.org', '');
    	console.log(googleURL);
      ga('send', 'pageview', { 'page': googleURL, 'title': googleURL });
    }
});

// new fullpage('#fullpage', {
// 	afterResize: function(width, height){
// 		var fullpageContainer = this;
// 	}
// });

// Change id to different text here and in html to initialize another one
//document.querySelector('#moveSectionDownStory1').addEventListener('click', function(e){
//  e.preventDefault();
//  fullpage_api.moveSectionDown();
//});

//This will allow us to replace large background images with mobile-optimized
//images when user window width is below whatever.
//Should probably also add a detector for when a person is on an actual mobile
//device...
function determineScreenSize(){
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

    var img_slides = document.querySelectorAll('.slide'), i;

    for (i = 0; i < img_slides.length; ++i) {

      var slide = img_slides[i];

      if(slide.dataset.bgOpacity){
        var opacity = slide.dataset.bgOpacity;
      }else{
        var opacity = '0, 0, 0, 0.6';
      }

      if(slide.dataset.bgLarge){
        var large_img = slide.dataset.bgLarge,
          mobile_img = slide.dataset.bgMobile;

        if(x < 769 && mobile_img.length > 0){
          slide.style.backgroundImage = 'linear-gradient(rgba(' + opacity + '), rgba(' + opacity + ')), url(' +
                                  mobile_img + ')';
        }else{
          slide.style.backgroundImage = 'linear-gradient(rgba(' + opacity + '), rgba(' + opacity + ')), url(' +
                                  large_img + ')';
        }
      }else{
        slide.style.backgroundImage = 'linear-gradient(rgba(' + opacity + '), rgba(' + opacity + '))';
      }
    }
}

window.addEventListener('resize', function(){
  determineScreenSize()
});

determineScreenSize();

//Audio/video pause play function

////////////////Fullpage methods////////////////////

// //disabling scrolling down
// fullpage_api.setAllowScrolling(false, 'up, down');
//
// //disabling keyboard scrolling down and right
// fullpage_api.setKeyboardScrolling(false, 'up, down');

// fullpage_api.setScrollingSpeed(0);

//adding the movedown action to the button
$(document).on('click', '#moveDown', function(){
  fullpage_api.moveSectionDown();
});
