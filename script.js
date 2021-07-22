const westWingYouClick = document.getElementById("westWingYouClick");
const westWingYou = document.getElementById("westWingYou");
const westWingMeClick = document.getElementById("westWingMeClick");
const westWingMe = document.getElementById("westWingMe");

const officeYouClick = document.getElementById("officeYouClick");
const officeYou = document.getElementById("officeYou");
const officeMeClick = document.getElementById("officeMeClick");
const officeMe = document.getElementById("officeMe");

const parksYouClick = document.getElementById("parksYouClick");
const parksYou = document.getElementById("parksYou");
const parksMeClick = document.getElementById("parksMeClick");
const parksMe = document.getElementById("parksMe");

const runYouClick = document.getElementById("runYouClick");
const runYou = document.getElementById("runYou");
const eerdClick = document.getElementById("eerdClick");
const eerd = document.getElementById("eerd");

const happyContainer = document.getElementById("happyContainer");

westWingYouClick.addEventListener("click", (event) => {
    westWingYou.removeAttribute("hidden");
    westWingMeClick.removeAttribute("hidden");
    westWingMeClick.scrollIntoView({behavior: 'smooth'});
})
westWingMeClick.addEventListener("click", (event) => {
    westWingMe.removeAttribute("hidden");
    officeYouClick.removeAttribute("hidden");
    officeYouClick.scrollIntoView({behavior: 'smooth'});
})

officeYouClick.addEventListener("click", (event) => {
    officeYou.removeAttribute("hidden");
    officeMeClick.removeAttribute("hidden");
    officeMeClick.scrollIntoView({behavior: 'smooth'});
})
officeMeClick.addEventListener("click", (event) => {
    officeMe.removeAttribute("hidden");
    parksYouClick.removeAttribute("hidden");
    parksYouClick.scrollIntoView({behavior: 'smooth'});
})

parksYouClick.addEventListener("click", (event) => {
    parksYou.removeAttribute("hidden");
    parksMeClick.removeAttribute("hidden");
    parksMeClick.scrollIntoView({behavior: 'smooth'});
})
parksMeClick.addEventListener("click", (event) => {
    parksMe.removeAttribute("hidden");
    runYouClick.removeAttribute("hidden");
    runYouClick.scrollIntoView({behavior: 'smooth'});
})

runYouClick.addEventListener("click", (event) => {
    runYou.removeAttribute("hidden");
    eerdClick.removeAttribute("hidden");
    eerdClick.scrollIntoView({behavior: 'smooth'});
})

eerdClick.addEventListener("click", (event) => {
    eerd.removeAttribute("hidden");
    eerd.scrollIntoView({behavior: 'smooth'});
    setTimeout(() => {
        happyContainer.removeAttribute("hidden");
    }, 1500);

})

