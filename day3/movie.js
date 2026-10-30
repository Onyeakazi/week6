// --- 1. STATE & DOM SELECTORS ---
const uiElements = {
    searchBtn: document.getElementById('search-btn'),
    movieInput: document.getElementById('movie-input'),
    resultGrid: document.getElementById('grid')
};

let API = "a7e3d100";

// --- 2. NETWORK LOGIC (Single Responsibility) ---
async function fetchMovieData(query) {
    // A robust function that ONLY fetches data and handles network errors
    const res = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=${API}`);
    if (!res.ok) throw new Error("API Connection Failed");
    return await res.json();
}

// --- 3. UI RENDERING LOGIC ---
function renderMovie(movieObj) {
    // Check if API returned an error response
    if (movieObj.Response === "False") {
        uiElements.resultGrid.innerHTML = `
            <div class="error-banner">
                ⚠️ ${movieObj.Error || "Movie not found. Please try another search."}
            </div>
        `;
        return;
    }
    
    // Fallback poster image if none provided
    const posterUrl = (movieObj.Poster && movieObj.Poster !== "N/A") 
        ? movieObj.Poster 
        : "https://via.placeholder.com/300x450?text=No+Poster";

    // Inject styled movie card markup using Template Literals
    uiElements.resultGrid.innerHTML = `
        <div class="movie-card">
            <img src="${posterUrl}" alt="${movieObj.Title} Poster" />
            <div class="movie-card-body">
                ${movieObj.Genre || 'Movie'} • ${movieObj.Year}
                <h3>${movieObj.Title}</h3>
                <p>${movieObj.Plot}</p>
            </div>
        </div>
    `;
}

// --- 4. CONTROLLER LOGIC (Connecting UI to Network) ---
uiElements.searchBtn.addEventListener('click', async () => {
    const query = uiElements.movieInput.value.trim();
    if (!query) return; // Prevent empty searches
    
    // Provide UX loading feedback
    uiElements.resultGrid.innerHTML = `<div class="loading-text">⏳ Fetching movie details from server...</div>`;
    
    try {
        const data = await fetchMovieData(query); // Wait for network
        renderMovie(data); // Send to UI renderer
    } catch(err) {
        console.error(err);
        uiElements.resultGrid.innerHTML = `
            <div class="error-banner">
                🚨 Critical Network Failure: Unable to communicate with the server.
            </div>
        `;
    }
});