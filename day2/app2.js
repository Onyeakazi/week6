 // 1. Select the DOM elements & initialize empty array state
    const guestForm = document.querySelector('#guest-form');
    const guestInput = document.querySelector('#guest-input');
    const guestList = document.querySelector('#guest-list');
    
    let guests = [];

    // 2. Render Function (builds and updates the list in the DOM)
    function renderGuests() {
        guestList.innerHTML = ''; // Clear list to prevent duplicates
        
        guests.forEach((guest) => {
            const li = document.createElement('li');
            li.textContent = guest;
            guestList.appendChild(li);
        });
    }

    // 3. Load existing data on page refresh
    const savedGuests = localStorage.getItem('guests');
    if (savedGuests) {
        guests = JSON.parse(savedGuests); // Convert JSON string back to JS array
        renderGuests(); // Render existing list immediately
    }

    // 4. Handle adding a new item
    guestForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh
        
        const newGuest = guestInput.value;
        guests.push(newGuest); // Push to local state array
        
        // Save updated array to LocalStorage (must be converted to a string)
        localStorage.setItem('guests', JSON.stringify(guests));
        
        renderGuests(); // Update browser view
        guestInput.value = ''; // Reset input field
    });