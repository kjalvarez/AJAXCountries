$(function() {
	$.ajax('/countries', {
		success: function(data) {
			console.log(data);
		}
	})
})

$('#country-btn').click(function() {
	$.ajax('/countries', {
		success: function(data){
			console.log('Data: ', data);
		}
	})
})