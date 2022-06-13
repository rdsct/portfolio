//cursor



var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
    e.stopPropagation();
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});



var clickableCursor = document.getElementsByTagName('a');
var clickableCursor2 = document.getElementsByClassName('nav-link');

for (var i = 0; i < clickableCursor.length; i++) {
    clickableCursor[i].addEventListener('mouseover', () => {
        cursor.style.height = "100px";
        cursor.style.width = "100px";
    });
    clickableCursor[i].addEventListener('mouseout', () => {
        cursor.style.height = "40px";
        cursor.style.width = "40px";
    });

}

document.addEventListener('click', () => {
    cursor.classList.add("expand");  
    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  })