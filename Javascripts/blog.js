

//Rendering data of the event section from here only;
// import data from "../JSON_data/Events.json";
// console.log(data);
let blog_count = 0;
async function blog_data_calling() {
    
    const request = await fetch('../JSON_data/Blog.json');
    const data = await request.json();
    
    for (let i = 0; i < 3; i++) {
        const container_1 = document.createElement("div");
        container_1.setAttribute("class", "blog_card");
        const img_cont_1= document.createElement("img");
        img_cont_1.src = data[i].image_url;
        img_cont_1.setAttribute("class", "blog_img");
        const heading_1= document.createElement("div");
        heading_1.setAttribute("class", "blog_subheading");
        heading_1.innerHTML = data[i].heading;
        
        const div_cont_3 = document.createElement("div");
        div_cont_3.setAttribute("class", "blog-img-hover");

        const content_1 = document.createElement("p");
        content_1.setAttribute("class", "blog-description");
        content_1.innerHTML = data[i].content;


        const div_cont_4 = document.createElement("div");
        div_cont_4.setAttribute("class", "github-link");
        
        const git_link_1= document.createElement("a");
        git_link_1.setAttribute("class","git_link");
        git_link_1.href = data[i].github_url;
        const git_img_1 = document.createElement("img");
        git_img_1.setAttribute("class", "git_img");
        git_img_1.src = data[i].github_img_link;

        git_link_1.appendChild(git_img_1);
        div_cont_4.appendChild(git_link_1);

        div_cont_3.appendChild(content_1);
        div_cont_3.appendChild(div_cont_4);


        container_1.appendChild(img_cont_1);
        container_1.appendChild(heading_1);
        container_1.appendChild(div_cont_3);


        blogs_container.appendChild(container_1);        
    }
}
blog_data_calling();

document.getElementById("blog_arrow_left").addEventListener("click", () => {
    //handing if data has end for prev;
    if (project_count > 0) {
        project_count-=3;
        fetch('../JSON_data/Projects.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let i = 0; i < 3; i++) {
                    document.getElementsByClassName("blog_img")[i].src = data[i - project_count].image_url;
                    document.getElementsByClassName("blog_subheading")[i].innerHTML = data[i - project_count].heading;
                    document.getElementsByClassName("blog-description")[i].innerHTML = data[i - project_count].content;
                    document.getElementsByClassName("git_link")[i].href = data[i - project_count].github_url;
                }
            }); 
    } 
})
document.getElementById("blog_arrow_right").addEventListener("click", () => {
    fetch('../JSON_data/Projects.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (project_count + 3 < data.length) {
                project_count += 3;
                for (let i = 0; i < 3; i++) {
                    document.getElementsByClassName("blog_img")[i].src = data[i + project_count].image_url;
                    document.getElementsByClassName("blog_subheading")[i].innerHTML = data[i + project_count].heading;
                    document.getElementsByClassName("blog-description")[i].innerHTML = data[i + project_count].content;
                    document.getElementsByClassName("git_link")[i].href = data[i + project_count].github_url;
                }
            }
        });
});