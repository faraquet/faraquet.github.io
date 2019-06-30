const user = 'faraquet';
const url = 'https://api.github.com/users/' + user;
const avatar = document.getElementById('avatar');

fetch(url)
	.then (res => res.json())
	.then (json => {
		avatar.setAttribute('src', json.avatar_url);
	});
