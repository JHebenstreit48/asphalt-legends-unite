import { garageLevels } from './garage-levels-data.js';
import { filterGarageLevels } from './garage-levels-search.js';

function createGarageLevels() {
    // Get the container where the garage levels will be appended
    var container = document.getElementById('garage-levels-container');
    if (!container) {
        console.error('Container element not found');
        return;
    }
    // Iterate through each garage level
    garageLevels.forEach(function (level) {
        // Create a section for the garage level
        var levelSection = document.createElement('section');
        levelSection.className = 'garage-levels';
        // Create a div for the level heading
        var headingDiv = document.createElement('div');
        var mainHeading = document.createElement('h2');
        mainHeading.className = 'main-heading';
        mainHeading.textContent = "Garage Level ".concat(level.level);
        var subHeading = document.createElement('h3');
        subHeading.className = 'sub-heading';
        subHeading.textContent = 'Cars Available';
        headingDiv.appendChild(mainHeading);
        headingDiv.appendChild(subHeading);
        // Create a div for the XP requirement
        var xpDiv = document.createElement('div');
        xpDiv.className = 'xp';
        var xpTitle = document.createElement('h3');
        xpTitle.className = 'xp-title';
        xpTitle.innerHTML = "<span>XP Required</span><span class=\"xp-requirement\">".concat(level.xpRequired, "</span>");
        xpDiv.appendChild(xpTitle);
        // Create a section for the car images
        var carImagesContainer = document.createElement('section');
        carImagesContainer.className = 'car-images-container';
        // Iterate through each car in the level
        level.cars.forEach(function (car) {
            var carDiv = document.createElement('div');
            var carImage = document.createElement('img');
            carImage.src = car.src;
            carImage.alt = car.alt;
            carImage.className = 'car-images';
            var carCaption = document.createElement('p');
            carCaption.className = 'car-images-caption';
            carCaption.textContent = car.caption;
            carDiv.appendChild(carImage);
            carDiv.appendChild(carCaption);
            carImagesContainer.appendChild(carDiv);
        });
        // Append the level heading, XP requirement, and car images to the level section
        levelSection.appendChild(headingDiv);
        levelSection.appendChild(xpDiv);
        levelSection.appendChild(carImagesContainer);
        // Append the level section to the container
        container.appendChild(levelSection);
    });
}

function addSearchBar() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (event) => {
        filterGarageLevels(event.target.value);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Call the function to create the garage level sections
    createGarageLevels();
    addSearchBar();
});
