(function() {
	// Horizontal ruler
	const hRuler = document.createElement('div');
	hRuler.id = 'horizontal-ruler';
	hRuler.classList.add('ruler');
	hRuler.style.position = 'fixed';
	hRuler.style.display = 'none';
	document.body.append(hRuler);

	// Horizontal ruler text
	const hRulerTextSpan = document.createElement('span');
	const hRulerText = document.createElement('span');
	hRulerText.classList.add('ruler-text');
	hRuler.append(hRulerText);

	// Vertical ruler
	const vRuler = document.createElement('div');
	vRuler.id = 'vertical-ruler';
	vRuler.classList.add('ruler');
	vRuler.style.position = 'fixed';
	vRuler.style.display = 'none';
	document.body.append(vRuler);

	// Vertical ruler text
	const vRulerTextSpan = document.createElement('span');
	const vRulerText = document.createElement('span');
	vRulerText.classList.add('ruler-text');
	vRuler.append(vRulerText);

	document.body.addEventListener('mousemove', function(e) {
		// Update horizontal ruler
		hRuler.style.top = e.pageY + 'px';
		hRuler.style.width = e.pageX + 'px';
		hRulerText.innerText = e.pageX + 'px';

		// Update vertical ruler
		vRuler.style.left = e.pageX + 'px';
		vRuler.style.height = e.pageY + 'px';
		vRulerText.innerText = e.pageY + 'px';
	});

	document.body.addEventListener('click', function(e) {
		// Toggle ruler
		if (hRuler.style.display === 'none' || vRuler.style.display === 'none') {
			hRuler.style.display = 'block';
			vRuler.style.display = 'block';
		} else {
			hRuler.style.display = 'none';
			vRuler.style.display = 'none';
		}
	});
})();