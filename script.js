function getPost() {
    method: 'GET'
    fetch('https://opensky-network.org/api/states/all?begin=1517227200&end=1517230800')
    .then(res => res.json())
    .then(data => console.log(data))
}
getPost();


window.addEventListener("scroll", () =>{
    let nav = document.querySelector(".nav")
    if(window.scrollY>100){
        nav.classList.add("nav_bg")
    }else {
        nav.classList.remove("nav_bg")
    }
})

