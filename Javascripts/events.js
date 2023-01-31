

//Rendering data of the event section from here only;
// import data from "../JSON_data/Events.json";

let count = 0;
async function event_data_calling() {
    
    const request = await fetch('JSON_data/Events.json');
    const data = await request.json();
    

    for (let i = 0; i < data.length; i++) {
        const container = document.createElement("a");
        container.href = "#";
        container.setAttribute("class","event_card_holding")
        const main = document.createElement("div");
        main.setAttribute("class", "Eventscard");
        const img_cont = document.createElement("img");
        img_cont.src = data[i].image_url;
        img_cont.setAttribute("id", "poster");
        img_cont.setAttribute("class", "poster_class");
        const text_cont = document.createElement("div");
        text_cont.setAttribute("class", "Eventstext");
        const heading = document.createElement("h1");
        heading.setAttribute("class", "Eventsh");
        heading.innerHTML = data[i].heading;
        const content = document.createElement("p");
        content.setAttribute("id", "con");
        content.setAttribute("class", "con_class");
        content.innerHTML = data[i].content;

        text_cont.appendChild(heading);
        text_cont.appendChild(content);

        main.appendChild(img_cont);
        main.appendChild(text_cont);

        container.appendChild(main);

        document.getElementById("event_cont").appendChild(container);
    }
}
event_data_calling();



///click on right button;
var button = document.getElementById("right");
button.onclick = function () {
    var container = document.getElementById("event_cont");
    sideScroll(container, "right", 10, 1000, 600);
};

// click on left button;
var back = document.getElementById("left");
back.onclick = function () {
    var container = document.getElementById("event_cont");
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