/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
	console.log("dp-main.js loaded");
	// utility function to check form data
	var checkForm = function (dataString) {
		console.log("checkForm() called with", dataString);
		if (dataString.indexOf('demo-human=on') == -1) {
			alert("Please confirm you are not a robot.");
			return false;
		}
		return true;
	}

	$(document).ready(function () {
		$("#submitButton").click(function (event) {
			event.preventDefault(); // Prevent default form submission
			try {
				var ele = document.getElementById("contactForm");
				if (!ele.checkValidity()) {
					ele.reportValidity();
					return;
				}
				let form = $("#contactForm");
				let url = form.attr('action');

				if (checkForm(form.serialize())) {
					$.ajax({
						type: "POST",
						url: url,
						headers: {
							"Authorization": "Bearer d1gitalP0stur3==="
						},
						data: form.serialize(), // Serialize form data
						success: function (data) {
							alert("Form Submitted Successfully");
							form.trigger("reset"); // Reset the form after successful submission
						},
						error: function (data) {
							alert("Error occurred while submitting the form");
						}
					});
				} else {
					event.preventDefault();
					console.log("Form validation failed");
				}
			} catch (err) {
				console.error("Error in submitButton click handler:", err);
				return false;
			}
		});
	});
})(jQuery);
