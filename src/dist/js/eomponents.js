window.addEventListener('load', () => {
	// Textboxes
	(function () {
		const textboxes = document.querySelectorAll('div.textbox');

		textboxes.forEach(textbox => {
			const
				input = textbox.querySelector('[type="text"], [type="password"], [type="email"], [type="search"], [type="url"], [type="tel"]'),
				label = textbox.getElementsByTagName('label')[0];
			
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

			input.addEventListener('change', () => {
				textbox.value = input.value;
			});

			// Trigger the focus event.
			if (input.value.length > 0) {
				input.focus();
				textbox.value = input.value;
			} else {
				textbox.value = '';
			}
		});
	})();

	// Checkboxes
	(function () {
		const checkboxes = document.querySelectorAll('div.checkbox');

		checkboxes.forEach(checkbox => {
			const checkboxInput = checkbox.children[0];

			checkbox.addEventListener('click', () => {
				if (!checkboxInput['disabled'] && !checkbox.classList.contains('disabled')) {
					if (checkboxInput.checked) {
						checkbox.classList.remove('checked');
						checkboxInput.checked = false;
					} else {
						checkbox.classList.add('checked');
						checkboxInput.checked = true;
					}

					checkbox.value = checkboxInput.checked;
				}
			});

			if (checkboxInput.checked) {
				checkbox.classList.add('checked');
				checkbox.value = true;
			} else {
				checkbox.value = false;
			}
		});
	})();

	// Radio
	(function() {
		const radios = document.querySelectorAll('div.radio');

		radios.forEach(radio => {
			const radioInput = radio.children[0];

			radio.addEventListener('click', () => {
				if (radioInput.checked) {
					radio.classList.remove('checked');
					radioInput.checked = false;
				} else {
					radio.classList.add('checked');
					radioInput.checked = true;
				}

				radio.value = radioInput.checked;
			});

			if (radioInput.checked) {
				radio.classList.add('checked');
				radio.value = true;
			} else {
				radio.value = false;
			}
		});
	})();
});