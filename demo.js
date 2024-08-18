// Function to toggle the visibility of the search bar
function toggleSearch() {
  var searchContainer = document.getElementById("searchContainer");
  if (searchContainer.style.display === "none") {
    searchContainer.style.display = "block";
  } else {
    searchContainer.style.display = "none";
  }
}

// Function to perform the search (you can customize this function)
function search() {
  var searchTerm = document.getElementById("searchInput").value;
  var searchResults = document.getElementById("searchResults");

  // Perform actions based on the search term, like fetching data or displaying results
  // For demonstration, we'll just display the search term in a div
  searchResults.innerHTML = "<p>Search Results for: " + searchTerm + "</p>";
}
