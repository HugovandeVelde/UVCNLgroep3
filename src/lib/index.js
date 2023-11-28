let data = "niks";
let thing = "";
async function fetchData(id) {
  try {
    const response = await fetch("http://localhost:4000/recipes");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    if(id === !'all'){
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
fetchData('all');
function getUserData(id) {
  console.log(data[id]);
}
function getAllUserData(){
    console.log(data)
}

