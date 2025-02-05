//header
const headerButton = document.getElementById("headerButton")
const headerButton2 = document.getElementById("headerButton2")
const contactWrapper = document.querySelector(".contactWrapper")
const html = document.querySelector("html")


headerButton.onclick = function() {
    contactWrapper.style.display="flex"
    html.style.overflow="hidden"
}
headerButton2.onclick = function() {
    contactWrapper.style.display="flex"
    html.style.overflow="hidden"
    offScreenMenu.style.right= "-450px"
    offScreenMenu.setAttribute("isActive", false)
}
contactWrapper.onclick = function() {
    contactWrapper.style.display="none"
    html.style.overflow="visible"
}


// hamburger menu
const headerHam = document.getElementById("headerHam")
const offScreenMenu = document.getElementById("offScreenMenu")

headerHam.onclick = showHam

function showHam() {
    isActive = offScreenMenu.getAttribute("isActive")
    if (isActive == null || isActive == "false"){
        offScreenMenu.style.right= "0"
        offScreenMenu.setAttribute("isActive", true)
    } else {
        offScreenMenu.style.right= "-450px"
        offScreenMenu.setAttribute("isActive", false)
    }
}


// routing
const HOST_ROUTE = "http://localhost:8000" // change this

const homePageButtons = document.querySelectorAll(".homePage")
const aboutUsButtons = document.querySelectorAll(".aboutUsPage")
const questionsPageButtons = document.querySelectorAll(".questionsPage")
const servicesPageButtons = document.querySelectorAll(".servicesPage")

const redirectButtons = [homePageButtons, aboutUsButtons, questionsPageButtons, servicesPageButtons]

redirectButtons.forEach(redirectButtonArray => redirectButtonArray.forEach(homePageButton => homePageButton.addEventListener("click", (e) => {
    const buttonClass = e.target.className.split(" ")[1]
    console.log(buttonClass)
    const newRoute = route[buttonClass]
    window.location.href = `${HOST_ROUTE}/${newRoute}`

})))

route = {
    homePage: "home",
    aboutUsPage: "about-us",
    questionsPage: "questions",
    servicesPage: "services",
}

async function routeHome(event) {
    const buttonClass = event.target.class

    console.log(event.target)
    const newRoute = route[buttonClass]
    window.location.href = `${HOST_ROUTE}/${newRoute}`
}