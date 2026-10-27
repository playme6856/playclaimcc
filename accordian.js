document.addEventListener("DOMContentLoaded", () => {
    // 1. Select all accordion components in the sidebar
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        // Find the button and the content wrapper inside this specific accordion
        const button = accordion.querySelector(".header button");
        const content = accordion.querySelector(".content");
        
        // Find the chevron icon so we can rotate it
        const chevron = accordion.querySelector('svg[data-ds-icon="ChevronDown"]');

        // 2. Add click event listener to the button
        button.addEventListener("click", () => {
            // Check current state
            const isExpanded = button.getAttribute("aria-expanded") === "true";

            if (isExpanded) {
                // Close the accordion
                button.setAttribute("aria-expanded", "false");
                content.style.display = "none";
                if (chevron) chevron.style.transform = "rotate(0deg)";
            } else {
                // Open the accordion
                button.setAttribute("aria-expanded", "true");
                content.style.display = "block";
                if (chevron) chevron.style.transform = "rotate(180deg)";
            }
        });
    });
});