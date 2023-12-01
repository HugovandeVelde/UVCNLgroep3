let data = "niks";
let requestedData = "";
async function fetchData(id, table) {
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
fetchData(2, 'recipes');
function getUserData(id) {
  requestedData = data[id];
  console.log(requestedData)
}
function getAllUserData(){
  requestedData = data ;
    console.log(requestedData)
}
export{ requestedData };

