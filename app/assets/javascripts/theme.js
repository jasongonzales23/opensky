$(function () {
    $(window).scroll(function() {
        if ($(".navbar").offset().top>30) {
            $(".navbar-inner").addClass("sticky");
        }
        else {
            $(".navbar-inner").removeClass("sticky");
        }
    });

    // Flex
    if ($(".flexslider").length) {
        $('.flexslider').flexslider();
    }

    servicesCircle.initialize();

    staticHeader.initialize();

    portfolioItem.initialize();
});

var portfolioItem = {
    initialize: function () {
        var $container = $("#portfolio_tem .left_box");
        var $bigPics = $container.find(".big img");
        var $thumbs = $container.find(".thumbs .thumb");

        $bigPics.hide().eq(0).show();

        $thumbs.click(function (e) {
            e.preventDefault();
            var index = $thumbs.index(this);
            $bigPics.fadeOut();
            $bigPics.eq(index).fadeIn();
        });
    }
}

var staticHeader = {
    initialize: function () {
        if ($(".navbar-static-top").length) {
            $("body").css("padding-top", 0);
        }
    }
}

var servicesCircle = {
    initialize: function () {
        var $container = $(".services_circles");
        var $texts = $container.find(".description .text");
        var $circles = $container.find(".areas .circle");

        $circles.click(function () {
            var index = $circles.index(this);
            $texts.fadeOut();
            $texts.eq(index).fadeIn();
            $circles.removeClass("active");
            $(this).addClass("active");
        });
    }
}

$('.newsletter-link').on('click', function() {
  newWindow = window.open('http://visitor.constantcontact.com/d.jsp?m=1101135603319&p=oi',
                          'mailWindow', 'toolbar,location,menubar,scrollbars,resizable,width=628,height=333');
});

function openit_gc() {
  newWindow = window.open('https://www.securedata-trans8.com/ap/ap_ui_v2/includes/gift_certificates_v2.php?name_link=openskybodyworksltd',
                          'gcWindow', 'toolbar,location,menubar,scrollbars,resizable,width=800,height=600');
}

var defaultOptions = 'toolbar,location,menubar,scrollbars,resizable,width=800,height=600';

function open_stuff(e, options){
  options = options || defaultOptions;
  var target = e.target;
  newWindow = window.open(target.href, target.title, options);
  return false;
}

$('a[title="gcWindow"]').on('click', function(evt) {
  options= 'toolbar,location,menubar,scrollbars,resizable,width=800,height=600';

  evt.preventDefault();
  open_stuff(evt, options)
});


function initialize() {
        var geocoder = new google.maps.Geocoder();
        var myLatlng = new google.maps.LatLng(39.9886, -83.04216);
        var address = '1334 W 5th Ave, Columbus, OH 43212';
        var mapOptions = {
          center: myLatlng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location
              });
            } else {
              var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'Open Sky Day Spa'
              });
              console.log('Geocode was not successful for the following reason: ' + status);
            }
        });

      }
google.maps.event.addDomListener(window, 'load', initialize);

