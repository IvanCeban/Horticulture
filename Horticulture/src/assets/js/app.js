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
        $("header:not(.style_guide_example)").addClass("shrink");
        $("header:not(.style_guide_example) .logo_full").hide();
        $("header:not(.style_guide_example) .logo_simple").show();
    }
    else
    {
        $("header").removeClass("shrink");
        $("header:not(.style_guide_example) .logo_simple").hide();
        $("header:not(.style_guide_example) .logo_full").show();
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

tallestArticleBlock();

function tallestArticleBlock() {
    console.log('test');
    var maxHeight = -1;

    $('section.pricing_tables_section .pricing_table').each(function () {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('section.pricing_tables_section .pricing_table').each(function () {
        $(this).height(maxHeight);
    });
    console.log(maxHeight);
}