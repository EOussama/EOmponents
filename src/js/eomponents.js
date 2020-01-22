window.addEventListener('load', () => {
	// Textbox
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

	// Checkbox
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

	// Color picker
	(function() {
		const colorPickers = document.querySelectorAll('div.color-picker');

		colorPickers.forEach(colorPicker => {
			const
				colorInput = colorPicker.querySelector('[type="color"]'),
				label = colorPicker.querySelector('span.label');

			colorInput.addEventListener('change', () => {
				colorPicker.value = colorInput.value;
				colorPicker.style.backgroundColor = colorPicker.value;
				label.textContent = colorPicker.value;
			});

			colorPicker.addEventListener('click', (e) => {
				colorInput.focus();
  				colorInput.click();
			});

			colorPicker.addEventListener('mouseenter', () => {
				colorPicker.style.backgroundColor = "#F5F5F5";
			});

			colorPicker.addEventListener('mouseleave', () => {
				colorPicker.style.backgroundColor = colorPicker.value;
			});

			colorPicker.value = colorInput.value;
			colorPicker.style.backgroundColor = colorPicker.value;
			label.textContent = colorPicker.value;
		});
	})();

	// File
	(function() {
		const fileControls = document.querySelectorAll('div.file');

		fileControls.forEach(fileControl => {
			const
				fileInput = fileControl.querySelector('input[type="file"]'),
				fileBtn = fileControl.querySelector('div.controls .btn'),
				fileLabel = fileControl.querySelector('div.controls span');
			
			fileBtn.addEventListener('click', () => {
				fileInput.focus();
				fileInput.click();
			});

			fileInput.addEventListener('change', (e) => {
				if (e.target.files.length > 0) {
					let fileName = e.target.files[0].name;
	
					fileLabel.textContent = fileName.length > 17 ? `${ fileName.substring(0, 17) }...` : fileName;
					fileControl.setAttribute('title', fileName);
				}
			});

			if (fileLabel.textContent.length == 0) {
				fileLabel.textContent = "No file chosen";
			}
		});
	})();
});