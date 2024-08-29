import { garageLevels } from './garage-levels-data.js';

export function filterGarageLevels(searchTerm) {
    const container = document.getElementById('garage-levels-container');
    if (!container) {
        console.error('Container element not found');
        return;
    }

    // Clear the container
    container.innerHTML = '';

    // Filter the garage levels based on the search term
    const filteredLevels = garageLevels.filter(level => 
        level.cars.some(car => car.caption.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Create and append the filtered garage levels
    filteredLevels.forEach(level => {
        const levelSection = document.createElement('section');
        levelSection.className = 'garage-levels';

        const headingDiv = document.createElement('div');
        const mainHeading = document.createElement('h2');
        mainHeading.className = 'main-heading';
        mainHeading.textContent = `Garage Level ${level.level}`;
        const subHeading = document.createElement('h3');
        subHeading.className = 'sub-heading';
        subHeading.textContent = 'Cars Available';
        headingDiv.appendChild(mainHeading);
        headingDiv.appendChild(subHeading);
        levelSection.appendChild(headingDiv);

        const carsDiv = document.createElement('div');
        carsDiv.className = 'cars';

        level.cars.forEach(car => {
            const carDiv = document.createElement('div');
            carDiv.className = 'car';

            const img = document.createElement('img');
            img.src = car.src;
            img.alt = car.alt;

            const caption = document.createElement('p');
            caption.textContent = car.caption;

            carDiv.appendChild(img);
            carDiv.appendChild(caption);
            carsDiv.appendChild(carDiv);
        });

        levelSection.appendChild(carsDiv);
        container.appendChild(levelSection);
    });
}