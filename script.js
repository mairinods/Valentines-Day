// Function to handle button click events
function selectOption(option) {

    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayAfterYesGif(); // Show Me.gif after Yes
        });
    } 
    else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';

        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } 
    else {
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
        if (callback) {
            callback();
        }
    }, 2000);
}


// Display Me.gif ONLY after pressing Yes
function displayAfterYesGif() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var gif = new Image();
    gif.src = 'Me.gif';   // ✅ Your GIF
    gif.alt = 'Me';
    gif.id = 'after-gif'; // add an ID to style it with CSS

    imageContainer.appendChild(gif);

    document.getElementById('options').style.display = 'none';
}
