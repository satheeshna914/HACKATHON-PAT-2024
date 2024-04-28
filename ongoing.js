const programs = [
    {
    name: "Women Awareness Programme",
    description: " We educate the women about their fundamental rights and also educate women in rural and urban areas.",
    schedule: "Starts on MAY 15, 2024",
    registrationLink: "register.html?program=web-development-bootcamp",
    category: "Technology",
    multimedia: ["video-url-1", "document-url-1", "tutorial-url-1"]
    },
    {
    name: "Women Empowerment( Self-help groups)",
    description: "he organization helps the women to start small skills industries as well as provides technical support for business proposal preparation etc.to start their own businesses.",
    schedule: "Starts on JUNE 1st, 2024",
    registrationLink: "register.html?program=digital-marketing-course",
    category: "Marketing",
    multimedia: ["video-url-2", "document-url-2", "tutorial-url-2"]
    },
    // Add more program objects as needed
    ];
    
    // Function to populate program listings
    function populatePrograms() {
    const programList = document.querySelector('.program-list');
    programs.forEach(program => {
    const programItem = document.createElement('div');
    programItem.classList.add('program-item');
    
    programItem.innerHTML = `
    <h3>${program.name}</h3>
    <p>${program.description}</p>
    <p><strong>Schedule:</strong> ${program.schedule}</p>
    <a href="${program.registrationLink}" class="button">Register</a>
    `;
    
    programList.appendChild(programItem);
    });
    }
    
    // Populate program listings when the page loads
    document.addEventListener('DOMContentLoaded', populatePrograms);