var apiKey = require('./../.env').apiKey;

function Person(name, age, city, imageURL, about) {
  current_person = this;
  current_person.name = name;
  current_person.age = age;
  current_person.city = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + apiKey;
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
      $('#profile').append(
        '<h3>' + current_person.name + '</h3>' +
        '<img src="' + current_person.imageURL + '">' +
        '<p>' + current_person.age + '</p>' +
        '<p>' + current_person.about + '</p>'
      );
    });
  };
}

exports.personModule = Person;
