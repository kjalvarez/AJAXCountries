var renderFunction = function (data) {
	$('#CountryContainer').empty();
	for (i=0; i<data.length; i++) {

		$('#CountryContainer').append('<br>')
		$('#CountryContainer').append('<div>' + 'Name: ' + data[i].name + '<div>')
		$('#CountryContainer').append('<div>' + 'French Name: ' + data[i].frenchName + '<div>')
		$('#CountryContainer').append('<div>' + 'Local Name: ' + data[i].localName + '<div>')
		$('#CountryContainer').append('<div>' + 'Region: ' + data[i].region + '<div>')

	}

}

$(function() {
	$.ajax('/countries', {
		success: renderFunction
	})
})

$(document).on('ready', function() {

	$('#country-btn').click(function() {
		$.ajax('/search', {
			data: {
				name: $('#inputField').val()
			},
			success: renderFunction
		});
	});
})