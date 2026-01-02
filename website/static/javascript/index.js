
const toggleScrollToTop = new IntersectionObserver(scrollToTopVisibilityToggle)

function scrollToTopVisibilityToggle(entries) {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        scrollToTop.classList.add("hidden")
    } else {
        scrollToTop.classList.remove("hidden")
    }
    })
}

function turnOffDarkMode() {
    darkModeToggle.classList.remove("hidden")
    darkModeLogo.classList.add("hidden")
    lightModeToggle.classList.add("hidden")
    lightModeLogo.classList.remove("hidden")
    document.body.classList.remove("dark-mode")
}

function turnOnDarkMode() {
    
    darkModeToggle.classList.add("hidden")
    darkModeLogo.classList.remove("hidden")
    lightModeToggle.classList.remove("hidden")
    lightModeLogo.classList.add("hidden")
    document.body.classList.add("dark-mode")
}

darkModeToggle.addEventListener('click', () => {

    if (!document.startViewTransition) {
        turnOnDarkMode();
        return;
    }

    document.startViewTransition(() => {
        turnOnDarkMode();
    });
})

lightModeToggle.addEventListener('click', () => {

    if (!document.startViewTransition) {
        turnOffDarkMode();
        return;
    }

    document.startViewTransition(() => {
        turnOffDarkMode();
    });
})

toggleScrollToTop.observe(navBar)