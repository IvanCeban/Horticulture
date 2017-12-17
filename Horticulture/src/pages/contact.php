<header class="contact_page">
    {{> header}}
</header>

<div id="map" style="height: 510px; width: 100%"></div>

<section class="page_title_section contact_page">
    <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
            <div class="small-3 cell shrink show-for-medium">
                <div class="logo_container">
                    <img src="{{root}}assets/img/logo-smpl-wht.svg" alt="Logo white">
                </div>
            </div>
            <div class="cell small-12 medium-8 large-6 xlarge-4">
                <h3>Contact Us</h3>
                <h2><span>Get in touch</span><br>
                    <a href="tel:01494717737"></a>01494 717 737<br>
                    <a href="tel:07553227706"></a>07553227706<br>
                    <a href="mailto:info@sbhorticulture.com">info@sbhorticulture.com</a></h2>
                <p>I want you to experience a service that is professional and transparent with a high standard of workmanship and continuity.<br><br>
                    I have put together some <span>frequently asked questions on the services page</span> regarding using my services.</p>
            </div>
        </div>
    </div>
</section>

<section class="contact_form_section">
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 large-6">
                <h1><span>Write us</span></h1>
                <h3>If you still have any questions</h3>
                <p> that haven’t been addressed by our services page or any other pages then please use the form to get in touch.</p>
            </div>
            <div class="cell small-12 large-6">
                <form action="contact.php" method="post">
                    <div class="grid-x grid-margin-x">
                        <div class="cell small-12 medium-6">
                            <input type="text" placeholder="First name">
                        </div>
                        <div class="cell small-12 medium-6">
                            <input type="text" placeholder="Last name">
                        </div>
                        <div class="cell small-12">
                            <input type="text" placeholder="Subject">
                        </div>
                        <div class="cell small-12">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div class="cell small-12">
                            <button class="button small" type="submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<section class="img_fullwidth_section contact_page">
    <div class="grid-container full">
        <div class="grid-x">
            <div class="cell small-12 medium-6">
                <img src="{{root}}assets/img/contact/contact1.jpg" alt="Contact img">
            </div>
            <div class="cell small-12 medium-6">
                <img src="{{root}}assets/img/contact/contact2.jpg" alt="Contact img">
            </div>
        </div>
    </div>
</section>


<script>
    function initMap() {
        var uluru = {lat: 51.675699, lng: -0.724057};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: uluru
        });
        var icon = {
            url: '{{root}}assets/img/map_pin.svg', // url
            scaledSize: new google.maps.Size(38, 49), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(-38, 0) // anchor
        };
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: icon
        });
    }
</script>

<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-DSnMl25tpzc1GQzVgkxCZBM1KiU9lOI&callback=initMap">
</script>