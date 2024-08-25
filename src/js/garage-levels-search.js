export function filterGarageLevels(searchTerm) {

    const sections = document.querySelectorAll('.garage-levels');

    sections.forEach(section => {

        const cars = section.querySelectorAll('.car');

        let sectionVisible = false;

        cars.forEach(car => {

            const caption = car.querySelector('p').textContent.toLowerCase();
            
            if (caption.includes(searchTerm.toLowerCase())) {
                car.style.display = 'block';
                sectionVisible = true;
            } else {
                car.style.display = 'none';
            }
        });

        section.style.display = sectionVisible ? 'block' : 'none';
    });
}