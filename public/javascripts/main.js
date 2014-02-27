$(function() {
	$.ajax('/countries', {
		success: function(data) {
			for (i=0; i<data.length; i++) {
				console.log(data[i])
				$('body').append('<br>')
				$('body').append('<div>' + 'Name: ' + data[i].name + '<div>')
				$('body').append('<div>' + 'French Name: ' + data[i].frenchName + '<div>')
				$('body').append('<div>' + 'Local Name: ' + data[i].localName + '<div>')
				$('body').append('<div>' + 'Region: ' + data[i].region + '<div>')

			}

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