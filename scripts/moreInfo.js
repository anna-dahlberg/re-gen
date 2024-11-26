document.querySelectorAll('.moreInfoButton').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.productCardTextContainer');  // Get the closest card container
        const dropdown = container.querySelector('.dropdownContent');  // The dropdown content
        const buttonContainer = container.querySelector('.productButtonContainer');  // The button container
        const sectionArrow = document.querySelector('.productCardSectionArrow');  // The arrow image in the header
        const closeMoreInfoButton = document.querySelector('.closeMoreInfo');  // The "Close More Info" button in the header

        // Show the dropdown content
        dropdown.classList.add('active');

        // Hide the "More Info" button
        button.style.display = 'none';

        // Hide the arrow image
        if (sectionArrow) sectionArrow.style.display = 'none';

        // Show the "Close More Info" button
        if (closeMoreInfoButton) closeMoreInfoButton.style.display = 'inline-block';

        // Adjust button container layout
        buttonContainer.style.flexDirection = 'column';
        buttonContainer.style.gap = '32px';
    });
});

// Add event listeners for the "Close More Info" button
document.querySelector('.closeMoreInfo').addEventListener('click', () => {
    // Find all active dropdowns
    document.querySelectorAll('.dropdownContent.active').forEach(dropdown => {
        dropdown.classList.remove('active'); // Hide the dropdown
    });

    // Find all "More Info" buttons and show them
    document.querySelectorAll('.moreInfoButton').forEach(button => {
        button.style.display = 'inline-block';  // Show the "More Info" button
    });

    // Show the arrow image
    const sectionArrow = document.querySelector('.productCardSectionArrow');
    if (sectionArrow) sectionArrow.style.display = 'block';

    // Hide the "Close More Info" button
    const closeMoreInfoButton = document.querySelector('.closeMoreInfo');
    if (closeMoreInfoButton) closeMoreInfoButton.style.display = 'none';

    // Reset button container layout
    document.querySelectorAll('.productButtonContainer').forEach(buttonContainer => {
        buttonContainer.style.flexDirection = '';
        buttonContainer.style.gap = '';
    });
});
