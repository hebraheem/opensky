function getPost() {
    method: 'GET'
    fetch('https://opensky-network.org/api/states/all')
    .then(res => res.json())
    .then(data => {
        let infos = data.states
        let output = `<h2 class= text-center >Flight Information</h2>`;
        infos.forEach((info, index) => {
            if(index <= 20){
                // console.log(info)
                // console.log(info[0])
                // console.log(info[1])
                // console.log(info[2])

                output +=`
                <div class= card m-4 style="display: flex; margin-bottom:20px">
                    <div class= card card-body>
                        <h6>Country: ${info[2]}</h6>
                        <h6>Flight Number: ${info[1]}</h6>
                        <h6>Take off Time: ${info[3]}</h6>
                        <h6>Landing Time: ${info[4]}</h6>
                    </div>
                </div>
                `
            }
        });
        document.querySelector('.files').innerHTML = output


    })
}
getPost();



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



