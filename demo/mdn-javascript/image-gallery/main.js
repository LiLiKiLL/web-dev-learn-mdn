var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', function(e) {
    var src = e.target.getAttribute('src');
    changeDisplayImg(src);
  });
}

function changeDisplayImg(src) {
    displayedImage.setAttribute('src', src);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(e) {
    var class = btn.getAttribute('class');
    if ('dark' === class) {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.background-color = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.background-color = "rgba(0,0,0,0)";
    }
});
