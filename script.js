function hideAllSections() {
    const sections = [
        "rights",
        "schoolRights",
        "onlineRights",
        "everydayRights",
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

function showRights() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("rights").style.display = "block";
}

function showSchoolRights() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("schoolRights").style.display = "block";
}

function showPrivacy() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("privacyInfo").style.display = "block";
}

function showBullying() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("bullyingInfo").style.display = "block";
}

function showFairTreatment() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("fairTreatmentInfo").style.display = "block";
}

function showSpeakingUp() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("speakingUpInfo").style.display = "block";
}

function showOnlineRights() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("onlineRights").style.display = "block";
}

function showOnlinePrivacy() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("onlinePrivacyInfo").style.display = "block";
}

function showCyberbullying() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("cyberbullyingInfo").style.display = "block";
}

function showSharingPhotos() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("sharingPhotosInfo").style.display = "block";
}

function showStayingSafe() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("stayingSafeInfo").style.display = "block";
}

function showEverydaySituations() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("everydayRights").style.display = "block";
}

function showBuyingReturning() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("buyingReturningInfo").style.display = "block";
}

function showAgreements() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("agreementsInfo").style.display = "block";
}

function showSomethingWrong() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("somethingWrongInfo").style.display = "block";
}

function showLegalHelp() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("legalHelpInfo").style.display = "block";
}

function showSources() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("sourcesInfo").style.display = "block";
}

function showAbout() {
    document.querySelector(".hero").style.display = "none";
    hideAllSections();
    document.getElementById("aboutInfo").style.display = "block";
}

function goHome() {
    hideAllSections();
    document.querySelector(".hero").style.display = "block";

    const message = document.getElementById("searchMessage");

    if (message) {
        message.style.display = "none";
    }
}

function showSearchMessage() {
    const message = document.getElementById("searchMessage");

    message.innerHTML = `
        <strong>No results found</strong>
        Try searching for: privacy, bullying, refunds, photos, or legal help.
    `;

    message.style.display = "block";
}

function searchLawLens() {
    const search = document.getElementById("searchInput").value.toLowerCase().trim();

    const message = document.getElementById("searchMessage");

    if (message) {
        message.style.display = "none";
    }

    if (search === "") {
        showSearchMessage();
        return;
    }

    // ONLINE & SOCIAL MEDIA
    if (
        search.includes("cyberbullying") ||
        search.includes("online bullying") ||
        search.includes("bullying online") ||
        (search.includes("bullying") && search.includes("online")) ||
        search.includes("online harassment")
    ) {
        showCyberbullying();

    } else if (
        search.includes("online privacy") ||
        search.includes("personal information") ||
        search.includes("private information") ||
        search.includes("data privacy")
    ) {
        showOnlinePrivacy();

    } else if (
        search.includes("sharing photos") ||
        search.includes("share photos") ||
        search.includes("sharing pictures") ||
        search.includes("photos online")
    ) {
        showSharingPhotos();

    } else if (
        search.includes("staying safe") ||
        search.includes("online safety") ||
        search.includes("stay safe online") ||
        search.includes("internet safety")
    ) {
        showStayingSafe();

    } else if (
        search.includes("social media") ||
        search.includes("instagram") ||
        search.includes("tiktok") ||
        search.includes("snapchat") ||
        search.includes("online")
    ) {
        showOnlineRights();

        // SCHOOL
    } else if (
        search.includes("bullying") ||
        search.includes("harassment")
    ) {
        showBullying();

    } else if (
        search.includes("privacy") ||
        search.includes("private")
    ) {
        showPrivacy();

    } else if (
        search.includes("fair treatment") ||
        search.includes("discrimination") ||
        search.includes("treated unfairly") ||
        search.includes("equal treatment")
    ) {
        showFairTreatment();

    } else if (
        search.includes("speaking up") ||
        search.includes("getting help") ||
        search.includes("need help") ||
        search.includes("school problem")
    ) {
        showSpeakingUp();

    } else if (
        search.includes("school") ||
        search.includes("student") ||
        search.includes("teacher") ||
        search.includes("classroom")
    ) {
        showSchoolRights();

        // EVERYDAY SITUATIONS
    } else if (
        search.includes("refund") ||
        search.includes("return") ||
        search.includes("returning") ||
        search.includes("bought something") ||
        search.includes("buying")
    ) {
        showBuyingReturning();

    } else if (
        search.includes("agreement") ||
        search.includes("contract") ||
        search.includes("signed")
    ) {
        showAgreements();

    } else if (
        search.includes("complaint") ||
        search.includes("something went wrong") ||
        search.includes("problem with a purchase")
    ) {
        showSomethingWrong();

    } else if (
        search.includes("lawyer") ||
        search.includes("legal help") ||
        search.includes("legal advice")
    ) {
        showLegalHelp();

    } else if (
        search.includes("everyday") ||
        search.includes("daily life") ||
        search.includes("consumer")
    ) {
        showEverydaySituations();

    } else {
        showSearchMessage();
    }
}