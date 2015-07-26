var eventListeners = function () {
	var navigation = $('#navBar'),
		header = $('#header');

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
	})
}

$(eventListeners);