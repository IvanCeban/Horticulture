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

$('select').select2();

var pathname = window.location.pathname;

checkCookie();

setPageName();

function setPageName() {
    var pathname = window.location.pathname;
    var page_name = pathname.substring(pathname.lastIndexOf("/")+1, pathname.lastIndexOf("."));
    $('body').addClass(page_name);
    if(page_name === 'index') {
        document.title = 'Home : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('Homepage');
    } else if(page_name === 'about') {
        document.title = 'About : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('About');
    } else if(page_name === 'services') {
        document.title = 'Services : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('Services');
    } else if((page_name === 'showcase')||(pathname.indexOf("showcases") >= 0)) {
        document.title = 'Showcase : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('Showcase');
    } else if(page_name === 'testimonials') {
        document.title = 'Testimonials : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('Testimonials');
    } else if(page_name === 'downloads') {
        document.title = 'Downloads : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('Downloads');
    } else if(page_name === 'contact') {
        document.title = 'Contact : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('Contact');
    } else if(page_name === 'legal') {
        document.title = 'Legal : SB Horticulture';
        $('.title-bar .title-bar-middle .page_name').html('Contact');
    }
}

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

$('section.info_section .tabs-content .tabs-panel .faq_container .faq_content h3 button').on('click', function () {
    var this_icn = $(this).find('i.fa');
    var this_text_block = $(this).closest('.cell');
    this_text_block.toggleClass('minimized');

    if(this_text_block.hasClass('minimized')) {
        this_icn.attr('class', 'fa fa-plus');
    } else {
        this_icn.attr('class', 'fa fa-minus');
    }
});

$('.fake_tab_link').on('click', function () {
   var link_id = $(this).attr('fake_link');
   $(`a[href="#${link_id}"]`).trigger('click');
});

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
    var serviceLink = getCookie("serviceLink");
    var legalLink = getCookie("legalLink");
    var serviceLinkPrevUrl = getCookie("serviceLinkPrevUrl");
    if (cookiePolicy == "") {
        // alert("Welcome again " + cookiePolicy);
        $('section.cookie_policy_section:not(.example)').removeClass('hide');
    }
    if(pathname == '/services.html') {
        $(`a[href='#${serviceLink}']`).trigger('click');
        // console.log(serviceLink);
    }
    if(pathname == '/legal.html') {
        $(`a[href='#${legalLink}']`).trigger('click');
        console.log(legalLink);
    }
}

$('section.cookie_policy_section:not(.example) .cookie_policy button.close-button').on('click', function () {
    setCookie("cookiePolicyAcception", "accepted", 365);
});

$('footer .footer_menu_services nav a, .services_section a').on('click', function () {
    var this_service = $(this).attr('class');
    setCookie("serviceLink", this_service, 365);
});

$('footer.mobile ul.copyright li a').on('click', function () {
    var this_legal = $(this).attr('class');
    setCookie("legalLink", this_legal, 365);
});

MyOutdatedBrowser();

function MyOutdatedBrowser() {
    //TODO create a public api to have these set from the cloud rather than having them hardcoded in typescript
    var browsers = {
        GoogleChrome: {
            name: "chrome",
            version: 52
        },
        MozillaFirefox: {
            name: "firefox",
            version: 46
        },
        InternetExplorer: {
            name: "msie",
            version: 10
        },
        InternetExplorerElse: {
            name: "ie",
            version: 10
        },
        AppleSafari: {
            name: "safari",
            version: 5
        },
        Opera: {
            name: "opera",
            version: 38
        }
    };

    function getBrowserKeys() {
        return Object.getOwnPropertyNames(browsers)
    }

    function isBrowserOutdated(curBrowser) {
        var curBrowserName = curBrowser.name.toLowerCase();

        var keys = getBrowserKeys();

        var browser_version = curBrowser.version;

        for(var i=0; i< keys.length ; i++) {
            var browser = browsers[keys[i]];

            if(curBrowserName === browser.name) {
                return curBrowser.version <= browser.version;
            } else {
                //continue
            }
        }
        return true;  //browser is found and version is equal or greater than ours
    }

    /**
     * http://stackoverflow.com/a/16938481/720484
     * @returns {any}
     */
    function get_browser_info() {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|ie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name: 'IE ', version: (tem[1] || '')};
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem != null) {
                return {name: 'Opera', version: tem[1]};
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };

    }

    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }

    var blockID = "outdated";
    var closeButtonID = "btnCloseUpdateBrowser";

    addLoadEvent(function() {
        if(isBrowserOutdated(get_browser_info())) {
            //var block = document.getElementById(blockID);
            //show
            $('#outdatedBrowser').foundation('open');
            //block.setAttribute("style", "display: block;");
        } else {
            //nop
        }
    })
}

$('.info_section ul.tabs .tabs-title a').on('click', function () {
    var this_service = $(this).attr('data-tabs-target');
    setCookie("serviceLink", this_service, 365);
});

activeHeaderNav();
function activeHeaderNav() {
    var current_link = $('header').attr('class');
    $('header .main_nav li.active:not(.enquire)').removeClass("active");
    $('header .main_nav li.'+current_link).addClass("active");
}