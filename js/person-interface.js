var Person = require('./../js/person.js').personModule;



$(document).ready(function(){

  var newLoc = {lat: 47.7510741, lng: -120.7401386};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: newLoc
  });

  // var marker = new google.maps.Marker({
  //   position: newLoc,
  //   map: map
  // });
  $("form#addProfile").submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var age = $('#age').val();
    var city = $('#city').val();
    var body = $('#body').val();
    var imageURL = $('#imageURL').val();
    var newPerson = new Person(name, age, city, imageURL, body);
    $.get(newPerson.city).then(function(response) {
      newPerson.location = response.results[0].geometry.location;
      console.log(newPerson)
      console.log(newPerson.location);
      newPerson.createMarker(map);
    });
  });
});

// https://maps.googleapis.com/maps/api/geocode/json?address=Moscow&key=AIzaSyBZ81dnN9D27_Him3m23mC7WZlkBMzo0iA
//
//
// https://maps.googleapis.com/maps/api/geocode/json?address=****&key=YOUR_API_KEY
//
//
// 1600+Amphitheatre+Parkway,+Mountain+View,+CA
