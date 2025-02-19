function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error");

    if (passwordInput === "03102022") {
        window.location.href = "page2.html"; // Redirect to the next page
    } else {
        errorMessage.style.display = "block";
        setTimeout(() => errorMessage.style.display = "none", 2000);
    }
}

// Floating hearts effect
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 500);

