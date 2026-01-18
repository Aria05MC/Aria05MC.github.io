// Initialize Icons
lucide.createIcons();

// Add a slight parallax effect to the background image on mouse move
const body = document.querySelector('body');
const bgImage = document.querySelector('img[alt="Prison Atmosphere Background"]');

body.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Move background slightly opposite to mouse
    bgImage.style.transform = `scale(1) translate(${-x * 10}px, ${-y * 10}px)`;
});

// Add hover sound effect logic (Placeholder - commented out to avoid autoplay policies)
/*
const tags = document.querySelectorAll('.prison-tag');
tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        // Play tiny click sound
    });
});
*/
const birthday = new Date('2005-08-05');

const today = new Date();
let age = today.getFullYear() - birthday.getFullYear();
const m = today.getMonth() - birthday.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
}

const birthdayFormatted = birthday.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

document.getElementById('age').innerText = age;
document.getElementById('birthday').innerText = birthdayFormatted;