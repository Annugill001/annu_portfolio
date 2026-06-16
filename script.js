// Portfolio Dashboard Main JavaScript Logic
document.addEventListener("DOMContentLoaded", () => {
    console.log("// PORTFOLIO SYSTEM ONLINE");

    // 1. Dynamic clock implementation
    initializeSystemClock();

    // 2. Skill bars dynamic filler loading animation
    animateSkillBars();

    // 3. Project hover inspection triggers
    setupCardInteractivity();
});

function initializeSystemClock() {
    const statusBar = document.querySelector(".status-bar");
    if (!statusBar) return;
    
    const timeDisplay = document.createElement("div");
    timeDisplay.className = "status-time";
    timeDisplay.style.color = "#666";
    
    statusBar.appendChild(timeDisplay);

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        timeDisplay.textContent = `SYS_TIME: ${timeString}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}

function animateSkillBars() {
    const progressFills = document.querySelectorAll(".progress-fill");

    progressFills.forEach((fill) => {
        // Read target dynamic width from data attribute
        const targetWidth = fill.getAttribute("data-width") || "100%";
        
        fill.style.width = "0%";
        fill.style.transition = "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)";

        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 200);
    });
}

function setupCardInteractivity() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        const titleEl = card.querySelector(".project-title");
        if (!titleEl) return;
        
        const projectTitle = titleEl.textContent;

        card.addEventListener("mouseenter", () => {
            console.log(`[VIEWING] Asset Pipeline: "${projectTitle}"`);
        });

        card.addEventListener("click", () => {
            console.log(`[REDIRECT] Loading asset package for ${projectTitle}...`);
        });
    });
}
