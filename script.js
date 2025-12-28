const form = document.getElementById("recommendation-form");
const textarea = document.getElementById("new-recommendation");
const list = document.getElementById("recommendation-list");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-popup");

function showPopup(flag) {
    if (flag) {
        popup.classList.remove("hidden");
    }
}

function addRecommendation(text) {
    const block = document.createElement("blockquote");
    block.className = "recommendation";
    block.textContent = `"${text}"`;
    list.appendChild(block);
    showPopup(true);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = textarea.value.trim();
    if (!text) return;

    addRecommendation(text);
    textarea.value = "";
});

closeBtn.addEventListener("click", function () {
    popup.classList.add("hidden");
});
