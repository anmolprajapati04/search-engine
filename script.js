document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");
    const searchHistoryList = document.getElementById("searchHistory");
  
   
    function loadSearchHistory() {
      const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
      searchHistoryList.innerHTML = "";
      searchHistory.forEach(term => {
        const listItem = document.createElement("li");
        listItem.textContent = term;
        searchHistoryList.appendChild(listItem);
      });
    }
  
  
    function addSearchTerm(term) {
      let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
      searchHistory.push(term);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      loadSearchHistory();
    }
  
   
    searchBtn.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        addSearchTerm(searchTerm);
        searchInput.value = "";
      }
    });
  

    clearBtn.addEventListener("click", function () {
      localStorage.removeItem("searchHistory");
      loadSearchHistory();
    });
  
    
    loadSearchHistory();
  });
  