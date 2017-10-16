import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(document).on("scroll", function(){
    if
    ($(document).scrollTop() > 500){
        $("header").addClass("shrink");
        $("header .logo_full").hide();
        $("header .logo_simple").show();
    }
    else
    {
        $("header").removeClass("shrink");
        $("header .logo_simple").hide();
        $("header .logo_full").show();
    }
});

$('.button-group .button').on('click', function () {
    console.log('test');
   $(this).closest('.button-group').find('.button').removeClass('active');
   $(this).addClass('active');
});

$('.dropdown-pane ul li a').on('click', function () {
    $(this).closest('.dropdown-pane').foundation('close');
});
