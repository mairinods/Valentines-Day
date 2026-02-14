function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayAfterYesGif(); // Show Me.gif + message
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;

    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// Show heart.gif on page load
function displayHeartGif() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var heartGif = new Image();
    heartGif.src = 'heart.gif';
    heartGif.alt = 'Heart';
    heartGif.id = 'heart-gif';

    imageContainer.appendChild(heartGif);
}

// Show Me.gif + message after Yes
function displayAfterYesGif() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var gif = new Image();
    gif.src = 'Me.gif';
    gif.alt = 'Me';
    gif.id = 'after-gif';

    imageContainer.appendChild(gif);

    // Hide buttons
    document.getElementById('options').style.display = 'none';

    // Show message below GIF
    var message = document.getElementById('message-container');
    message.innerText = 'Thanks my beautiful baby girl';
    message.style.display = 'block';
}

// Initialize page with heart.gif
displayHeartGif();
