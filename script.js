// Portfolio Dashboard Main JavaScript Logic
// CONTROL MATRIX FOR THE PREMIUM CYBER LOADER
window.addEventListener("load", () => {
    const loaderBlock = document.getElementById("cyberLoader");
    
    // Web loading tasks pure hote hi loader dismiss ho jayega
    setTimeout(() => {
        if(loaderBlock) {
            loaderBlock.classList.add("fade-out-pack");
        }
    }, 1500); // 1.5 seconds ka solid professional display time
});
// DYNAMIC NUMERIC COUNTER MATRIX
window.addEventListener("DOMContentLoaded", () => {
    const countElement = document.getElementById("loadCount");
    const loaderBlock = document.getElementById("cyberLoader");
    let currentProgress = 0;

    // Har 12ms par count badhega (Around 1.2s total time)
    const loadInterval = setInterval(() => {
        currentProgress += 1;
        if (countElement) {
            countElement.innerText = `${currentProgress}%`;
        }

        // 100% complete hote hi fade out trigger
        if (currentProgress >= 100) {
            clearInterval(loadInterval);
            setTimeout(() => {
                if (loaderBlock) {
                    loaderBlock.classList.add("fade-out-pack");
                }
            }, 200); // 100% hone par smooth dismiss delay
        }
    }, 12); 
});
//Portfolio Dashboard Main JavaScript Logic
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

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            // Matrix Digital Rain aur Loader ka poora JS logic yahan aayega...
        });
    </script>
function toggleProject(card){

    document.querySelectorAll('.card').forEach(c=>{
        if(c !== card){
            c.classList.remove('revealed');
        }
    });

    card.classList.toggle('revealed');
}