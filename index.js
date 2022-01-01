const docContent = {
    impressum: {
        title: "Impressum",
        body: "Loading, please wait...",
        updated: "",
    },
    privacypolicy: {
        title: "Datenschutzerklärung",
        body: "Loading, please wait...",
        updated: "",
    }
};

// make a fetch request to the api to get the imprint and privacy policy. the route is https://api.bergflix.de/api/imprint
fetch("https://api.bergflix.de/api/imprint")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        docContent.impressum.body = data.data.attributes.impressum;
        docContent.privacypolicy.body = data.data.attributes.privacy;
        const timestamp = data.data.attributes.updatedAt;
        // convert the timestamp to a date
        // it is in this format 2022-01-01T14:26:08.717Z
        const date = new Date(timestamp);
        // get the date in the format YYYY-MM-DD
        const dateString = date.toLocaleDateString();
        // get the time in the format HH:MM
        const timeString = date.toLocaleTimeString();
        // combine the date and time
        const updated = dateString + " " + timeString;
        docContent.impressum.updated = updated;
        docContent.privacypolicy.updated = updated;
        console.log(docContent);
    });

document.querySelector("#overlay .close").onclick = () => {
    document.getElementById("overlay").style.display = "none";
};

document.querySelectorAll("#infobar a").forEach(element => element.onclick = e => {
    let type = e.target.getAttribute("data-type");
    let overlay = document.getElementById("overlay");
    let content = overlay.lastElementChild;

    content.firstElementChild.textContent = docContent[type].title;
    content.lastElementChild.innerHTML = docContent[type].body + "<br><br><small>Last updated: " + docContent[type].updated + "</small>";

    overlay.style.display = "initial";
});
