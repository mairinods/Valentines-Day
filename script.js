// Function to handle button click events
function selectOption(option) {

    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayAfterYesGif(); // Show second GIF
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


// 🌈 Rainbow flash effect
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


// 🔹 GIF BEFORE pressing Yes
function displayBeforeGif() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var beforeGif = new Image();
    beforeGif.src = 'Me.gif';  // ✅ Your first GIF
    beforeGif.alt = 'Before GIF';

    imageContainer.appendChild(beforeGif);
}


// 🔹 GIF AFTER pressing Yes
function displayAfterYesGif() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var afterGif = new Image();
    afterGif.src = 'heart.gif';  // ✅ Your second GIF (change if needed)
    afterGif.alt = 'After GIF';

    imageContainer.appendChild(afterGif);

    document.getElementById('options').style.display = 'none';
}


// Show first GIF when page loads
displayBeforeGif();
