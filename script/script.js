function saveName() {
    let name = document.getElementById("nameInput").value.trim();
    if (name) {
        localStorage.setItem("username", name);
        document.getElementById("greeting").innerText = `Sveiki, ${name}!`;
        document.getElementById("screen1").classList.add("hidden");
        document.getElementById("screen2").classList.remove("hidden");
    }
}

function saveAnswer() {
    let selected = document.querySelector('input[name="reason"]:checked');
    if (selected) {
        localStorage.setItem("userReason", selected.value);
        document.getElementById("screen2").classList.add("hidden");
        document.getElementById("screen3").classList.remove("hidden");
        loadProfile();
    }
}

function loadProfile() {
    let name = localStorage.getItem("username");
    if (name) {
        document.getElementById("profileGreeting").innerText = `Sveiki, ${name}!`;
        document.getElementById("profileIcon").innerText = name.charAt(0).toUpperCase();
    }

    let date = new Date();
    let formattedDate = date.toLocaleDateString("lv-LV", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
    });
    document.getElementById("currentDate").innerText = formattedDate;
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function logout() {
    localStorage.clear();
    location.reload();
}

window.onload = function() {
    if (localStorage.getItem("username")) {
        document.getElementById("screen1").classList.add("hidden");
        document.getElementById("screen3").classList.remove("hidden");
        loadProfile();
    }
};