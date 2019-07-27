const user = 'faraquet';
const url = 'https://api.github.com/users/' + user;
const avatar = document.getElementById('avatar');

fetch(url)
	.then (res => res.json())
	.then (json => {
		avatar.setAttribute('src', json.avatar_url);
	});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
    	behavior: 'smooth',
    	block: 'start'
    })
  });
}
