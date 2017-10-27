import $ from 'jquery';
import dependencies from './lib/dependencies';
import whatInput from 'what-input';

window.$ = $;
window.libs = dependencies;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';




$(document).foundation();

checkCookie();

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

   var this_button_val = $(this).html();
   var this_pricing_table_class = $(this).closest('.pricing_table').attr('class').split(' ').pop();
   var this_parent_class = $(this).parent().attr('class');
   const sm_text = 'This will be an area of approximately 120 metres square or (half a tennis court) and include up to 15 plant recommendations';
   const md_text = 'This will be an area of approximately 240 metres square or (one full tennis court) and include up to 30 plant recommendations';
   const lg_text = 'An area larger than a one full size tennis court and unlimited plant recommendations';
   const sm_bronze_price = '30';
   const md_bronze_price = '45';
   const lg_bronze_price = '50';
   const sm_silver_price = '45';
   const md_silver_price = '60';
   const lg_silver_price = '65';
   const sm_gold_price = '60';
   const md_gold_price = '80';
   const lg_gold_price = '85';

   // changing contact btn lik href START
   var current_mail_link = $(this).closest('.pricing_table').find('a.button').attr('href');
   var new_mail_link = current_mail_link.split(',')[0];
   new_mail_link = new_mail_link + ', ' + this_button_val;
   $(this).closest('.pricing_table').find('a.button').attr('href', new_mail_link);
   // changing contact btn lik href END

   $(this).closest('.dropdown_container').find('button.button span.btn_text').html(this_button_val);

   if(this_parent_class == 'small_size') {
       $(this).closest('.body').find('p').html(sm_text);
       if(this_pricing_table_class == 'bronze') {
           $(this).closest('.body').find('.price span.price_val').html(sm_bronze_price);
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

$('select').select2();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var cookiePolicy = getCookie("cookiePolicyAcception");
    if (cookiePolicy == "") {
        // alert("Welcome again " + cookiePolicy);
        $('section.cookie_policy_section:not(.example)').removeClass('hide');
    }
}

$('section.cookie_policy_section:not(.example) .cookie_policy button.close-button').on('click', function () {
    setCookie("cookiePolicyAcception", "accepted", 365);
});
//
// //event listener: DOM ready
// function addLoadEvent(func) {
//     var oldonload = window.onload;
//     if (typeof window.onload != 'function') {
//         window.onload = func;
//     } else {
//         window.onload = function() {
//             if (oldonload) {
//                 oldonload();
//             }
//             func();
//         }
//     }
// }
// //call plugin function after DOM ready
// addLoadEvent(function(){
//     outdatedBrowser({
//         bgColor: '#f25648',
//         color: '#ffffff',
//         lowerThan: 'transform',
//         languagePath: ''
//     })
// });