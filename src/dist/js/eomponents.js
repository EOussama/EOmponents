window.addEventListener('load', () => {
	// Textboxes
	(function () {
		const textboxes = document.querySelectorAll('div.textbox');

		textboxes.forEach(textbox => {
			const
				input = textbox.querySelector('[type="text"], [type="password"], [type="email"], [type="search"], [type="url"], [type="tel"]'),
				label = textbox.getElementsByTagName('label')[0];
			
			// Clear the default placeholder.
			input.placeholder = '';

			textbox.addEventListener('click', (e) => {
				label.focus();
			});

			label.addEventListener('click', (e) => {
				e.stopPropagation();
			});

			input.addEventListener('click', (e) => {
				e.stopPropagation();
			});

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
				input.focus();
		});
	})();
});