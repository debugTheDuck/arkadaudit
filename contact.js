// show contact if there's np contact section on a page
const contactShowContact = document.getElementById("contactShowContact") 
const contactApplicationWrapper = document.getElementById("contactApplicationWrapper")

contactShowContact.onclick = function() {
    contactApplicationWrapper.style.display = "flex"
}

contactApplicationWrapper.addEventListener('click', function(event) {
  if (event.target === contactApplicationWrapper) {
    contactApplicationWrapper.style.display = 'none'
  }
})

const contactButton = document.getElementsByClassName("contactButton")

// add event listener to the all elements of class contactButtons
for (var i = 0; i < contactButton.length; i++){  
  contactButton[i].addEventListener('click', function () {showContacts()})
}

function showContacts() {
  contactWrapper.style.display="flex"
  html.style.overflow="hidden"
}