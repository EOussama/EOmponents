window.addEventListener('load', () => {
	// Textboxes
	(function () {
		const textboxes = document.querySelectorAll('div.textbox');

		textboxes.forEach(textbox => {
			const input = textbox.querySelector('[type="text"]');
			
			// Resetting the placeholder of the input.
			input.placeholder = '';

			input.addEventListener('focus', () => {
				if (!textbox.classList.contains('focused') && document.activeElement == input && !textbox.classList.contains('disabled'))
					textbox.classList.add('focused');

				if (!textbox.classList.contains('placeholder-off') && !textbox.classList.contains('disabled'))
					textbox.classList.add('placeholder-off');
			});

			input.addEventListener('blur', () => {
				if (textbox.classList.contains('focused'))
					textbox.classList.remove('focused');

				if (textbox.classList.contains('placeholder-off') && input.value.length === 0)
					textbox.classList.remove('placeholder-off');
			});

			// Trigger the focus event.
			if (input.value.length > 0)
				input.dispatchEvent(new Event('focus'));
		});
	})();
});