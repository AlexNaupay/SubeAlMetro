Zepto(function($){

	var xhr = new XMLHttpRequest({
	    mozSystem: true
	});

	$('#tabstart').addClass('active');

	// Estaciones
	var estaciones = "https://subealmetro.herokuapp.com/stations.json";
	var estacionesOffline = "js/stations.json";

	// Twitter
	var twitterTimeLine = "https://api.twitter.com/1/statuses/user_timeline/Lineaunope.json?&count=7&callback=?";

	$.getJSON(estacionesOffline, function(text){
		$.each(text.stations, function(key, value){
			$('#estaciones').append('<option>'+value.name+'</option>');
		});		
		console.log(text.stations);		
	});

	$.getJSON(twitterTimeLine, function(text){
  		$.each(text, function(key, value){
  			$('#tweet').append('<li><div class="imgLeft"><img src="'+value.user.profile_image_url+'"/></div><h1 class="titleTwitter">'+value.user.name+' <span class="usertwitter">'+'@'+value.user.screen_name+'</span></h1><p>'+value.text+'</p></li>');
		});
	});	

	$('#btn-horario').click(function (){
		$('#tabstart').removeClass('active');
		$('#titulo').html($('#hora').attr('alt'));
	});

	$('#btn-twitter').click(function (){
		$('#tabstart').removeClass('active');
		$('#titulo').html($('#twitter').attr('alt'));
	});

	$('#btn-info').click(function (){
		$('#tabstart').removeClass('active');
		$('#titulo').html($('#info').attr('alt'));
	});

});