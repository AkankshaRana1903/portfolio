<<<<<<< HEAD
const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission

	// Get form values
	var name = document.getElementById('nameInput').value.trim();
	var email = document.getElementById('emailInput').value.trim();
	var phone = document.getElementById('phoneInput').value.trim();
	var message = document.getElementById('messageInput').value.trim();

	// Check if all fields are filled
	if (name !== '' && email !== '' && phone !== '' && message !== '') {
		// Show confirmation message
		document.getElementById('messageSent').style.display = 'block';
		document.getElementById('messageSent').innerHTML = 'Message sent!';

		// Reset form fields
		document.getElementById('contactForm').reset();

		// Hide confirmation message after 3 seconds
		setTimeout(function() {
			document.getElementById('messageSent').style.display = 'none';
		}, 3000);
	} else {
		// Show error message if any field is empty
		document.getElementById('messageSent').style.display = 'block';
		document.getElementById('messageSent').innerHTML = 'Please fill in all fields.';
	}
});


=======
const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission

	// Get form values
	var name = document.getElementById('nameInput').value.trim();
	var email = document.getElementById('emailInput').value.trim();
	var phone = document.getElementById('phoneInput').value.trim();
	var message = document.getElementById('messageInput').value.trim();

	// Check if all fields are filled
	if (name !== '' && email !== '' && phone !== '' && message !== '') {
		// Show confirmation message
		document.getElementById('messageSent').style.display = 'block';
		document.getElementById('messageSent').innerHTML = 'Message sent!';

		// Reset form fields
		document.getElementById('contactForm').reset();

		// Hide confirmation message after 3 seconds
		setTimeout(function() {
			document.getElementById('messageSent').style.display = 'none';
		}, 3000);
	} else {
		// Show error message if any field is empty
		document.getElementById('messageSent').style.display = 'block';
		document.getElementById('messageSent').innerHTML = 'Please fill in all fields.';
	}
});


>>>>>>> 444285e4a342f69b38a56a38b99dfce3be69a13a
