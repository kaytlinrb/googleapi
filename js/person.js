var apiKey = require('./../.env').apiKey;

function Person(name, age, city, imageURL, about) {
  current_person = this;
  current_person.name = name;
  current_person.age = age;
  current_person.city = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + apiKey;
  current_person.imageURL = imageURL;
  current_person.about = about;
  current_person.location = '';
  current_person.createMarker = function(map) {
    var marker = new google.maps.Marker({
      position: current_person.location,
      map: map
    });
    marker.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
      $('#profile').show();
      $('#nameID').text(current_person.name);
      $('#imageID').src(current_person.imageURL);
      $('#ageID').text(current_person.age);
      $('#aboutID').text(current_person.about);
    });
  };
}

exports.personModule = Person;
