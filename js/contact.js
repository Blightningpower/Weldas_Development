var clickCount = 0;
var image = document.getElementById("weldasgebouw");

function rotateImage() {
  clickCount++;

  if (clickCount === 5) {
    image.classList.add("rotate");
    clickCount = 0; // Reset clickCount

    // Verwijder de CSS-klasse na de animatie
    setTimeout(function() {
      image.classList.remove("rotate");
    }, 2000);
  }
}