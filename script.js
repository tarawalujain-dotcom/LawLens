function hideAllSections() {

    const sections = [
        "rights",
        "schoolRights",
        "onlineRights",
        "everydayRights",
        "problemFinder",

        "privacyInfo",
        "bullyingInfo",
        "fairTreatmentInfo",
        "speakingUpInfo",

        "onlinePrivacyInfo",
        "cyberbullyingInfo",
        "sharingPhotosInfo",
        "stayingSafeInfo",

        "buyingReturningInfo",
        "agreementsInfo",
        "somethingWrongInfo",
        "legalHelpInfo",

        "sourcesInfo",
        "aboutInfo"
    ];

    sections.forEach(function (id) {

        const element = document.getElementById(id);

        if (element) {
            element.style.display = "none";
        }

    });
}


/* HOME */

function goHome() {

    hideAllSections();

    document.querySelector(".hero").style.display = "block";

    const message = document.getElementById("searchMessage");

    if (message) {
        message.style.display = "none";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* MAIN SECTIONS */

function showRights() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("rights").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSchoolRights() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("schoolRights").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showOnlineRights() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("onlineRights").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showEverydaySituations() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("everydayRights").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* PROBLEM FINDER */

function showProblemFinder() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("problemFinder").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* SCHOOL TOPICS */

function showPrivacy() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("privacyInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showBullying() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("bullyingInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showFairTreatment() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("fairTreatmentInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSpeakingUp() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("speakingUpInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ONLINE TOPICS */

function showOnlinePrivacy() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("onlinePrivacyInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showCyberbullying() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("cyberbullyingInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSharingPhotos() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("sharingPhotosInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showStayingSafe() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("stayingSafeInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* EVERYDAY TOPICS */

function showBuyingReturning() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("buyingReturningInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showAgreements() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("agreementsInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSomethingWrong() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("somethingWrongInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showLegalHelp() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("legalHelpInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* SOURCES */

function showSources() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("sourcesInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ABOUT */

function showAbout() {

    document.querySelector(".hero").style.display = "none";

    hideAllSections();

    document.getElementById("aboutInfo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* SEARCH */

function showSearchMessage() {

    const message = document.getElementById("searchMessage");

    message.innerHTML = `
        <strong>No results found.</strong><br>
        Try searching for privacy, bullying, photos, refunds,
        agreements, school, or legal help.
    `;

    message.style.display = "block";
}


function searchLawLens() {

    const searchInput = document.getElementById("searchInput");

    const search = searchInput.value.toLowerCase().trim();

    const message = document.getElementById("searchMessage");

    if (message) {
        message.style.display = "none";
    }

    if (search === "") {
        showSearchMessage();
        return;
    }


    /* ONLINE */

    if (
        search.includes("cyberbullying") ||
        search.includes("online bullying") ||
        search.includes("bullying online") ||
        search.includes("online harassment")
    ) {

        showCyberbullying();

    }

    else if (
        search.includes("online privacy") ||
        search.includes("personal information") ||
        search.includes("private information") ||
        search.includes("data privacy")
    ) {

        showOnlinePrivacy();

    }

    else if (
        search.includes("sharing photos") ||
        search.includes("share photos") ||
        search.includes("sharing pictures") ||
        search.includes("photos online")
    ) {

        showSharingPhotos();

    }

    else if (
        search.includes("staying safe") ||
        search.includes("online safety") ||
        search.includes("stay safe online") ||
        search.includes("internet safety")
    ) {

        showStayingSafe();

    }

    else if (
        search.includes("instagram") ||
        search.includes("tiktok") ||
        search.includes("snapchat") ||
        search.includes("social media") ||
        search.includes("online")
    ) {

        showOnlineRights();

    }


    /* SCHOOL */

    else if (
        search.includes("bullying") ||
        search.includes("harassment")
    ) {

        showBullying();

    }

    else if (
        search.includes("privacy") ||
        search.includes("private")
    ) {

        showPrivacy();

    }

    else if (
        search.includes("fair treatment") ||
        search.includes("discrimination") ||
        search.includes("treated unfairly") ||
        search.includes("equal treatment")
    ) {

        showFairTreatment();

    }

    else if (
        search.includes("speaking up") ||
        search.includes("getting help") ||
        search.includes("school problem")
    ) {

        showSpeakingUp();

    }

    else if (
        search.includes("school") ||
        search.includes("student") ||
        search.includes("teacher") ||
        search.includes("classroom")
    ) {

        showSchoolRights();

    }


    /* EVERYDAY */

    else if (
        search.includes("refund") ||
        search.includes("return") ||
        search.includes("returning") ||
        search.includes("purchase") ||
        search.includes("buying")
    ) {

        showBuyingReturning();

    }

    else if (
        search.includes("agreement") ||
        search.includes("contract") ||
        search.includes("signed")
    ) {

        showAgreements();

    }

    else if (
        search.includes("complaint") ||
        search.includes("something went wrong") ||
        search.includes("problem with a purchase")
    ) {

        showSomethingWrong();

    }

    else if (
        search.includes("lawyer") ||
        search.includes("legal help") ||
        search.includes("legal advice")
    ) {

        showLegalHelp();

    }

    else if (
        search.includes("everyday") ||
        search.includes("daily life") ||
        search.includes("consumer")
    ) {

        showEverydaySituations();

    }

    else {

        showSearchMessage();

    }
}


/* DARK MODE */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {

        button.textContent = "☀️";

        localStorage.setItem("lawlensDarkMode", "true");

    }

    else {

        button.textContent = "🌙";

        localStorage.setItem("lawlensDarkMode", "false");

    }
}


/* REMEMBER DARK MODE */

window.addEventListener("load", function () {

    const darkMode = localStorage.getItem("lawlensDarkMode");

    const button = document.querySelector(".theme-btn");

    if (darkMode === "true") {

        document.body.classList.add("dark");

        if (button) {
            button.textContent = "☀️";
        }

    }

});