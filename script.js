let btn = document.querySelector('.btn').addEventListener("click", getPost)
function getPost() {
    method: 'GET'
    fetch('https://opensky-network.org/api/states/all')
    .then(res => res.json())
    .then(data => {
        let infos = data.states
        let output=""
        let headerText = `<h2 class = "jumbotron display-4 text-center" >Flight Information</h2>`;
        infos.forEach((info, index) => {
            if(index <= 20){
             output +=`
                <div class= "card mb-4 m-auto" style="width: 350px">
                    <h4 class="pb-2 pl-2 card card-header">Country: ${info[2]}</h4>
                    <div class= "card card-body">
                        <h6 class="pl-2 pb-2 pt-2">Code: ${info[0]}</h6>
                        <h6 class="pb-2 pl-2">Flight Number: ${info[1]}</h6>
                        <h6 class="pb-2 pl-2">Take off Time: ${info[3]}</h6>
                        <h6 class="pb-2 pl-2">Take off Delay: ${info[4]}</h6>
                        <h6 class="pb-2 pl-2">Latitude: ${info[5]}</h6>
                        <h6 class="pb-2 pl-2">Longitude: ${info[7]}</h6>
                        <h6 class="pb-2 pl-2">Return: ${info[8]}</h6>
                    </div>
                </div>
                `
            }
        });
        document.querySelector('.files').innerHTML = output
        document.querySelector('.textfile').innerHTML = headerText
    })
}
getPost()


let nav = document.querySelector(".nav")
window.addEventListener("scroll", () =>{
    if(window.scrollY>100){
        nav.classList.add("nav_bg")
    }else {
        nav.classList.remove("nav_bg")
    }
})

let close = document.querySelector('.close')
let side_nav = document.querySelector('.side_nav')
let bars =document.querySelector('.bars')
bars.addEventListener("click", barsClicked);
close.addEventListener("click", closeClicked);

function barsClicked() {
    nav.style.display ="none"
    side_nav.style.display ="block"
}

function closeClicked() {
    nav.style.display ="flex"
    side_nav.style.display ="none"
}



