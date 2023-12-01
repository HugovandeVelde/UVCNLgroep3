let data = "niks";
let requestedData = "";
let requestedAllData = "";
let requestedRecipeData = "";
let requestedAllRecipeData = "";
async function fetchData(table, id) {
  try {
    const response = await fetch("http://localhost:4001/" + table);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    if(id !=='all'){
        getUserData(id-1);
    } else {
         getAllUserData()
    }
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}
// Roep de functie aan
fetchData('users', 2);
function getUserData(id) {
  requestedData = data[id];
  // console.log(requestedData)
}
fetchData('users', 'all');
function getAllUserData(){
  requestedAllData = data ;
    console.log(requestedAllData)
}
export{ requestedData };
export{ requestedAllData };



