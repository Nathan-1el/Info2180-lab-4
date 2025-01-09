document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search");
    const result = document.getElementById("result");
  
    searchButton.addEventListener("click", () => {
      
      const query = document.getElementById("myInput").value || ""; // Assuming there's an input field with id "country"
  
      const xhr = new XMLHttpRequest();
  
      xhr.open("GET", `superheroes.php?hero=${encodeURIComponent(query)}`, true);
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          result.innerHTML = xhr.responseText;
          //const resul = xhr.responseText;
          //alert(result);
        } else {
          
          result.innerHTML = `Error: ${xhr.status} - ${xhr.statusText}`;
        }
      };
  
      xhr.onerror = function () {
        result.innerHTML = "An error occurred while fetching the data.";
      };
  
      xhr.send();
    });


  });
  