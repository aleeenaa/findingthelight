var balawal = function() {
    $('#contactBtn').attr('href', 'mailto:joelight@live.co.uk?subject='
    	+ encodeURIComponent("Customer Enquiry")+ "&body="
    	+ encodeURIComponent("This is my body")
    );
};

var eventListeners = function () {
	var navigation = $('#navBar'),
		header = $('#header'),
		contact = $('#contactBtn'),
		fb = $('#fbLogo');

	header.mouseover(function() {
		navigation.animate({
			'visibility': 'visible'
		}, 'fast');
		// navigation.slideDown();
		setTimeout(function() {
			navigation.animate({
				'visibility': 'hidden'
			});
			// navigation.slideUp();
		}, 10000)
	});

	fb.on('click', function() {
		window.location.href = "https://www.facebook.com/pages/Light-Suits/789694201098958"
	});

	contact.on('click', function() {
		$('#contactBtn a').click();
	});
}

$(eventListeners);