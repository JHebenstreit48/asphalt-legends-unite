// Define an array of garage levels with their respective cars
const garageLevels = [
    {
        level: 1,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/bmw-z4.jpg', alt: 'BMW Z4', caption: 'BMW Z4 LCI E89' },
            { src: '../assets/images/car-photos/camaro-lt.jpg', alt: 'Chevrolet Camaro LT', caption: 'Chevrolet Camaro LT' },
            { src: '../assets/images/car-photos/mitsubishi-lancer.jpg', alt: 'Mitsubishi Lancer Evolution', caption: 'Mitsubishi Lancer Evolution' },
            { src: '../assets/images/car-photos/dodge-challenger-srt8.jpg', alt: 'Dodge Challenger SRT8', caption: 'Dodge Challenger SRT8' }
        ]
    },
    {
        level: 2,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/bmw-3-csl.jpg', alt:'BMW 3.0 CSL Hommage', caption: 'BMW 3.0 CSL Hommage' },
            { src: '../assets/images/car-photos/camaro-zl1-50th.jpg', alt: 'Chevrolet Camaro ZL1 50TH Ed.', caption: 'Chevrolet Camaro ZL1 50TH Ed.' },
            { src: '../assets/images/car-photos/nissan-370z-nismo.jpg', alt: 'Nissan 370z Nismo', caption: 'Nissan 370z Nismo' },
            { src: '../assets/images/car-photos/ds-e-tense.jpg', alt: 'DS E-Tense', caption: 'DS E-Tense' }
        ]
    },
    {
        level: 3,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/dodge-challenger-392-hemi-scat.jpg', alt:'Dodge Challenger 392 Hemi Scat Pack', caption: 'Dodge Challenger 392 Hemi Scat Pk.' },
            { src: '../assets/images/car-photos/volkswagen-xl-sport-concept.jpg', alt: 'Volkswagen XL Sport Concept', caption: 'Volkswagen XL Sport Concept' },
            { src: '../assets/images/car-photos/lotus-evora-sport-410.jpg', alt: 'Lotus Evora Sport 410', caption: 'Lotus Evora Sport 410' },
            { src: '../assets/images/car-photos/porsche-911-targa-4s.jpg', alt: 'Porsche 911 Targa 4S', caption: 'Porsche 911 Targa 4S' }
        ]
    },
    {
        level: 4,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/mercedes-benz-amg-gt-s.jpg', alt:'Mercedes-Benz AMG GT S', caption: 'Mercedes-Benz AMG GT S' },
            { src: '../assets/images/car-photos/porsche-718-cayman.jpg', alt: 'Porsche 718 Cayman', caption: 'Porsche 718 Cayman' },
            { src: '../assets/images/car-photos/porsche-911-gts-coupe.jpg', alt: 'Porsche 911 GTS Coupé', caption: 'Porsche 911 GTS Coupé' },
            { src: '../assets/images/car-photos/ginetta-g60.jpg', alt: 'Ginetta G60', caption: 'Ginetta G60' }
        ]
    },
    // Add more garage levels as needed
];
// Function to create the garage level sections
function createGarageLevels() {
    // Get the container where the garage levels will be appended
    var container = document.getElementById('garage-levels-container');
    if (!container)
        return;
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
        xpTitle.innerHTML = "XP Required<span class=\"xp-requirement\">".concat(level.xpRequired, "</span>");
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
// Call the function to create the garage level sections
createGarageLevels();
