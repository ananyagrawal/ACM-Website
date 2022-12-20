

//Rendering data of the event section from here only;
// import data from "../JSON_data/Events.json";
// console.log(data);
let count = 0;
async function event_data_calling() {
    
    const request = await fetch('../JSON_data/Events.json');
    const data = await request.json();
    
    for (let i = 0; i < 2; i++) {
        const container = document.createElement("a");
        container.href = "#";
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

document.getElementById("left").addEventListener("click", () => {
    //handing if data has end for prev;
    if (count > 0) {
        count-=2;
        fetch('../JSON_data/Events.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let i = 0; i < 2; i++) {
                    document.getElementsByClassName("poster_class")[i].src = data[i -count].image_url;
                    document.getElementsByClassName("Eventsh")[i].innerHTML = data[i - count].heading;
                    document.getElementsByClassName("con_class")[i].innerHTML = data[i + count].content;
                }
            }); 
    }
    
    
})
document.getElementById("right").addEventListener("click", () => {
    fetch('../JSON_data/Events.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (count + 2 < data.length) {
                count += 2;
                for (let i = 0; i < 2; i++) {
                    document.getElementsByClassName("poster_class")[i].src = data[i + count].image_url;
                    document.getElementsByClassName("Eventsh")[i].innerHTML = data[i + count].heading;
                    document.getElementsByClassName("con_class")[i].innerHTML = data[i + count].content;
                }
            }
        });
});