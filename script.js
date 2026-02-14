// Handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            // Hide the question
            document.getElementById('question').style.display = 'none';
            // Show the GIF only AFTER Yes
            displayAfterYesGif();
        });
    } else if (option === 'no') {
        // Change No button text
        document.getElementById('no-button').innerText = 'You sure?';
        // Make Yes button bigger
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Rainbow flash effect
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

// Show Me.gif after pressing Yes
function displayAfterYesGif() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear anything inside

    var gif = new Image();
    gif.src = 'Me.gif';  // ✅ Make sure the file is in the same folder
    gif.alt = 'Me';
    gif.id = 'after-gif';

    imageContainer.appendChild(gif);

    // Hide the buttons
    document.getElementById('options').style.display = 'none';
}
