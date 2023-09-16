document.addEventListener("DOMContentLoaded", function() {

    // Get current year
    const currentYear = new Date()
    const year = currentYear.getFullYear();
    document.querySelector('#year').textContent = year;

    // Get the ddte and time the document was last modified
    const lastModifDate = document.lastModified;
    document.querySelector('#lastModified span').textContent = lastModifDate;
    
}); 