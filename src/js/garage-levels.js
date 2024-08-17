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
    {
        level: 5,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/jaguar-f-type-svr.jpg', alt:'Jaguar F-Type SVR', caption: 'Jaguar F-Type SVR' },
            { src: '../assets/images/car-photos/aston-martin-db11.jpg', alt: 'Aston Martin DB11', caption: 'Aston Martin DB11' },
            { src: '../assets/images/car-photos/lotus-elise-sprint-220.jpg', alt: 'Lotus Elise Sprint 220', caption: 'Lotus Elise Sprint 220' },
            { src: '../assets/images/car-photos/tvr-griffith.jpg', alt: 'TVR Griffith', caption: 'TVR Griffith' }
        ]
    },
    {
        level: 6,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/bmw-m4-gts.jpg', alt:'BMW M4 GTS', caption: 'BMW M4 GTS' },
            { src: '../assets/images/car-photos/exotic-rides-w70.jpg', alt: 'Exotic Rides W70', caption: 'Exotic Rides W70' },
            { src: '../assets/images/car-photos/ford-shelby gt350r.jpg', alt: 'Ford Shelby GT350R', caption: 'Ford Shelby GT350R' },
            { src: '../assets/images/car-photos/mazda-furai.jpg', alt: 'Mazda Furai', caption: 'Mazda Furai' }
        ]
    },
    {
        level: 7,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/aston-martin-vulcan.jpg', alt:'Aston Martin Vulcan', caption: 'Aston Martin Vulcan' },
            { src: '../assets/images/car-photos/dodge-viper-acr.jpg', alt: 'Dodge Viper ACR', caption: 'Dodge Viper ACR' },
            { src: '../assets/images/car-photos/ford-gt.jpg', alt: 'Ford GT', caption: 'Ford GT' },
            { src: '../assets/images/car-photos/artega-scalo-superelletra.jpg', alt: 'Artega Scalo Superelletra', caption: 'Artega Scalo Superelletra' }
        ]
    },
    {
        level: 8,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/ferrari-488-gtb.jpg', alt:'Ferrari 488 GTB', caption: 'Ferrari 488 GTB' },
            { src: '../assets/images/car-photos/pininfarina-h2-speed.jpg', alt: 'Pininfarina H2 Speed', caption: 'Pininfarina H2 Speed' },
            { src: '../assets/images/car-photos/nissan-gt-r-nismo.jpg', alt: 'Nissan GT-R Nismo', caption: 'Nissan GT-R Nismo' },
            { src: '../assets/images/car-photos/italdesign-zerouno.jpg', alt: 'Italdesign Zerouno', caption: 'Italdesign Zerouno' }
        ]
    },
    {
        level: 9,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/dodge-viper-gts.jpg', alt:'Dodge Viper GTS', caption: 'Dodge Viper GTS' },
            { src: '../assets/images/car-photos/ferrari-j50.jpg', alt: 'Ferrari J50', caption: 'Ferrari J50' }
        ]
    },
    {
        level: 10,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/ferrari-laferrari.jpg', alt:'Ferrari LaFerrari', caption: 'Ferrari LaFerrari' },
            { src: '../assets/images/car-photos/2017-acura-nsx.jpg', alt: '2017 Acura NSX', caption: '2017 Acura NSX' },
            { src: '../assets/images/car-photos/glickenhaus-003s.jpg', alt: 'Glickenhaus 003S', caption: 'Glickenhaus 003S' }
        ]
    },
    {
        level: 11,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/lamborghini-centenario.jpg', alt:'Lamborghini Centenario', caption: 'Lamborghini Centenario' },
            { src: '../assets/images/car-photos/maserati-alfieri.jpg', alt: 'Maserati Alfieri', caption: 'Maserati Alfieri' },
            { src: '../assets/images/car-photos/vencer-sarthe.jpg', alt: 'Vencer Sarthe', caption: 'Vencer Sarthe' }
        ]
    },
    {
        level: 12,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/ferrari-fxx-k.jpg', alt:'Ferrari FXX K', caption: 'Ferrari FXX K' },
            { src: '../assets/images/car-photos/lamborghini-aventador-sv-coupe.jpg', alt: 'Lamborghini Aventador SV Coupe', caption: 'Lamborghini Aventador SV Coupe' },
            { src: '../assets/images/car-photos/mclaren-p1.jpg', alt: 'McClaren P1', caption: 'McClaren P1' }
        ]
    },
    {
        level: 13,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/chevrolet-corvette-grand-sport.jpg', alt:'Chevrolet Corvette Grand Sport', caption: 'Chevrolet Corvette Grand Sport' },
            { src: '../assets/images/car-photos/ferrari-f12tdf.jpg', alt: 'Ferrari F12tdf', caption: 'Ferrari F12tdf' },
            { src: '../assets/images/car-photos/icona-vulcano-titanium.jpg', alt: 'Icona Vulcano Titanium', caption: 'Icona Vulcano Titanium' }
        ]
    },
    {
        level: 14,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/porsche-918-spyder.jpg', alt:'Porsche 918 Spyder', caption: 'Porsche 918 Spyder' },
            { src: '../assets/images/car-photos/apollo-n.jpg', alt: 'Apollo N', caption: 'Apollo N' },
            { src: '../assets/images/car-photos/arrinera-hussarya-33.jpg', alt: 'Arrinera Hussarya 33', caption: 'Arrinera Hussarya 33' }
        ]
    },
    {
        level: 15,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/lamborghini-aventador-j.jpg', alt:'Lamborghini Aventador J', caption: 'Lamborghini Aventador J' },
            { src: '../assets/images/car-photos/aston-martin-vantage-gt12.jpg', alt: 'Aston Martin Vantage GT12', caption: 'Aston Martin Vantage GT12' }
        ]
    },
    {
        level: 16,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/w-motors-lykan-hypersport.jpg', alt:'W Motors Lykan Hypersport', caption: 'W Motors Lykan Hypersport' },
            { src: '../assets/images/car-photos/aston-martin-dbs-superlleggera.jpg', alt: 'Aston Martin DBS Superlleggera', caption: 'Aston Martin DBS Superlleggera' }
        ]
    },
    {
        level: 17,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/mcclaren-570s-spider.jpg', alt:'McLaren 570S Spider', caption: 'McLaren 570S Spider' },
            { src: '../assets/images/car-photos/vanda-electrics-dendrobium.jpg', alt: 'Vanda Electrics Dendrobium', caption: 'Vanda Electrics Dendrobium' }
        ]
    },
    {
        level: 18,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/koenigsegg-regera.jpg', alt:'Koenigsegg Regera', caption: 'Koenigsegg Regera' },
            { src: '../assets/images/car-photos/lamborghini-huracan-evo-spider.jpg', alt: 'Lamborghini Huracán Evo Spider', caption: 'Lamborghini Huracán Evo Spider' }
        ]
    },
    {
        level: 19,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/pagani-huayra-bc.jpg', alt:'Pagani Huayra BC', caption: 'Pagani Huayra BC' },
            { src: '../assets/images/car-photos/ferrari-laferrari-aperta.jpg', alt: 'Ferrari LaFerrari Aperta', caption: 'Ferrari LaFerrari Aperta' }
        ]
    },
    {
        level: 20,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/bugatti-chiron.jpg', alt:'Bugatti Chiron', caption: 'Bugatti Chiron' },
            { src: '../assets/images/car-photos/genty-akylone.jpg', alt: 'Genty Akylone', caption: 'Genty Akylone' }
        ]
    },
    {
        level: 21,
        xpRequired: '3,400,000',
        cars: [
            { src: '../assets/images/car-photos/infiniti-project-black-s.jpg', alt:'Infiniti Project Black S', caption: 'Infiniti Project Black S' },
            { src: '../assets/images/car-photos/lamborghini-countach-25th-anniv.jpg', alt: 'Lamborghini Countach 25th Anniversary', caption: 'Lamborghini Countach 25th Anniv.' }
        ]
    },
    {
        level: 22,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/ferrari-roma.jpg', alt:'Ferrari Roma', caption: 'Ferrari Roma' },
            { src: '../assets/images/car-photos/lotus-emira.jpg', alt: 'Lotus Emira', caption: 'Lotus Emira' }
        ]
    },
    {
        level: 23,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/bmw-i8-roadster.jpg', alt:'BMW i8 Roadster', caption: 'BMW i8 Roadster' },
            { src: '../assets/images/car-photos/renault-dezir.jpg', alt: 'Renault Dezir', caption: 'Renault Dezir' }
        ]
    },
    {
        level: 24,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/porsche-taycan-turbo-s.jpg', alt:'Porsche Taycan Turbo S', caption: 'Porsche Taycan Turbo S' },
            { src: '../assets/images/car-photos/saleen-s1.jpg', alt: 'Saleen S1', caption: 'Saleen S1' }
        ]
    },
    {
        level: 25,
        xpRequired: '700,000',
        cars: [
            { src: '../assets/images/car-photos/chevrolet-corvette-stingray.jpg', alt:'Chevrolet Corvette Stingray', caption: 'Chevrolet Corvette Stingray' },
            { src: '../assets/images/car-photos/drako-gte.jpg', alt: 'Drako GTE', caption: 'Drako GTE' }
        ]
    },
    {
        level: 26,
        xpRequired: '800,000',
        cars: [
            { src: '../assets/images/car-photos/mcclaren-elva.jpg', alt:'McClaren Elva', caption: 'McClaren Elva' },
            { src: '../assets/images/car-photos/lamborghini-diablo-gt.jpg', alt: 'Lamborghini Diablo GT', caption: 'Lamborghini Diablo GT' }
        ]
    },
    {
        level: 27,
        xpRequired: '900,000',
        cars: [
            { src: '../assets/images/car-photos/sin-r1-550.jpg', alt:'Sin R1 550', caption: 'Sin R1 550' },
            { src: '../assets/images/car-photos/lamborghini-murcielago-lp-640-roadster.jpg', alt: 'Lambo Murciélago LP 640 Roadster', caption: 'Lambo Murciélago LP 640 Roadster' }
        ]
    },
    {
        level: 28,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/ferrari-812-superfast.jpg', alt:'Ferrari 812 Superfast', caption: 'Ferrari 812 Superfast' },
            { src: '../assets/images/car-photos/apex-ap-0.jpg', alt: 'Apex AP-0', caption: 'Apex AP-0' }
        ]
    },
    {
        level: 29,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/aston-martin-one77.jpg', alt:'Aston Martin One77', caption: 'Aston Martin One77' },
            { src: '../assets/images/car-photos/mcclaren-senna-gtr.jpg', alt: 'McClaren Senna GTR', caption: 'McClaren Senna GTR' }
        ]
    },
    {
        level: 30,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/porsche-911-gt3-rs.jpg', alt:'Porsche 911 GT3 RS', caption: 'Porsche 911 GT3 RS' },
            { src: '../assets/images/car-photos/nissan-gtr-50-italdesign.jpg', alt: 'Nissan GTR-50 Italdesign', caption: 'Nissan GTR-50 Italdesign' }
        ]
    },
    {
        level: 31,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/', alt:'', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' }
        ]
    },
    {
        level: 32,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/', alt:'', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' }
        ]
    },
    {
        level: 33,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/', alt:'', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' }
        ]
    },
    {
        level: 34,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/', alt:'', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' }
        ]
    },
    {
        level: 35,
        xpRequired: 'placeholder',
        cars: [
            { src: '../assets/images/car-photos/', alt:'', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' },
            { src: '../assets/images/car-photos/', alt: '', caption: '' }
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
