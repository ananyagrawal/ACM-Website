

//Rendering data of the event section from here only;
// import data from "../JSON_data/Events.json";
// console.log(data);
let project_count = 0;
async function project_data_calling() {
    
    const request = await fetch('../JSON_data/Projects.json');
    const data = await request.json();
    
    for (let i = 0; i < 3; i++) {
        const container = document.createElement("div");
        container.setAttribute("class", "project-card");


        const img_cont = document.createElement("img");
        img_cont.src = data[i].image_url;
        img_cont.setAttribute("class", "project-img");
        const heading = document.createElement("div");
        heading.setAttribute("class", "projects-subheading");
        heading.innerHTML = data[i].heading;
        
        const div_cont = document.createElement("div");
        div_cont.setAttribute("class", "project-img-hover");

        const content = document.createElement("p");
        content.setAttribute("class", "project-description");
        content.innerHTML = data[i].content;


        const div_cont_1 = document.createElement("div");
        div_cont_1.setAttribute("class", "github-link");
        
        const git_link = document.createElement("a");
        git_link.setAttribute("class","git_link");
        git_link.href = data[i].github_url;
        const git_img = document.createElement("img");
        git_img.setAttribute("class", "git_img");
        git_img.src = data[i].github_img_link;

        git_link.appendChild(git_img);
        div_cont_1.appendChild(git_link);

        div_cont.appendChild(content);
        div_cont.appendChild(div_cont_1);


        container.appendChild(img_cont);
        container.appendChild(heading);
        container.appendChild(div_cont);


        cards_container.appendChild(container);        
    }
}
project_data_calling();

document.getElementById("project_arrow_left").addEventListener("click", () => {
    //handing if data has end for prev;
    if (project_count > 0) {
        project_count-=3;
        fetch('../JSON_data/Projects.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let i = 0; i < 3; i++) {
                    document.getElementsByClassName("project-img")[i].src = data[i - project_count].image_url;
                    document.getElementsByClassName("projects-subheading")[i].innerHTML = data[i - project_count].heading;
                    document.getElementsByClassName("project-description")[i].innerHTML = data[i - project_count].content;
                    document.getElementsByClassName("git_link")[i].href = data[i - project_count].github_url;
                }
            }); 
    } 
})
document.getElementById("project_arrow_right").addEventListener("click", () => {
    fetch('../JSON_data/Projects.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (project_count + 3 < data.length) {
                project_count += 3;
                for (let i = 0; i < 3; i++) {
                    document.getElementsByClassName("project-img")[i].src = data[i + project_count].image_url;
                    document.getElementsByClassName("projects-subheading")[i].innerHTML = data[i + project_count].heading;
                    document.getElementsByClassName("project-description")[i].innerHTML = data[i + project_count].content;
                    document.getElementsByClassName("git_link")[i].href = data[i + project_count].github_url;
                }
            }
        });
});