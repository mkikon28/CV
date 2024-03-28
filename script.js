function toggleDetails(elementId, buttonId) {
    var details = document.getElementById(elementId);
    var lessInfoButton = document.querySelector('#' + buttonId + ' + .dropdown button:last-of-type');
    var moreInfoButton = document.querySelector('#' + buttonId + ' + .dropdown button:first-of-type');

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        moreInfoButton.style.display = 'none';
        lessInfoButton.style.display = 'inline-block';
    } else {
        details.style.display = 'none';
        moreInfoButton.style.display = 'inline-block';
        lessInfoButton.style.display = 'none';
    }
}

// Toggle project details
function toggleProjectDetails() {
    toggleDetails('project-details', 'project-details');
}

// Toggle experience details
function toggleExperienceDetails() {
    toggleDetails('experience-details', 'experience-details');
}

// Initially show project details and hide experience details
toggleProjectDetails();
