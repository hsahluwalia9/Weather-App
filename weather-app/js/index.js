$( document ).ready(function() {
  
  var longitude;
  var latitude;
  var urlGeo = 'http://ip-api.com/json';
  
  $.ajax({
    type: 'GET',
    url: urlGeo,
    async: false,
    dataType: 'json',
    success: function(data){
      $('#userCity').html(data.city + ', '+ data.countryCode);
      latitude = data.lat;
      longitude = data.lon;
    },
    error: function(errorMessage){
      alert('Error');
    }
}); 
      
  var urlWeather = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=b633253ae19c7962185ded9c33349e91';
  
   $.getJSON( urlWeather, function( data ) {
      var kelvin = data.main.temp;
      var celsius = kelvin - 273.15;
      var farenheit = celsius + 32;
      var description = data.weather[0].main;
   
     $('#weather').html(Math.round(celsius) + '&deg; C' );
        
     $('#description').html(description);
     
     //background change
     if (description == 'Clear'){
       $('#main').css("background-image", "url(http://res.cloudinary.com/dh6zqpr3u/image/upload/v1494987497/sky_bdsy3v.jpg)");
       $('#icon').attr('src','http://res.cloudinary.com/dh6zqpr3u/image/upload/v1495059987/sun_1_bh5b92.png');
     }
     else if (description == 'Clouds'){
       $('#main').css("background-image", "url(http://res.cloudinary.com/dh6zqpr3u/image/upload/v1495059149/sun-203792_1920_hzsytw.jpg)");
       $('#icon').attr('src','http://res.cloudinary.com/dh6zqpr3u/image/upload/v1495060435/cloud_j2tn1m.png');
     }
     else if (description == 'Rain' || description =='Drizzle'){
       $('#main').css("background-image", "url(http://res.cloudinary.com/dh6zqpr3u/image/upload/v1494987494/pexels-photo-110874_r4ulmi.jpg)");
       $('#icon').attr('src','http://res.cloudinary.com/dh6zqpr3u/image/upload/v1495060793/rain_zuj2zd.png');
     }
     else if (description == 'Snow'){
       $('#main').css("background-image", "url(http://res.cloudinary.com/dh6zqpr3u/image/upload/v1494988879/winter-impressions-182020_1920_ovjxcy.jpg)");
       $('#icon').attr('src','http://res.cloudinary.com/dh6zqpr3u/image/upload/v1495060880/snow_z2ty98.png');
     }
     else if (description == 'Thunderstorm'){
       $('#main').css("background-image", "url(http://res.cloudinary.com/dh6zqpr3u/image/upload/v1494988997/lightning-1056419_1920_yt7kyr.jpg)");
       $('#icon').attr('src','http://res.cloudinary.com/dh6zqpr3u/image/upload/v1495060959/storm_ccgykd.png');
     }
     else{
        $('#main').css("background-image", "url(http://res.cloudinary.com/dh6zqpr3u/image/upload/v1494987495/clouds-210649_1920_khwotr.jpg)");
       $('#icon').attr('src','http://res.cloudinary.com/dh6zqpr3u/image/upload/v1495060435/cloud_j2tn1m.png ');
     }
      });
});