var banner_img = document.getElementById("banner");
var cnt = 1;

document.getElementById("leftbutton").addEventListener('click', function() {
    if (cnt == 1) {
        cnt = 3;
    } else {
        cnt--;
    }
    banner_img.style.backgroundImage = "url(./static/images/banner_bg_" + cnt + ".png)";
});

document.getElementById("rightbutton").addEventListener('click', function() {
    if (cnt == 3) {
        cnt = 1;
    } else {
        cnt++;
    }
    banner_img.style.backgroundImage = "url(./static/images/banner_bg_" + cnt + ".png)";
});