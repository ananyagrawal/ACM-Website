


async function gallery_data_calling() {
    const request = await fetch('JSON_data/Gallery.json');
    const data = await request.json();

    for (let i = 0; i < data.length; i++){
        const img_cont = document.createElement("img");
        img_cont.src = data[i].image_url;
        img_cont.setAttribute("class", "item");
        document.getElementById("gallery_imgs").appendChild(img_cont);
    }
}

gallery_data_calling();


///click on right button;
var button = document.getElementById("gallery_right_btn");
button.onclick = function () {
    var container = document.getElementById("gallery_imgs");
    sideScroll(container, "right", 10, 1000, 600);
};

// click on left button;
var back = document.getElementById("gallery_left_btn");
back.onclick = function () {
    var container = document.getElementById("gallery_imgs");
    sideScroll(container, "left", 10, 1000, 600);
}


//function to scroll button;
function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == "left") {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}