	var expiry_date = new Date();
	expiry_date.setDate(expiry_date.getDate() + 30);
	document.cookie = 'qsg=2382; expires=' + expiry_date.toUTCString()  + '; path=/;';
