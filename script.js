// About PFP color changer
function changeBorderColor() {
    var colors = ["#3a1c1c", "#1c343a", "#1c283a", "#211c3a", "#351c3a", "#1c3a32"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("about__pfp").style.borderColor = randomColor;
}

window.onload = changeBorderColor;

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(function () {
        notification.classList.remove('show');
    }, 3000);
}

//Clock
function updateClock() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";

    // Convert to 12-hour format
    if (hours >= 12) {
        meridiem = "PM";
        hours = hours % 12;
    }

    // Adjust for midnight
    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById("clock").innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);