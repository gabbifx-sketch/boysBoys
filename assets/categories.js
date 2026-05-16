
// Panic mode-overlay
const studyBtn = document.getElementById("studyBtn");
const overlay = document.getElementById("studyOverlay");
const closeBtn = document.getElementById("closeBtn");

studyBtn.onclick = () => {
    overlay.style.display = "flex";
};

closeBtn.onclick = () => {
    overlay.style.display = "none";
};

const catigTitle = document.getElementById('catg-overlay-header-title');
const catigBtn = document.querySelectorAll('.catig');
const realDisplay = document.querySelector('.real-displaycatig');

catigBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const clickedCategory = btn.innerText;
        catigTitle.innerText = clickedCategory;
        realDisplay.innerHTML = '';

        games.forEach(game => {
            // THE NEW IF STATEMENT
            // This says: "If the list of categories INCLUDES the word on the button"
            if (game.categories && game.categories.includes(clickedCategory)) {
                
                const card = document.createElement("div");
                card.className = "game-card";
                card.innerHTML = `
                    <a href="./play.html?game=${encodeURIComponent(game.id)}">
                        <div class="game-image">
                            <img src="${game.img}" alt="${game.title}">
                        </div>
                        <div class="game-content">
                            <p>${game.title}</p>
                        </div>
                    </a>
                `;
                realDisplay.appendChild(card);
            }
        });

        if (realDisplay.innerHTML === '') {
            realDisplay.innerHTML = `<p style="color:white; padding:20px;">No games found for ${clickedCategory} yet!</p>`;
        }
    });
});