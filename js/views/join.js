function onJoinSubmit() {
    var name = [document.getElementById('firstName').value, document.getElementById('lastName').value].join(' ');
    location.assign('./survey.html?name=' + name);
    return false;
}

function onSurveySubmit() {
    location.assign('./welcome.html?name=' + getParameterByName('name'));
    return false;
}

function getParameterByName(name, url) {
    url = url || window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function personalize() {
    var name = getParameterByName('name');
    var personal = document.getElementById('personal');
    personal.innerText = personal.innerText.replace('%NAME%', name);
}
