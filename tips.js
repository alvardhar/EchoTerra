window.addEventListener('DOMContentLoaded', function() {    
    document.body.addEventListener("click", function(ev){
        const titleBar = ev.target.closest(".expandable__title-bar");
        if (!titleBar) return;

        const expandable = titleBar.closest(".expandable");
        const toggle = titleBar.querySelector(".expandable__toggle");

        expandable.classList.toggle("expandable--open");

        if (expandable.classList.contains("expandable--open")) {
            toggle.textContent = "-"
        } else {
            toggle.textContent = "+"
        }
    });
});