// Function to dynamically load the necessary modules
async function loadModules() {
    // Dynamically import the data and search modules
    const { garageLevels } = await import('../js/garage-levels-data.js');
    // const { filterGarageLevels } = await import('../js/garage-levels-search.js');

    // Function to create the garage levels UI
    function createGarageLevels() {
        const container = document.getElementById('garage-levels-container');
        if (!container) return;

        garageLevels.forEach(level => {
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

    // Function to add the search bar functionality
    // function addSearchBar() {
    //     const searchBar = document.getElementById('search-bar');
    //     searchBar.addEventListener('input', (event) => {
    //         filterGarageLevels(event.target.value);
    //     });
    // }

    // Initialize the page by adding the search bar and creating the garage levels
    function init() {
        // addSearchBar();
        createGarageLevels();
    }

    // Wait for the DOM to be fully loaded before initializing
    if( document.readyState === 'loading' ){
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    

// Load the modules when the script is executed
}
loadModules();