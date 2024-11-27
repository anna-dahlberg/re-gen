document.querySelectorAll('.moreInfoButtonDesktop').forEach(button => {
    button.addEventListener('click', () => {
        // Show the dropOutContainer
        const dropOutContainer = document.querySelector('.dropOutContainer');
        dropOutContainer.style.display = 'flex'; // Or 'flex', depending on your layout

        // Hide the moreInfoButtonDesktop
        button.style.display = 'none';

        // Adjust the productCardContainer gap
        const productCardContainer = document.querySelector('.productCardContainer');
        if (productCardContainer) {
            productCardContainer.style.gap = '0';
        }
    });
});

// Add event listener for the close button to undo the changes
document.querySelector('.closeDropOutButton').addEventListener('click', () => {
    // Hide the dropOutContainer
    const dropOutContainer = document.querySelector('.dropOutContainer');
    dropOutContainer.style.display = 'none';

    // Show the moreInfoButtonDesktop again
    const moreInfoButtonDesktop = document.querySelector('.moreInfoButtonDesktop');
    if (moreInfoButtonDesktop) {
        moreInfoButtonDesktop.style.display = 'block'; // Or 'block', depending on your layout
    }

    // Reset the productCardContainer gap
    const productCardContainer = document.querySelector('.productCardContainer');
    if (productCardContainer) {
        productCardContainer.style.gap = ''; // Reset the gap to its default value
    }
});
