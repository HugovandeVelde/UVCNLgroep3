let data = "niks";
let requestedData = "";
let requestedAllData = "";
let requestedRecipeData = "";
let requestedAllRecipeData = "";

async function fetchData(id) {
  try {
    const response = await fetch("http://localhost:4005/recipes");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    if(id !=='all'){
        getRecipeData(id-1);
        // getRecipeData(id-1);
    } else {
         getAllRecipeData()
        //  getAllRecipeData();
    }
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}
fetchData(2);
function getRecipeData(id) {
  requestedRecipeData = data[id];
  // console.log(requestedRecipeData)
}
fetchData('all');
function getAllRecipeData(){
  requestedAllRecipeData = data ;
    // console.log(requestedAllRecipeData)
}
export{ requestedRecipeData };
export{ requestedAllRecipeData };


