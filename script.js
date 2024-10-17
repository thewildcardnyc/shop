    document.addEventListener('DOMContentLoaded', function () {
        const menuButton = document.querySelector('.top-links button');
        const dropdown = document.querySelector('.dropdown');

        menuButton.addEventListener('click', function () {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Close the dropdown if clicking outside of it
        window.addEventListener('click', function (event) {
            if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });
    });
