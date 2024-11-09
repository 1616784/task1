function showCars() {
    const carsSection = document.getElementById('cars');
    const contactSection = document.getElementById('contact');
    
    carsSection.style.display = 'block';
    contactSection.style.display = 'none';
}

function showContact() {
    const carsSection = document.getElementById('cars');
    const contactSection = document.getElementById('contact');
    
    carsSection.style.display = 'none';
    contactSection.style.display = 'block';
}
