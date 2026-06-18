// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date (updates every second)

function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const d = new Date();
	const min = ('0' + d.getMinutes()).slice(-2);
	const sec = ('0' + d.getSeconds()).slice(-2);
	let hh = d.getHours();
	let ampm = '';

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' pm' : ' am';
		hh = hh % 12;
		hh = hh ? hh : 12;
	}

	const set = (id, value, html = false) => {
		const el = document.getElementById(id);
		if (!el) return;
		if (html) el.innerHTML = value;
		else el.innerText = value;
	};

	set('hour', hh);
	set('separator', ' : ', true);
	set('minutes', min);
	set('seconds', sec + ampm);

	// Optional date elements (only if present on the page)
	set('month', monthNames[d.getMonth()]);
	set('day', d.getDate());

	setTimeout(displayClock, 1000);
}

displayClock();
