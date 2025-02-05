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
