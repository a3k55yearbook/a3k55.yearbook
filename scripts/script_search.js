const searchBar = document.querySelector('.search-bar');
const suggestionsList = document.querySelector('.suggestions');

// Replace with your actual list of recommendations
const recommendations = [
  "Home", "Members", "Gallery", "About", "Template"
];

function filterRecommendations(value) {
  const filteredList = recommendations.filter(item => item.toLowerCase().startsWith(value.toLowerCase()));
  return filteredList;
}

function displaySuggestions(suggestions) {
  suggestionsList.innerHTML = ""; // Clear previous suggestions

  if (suggestions.length > 0) {
    suggestionsList.style.display = "block"; // Show suggestions list
    suggestions.forEach(suggestion => {
      const listItem = document.createElement('li');
      listItem.innerText = suggestion;
      suggestionsList.appendChild(listItem);
    });
  } else {
    suggestionsList.style.display = "none"; // Hide suggestions list
  }
}

searchBar.addEventListener('keyup', function() {
  const value = this.value;
  const filteredSuggestions = filterRecommendations(value);
  displaySuggestions(filteredSuggestions);
});

document.addEventListener('click', function(e) {
  if (!e.target.classList.contains('search-bar') && !e.target.classList.contains('suggestions')) {
    suggestionsList.style.display = "none";
  }
});

