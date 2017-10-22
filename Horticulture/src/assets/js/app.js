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
    ($(document).scrollTop() > 280){
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

$('.pricing_table .dropdown_container .dropdown-pane ul li a').on('click', function () {
   $(this).closest('ul').find('li a').removeClass('active');
   $(this).addClass('active');
   var this_pricing_table_class = $(this).closest('.pricing_table').attr('class').split(' ').pop();
   var this_parent_class = $(this).parent().attr('class');
   var sm_text = 'This will be an area of approximately 120 metres square or (half a tennis court) and include up to 15 plant recommendations';
   var md_text = 'This will be an area of approximately 240 metres square or (one full tennis court) and include up to 30 plant recommendations';
   var lg_text = 'An area larger than a one full size tennis court and unlimited plant recommendations';
   var sm_bronze_price = '30';
   var md_bronze_price = '45';
   var lg_bronze_price = '50';
   var sm_silver_price = '45';
   var md_silver_price = '60';
   var lg_silver_price = '65';
   var sm_gold_price = '60';
   var md_gold_price = '80';
   var lg_gold_price = '85';

   if(this_parent_class == 'small_size') {
       $(this).closest('.body').find('p').html(sm_text);
       if(this_pricing_table_class == 'bronze') {
           $(this).closest('.body').find('.price span.price_val').html(sm_bronze_price)
       }
       else if(this_pricing_table_class == 'silver') {
           $(this).closest('.body').find('.price span.price_val').html(sm_silver_price)
       }
       else if(this_pricing_table_class == 'gold') {
           $(this).closest('.body').find('.price span.price_val').html(sm_gold_price)
       }
   }
   else if (this_parent_class == 'medium_size') {
       $(this).closest('.body').find('p').html(md_text);
       if(this_pricing_table_class == 'bronze') {
           $(this).closest('.body').find('.price span.price_val').html(md_bronze_price)
       }
       else if(this_pricing_table_class == 'silver') {
           $(this).closest('.body').find('.price span.price_val').html(md_silver_price)
       }
       else if(this_pricing_table_class == 'gold') {
           $(this).closest('.body').find('.price span.price_val').html(md_gold_price)
       }
   }
   else if (this_parent_class == 'large_size') {
       $(this).closest('.body').find('p').html(lg_text);
       if(this_pricing_table_class == 'bronze') {
           $(this).closest('.body').find('.price span.price_val').html(lg_bronze_price)
       }
       else if(this_pricing_table_class == 'silver') {
           $(this).closest('.body').find('.price span.price_val').html(lg_silver_price)
       }
       else if(this_pricing_table_class == 'gold') {
           $(this).closest('.body').find('.price span.price_val').html(lg_gold_price)
       }
   }
});
// $("select#dropdown").select2();