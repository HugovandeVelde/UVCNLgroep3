let data = "niks";
let requestedFriendsData = "";
let requestedAllFriendsData = "";

async function fetchData(table, id) {
  try {
    const response = await fetch("http://localhost:4006/friends");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    if (id !== "all") {
      getFriendsData(id - 1);
      // getRecipeData(id-1);
    } else {
      getAllFriendsData();
      //  getAllRecipeData();
    }
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}
fetchData("friends", 2);
function getRecipeData(id) {
  requestedFriendsData = data[id];
  // console.log(requestedRecipeData)
}
fetchData("recipes", "all");
function getAllFriendsData() {
  requestedAllFriendsData = data;
  console.log(requestedAllFriendsData);
}
export { requestedFriendsData };
export { requestedAllFriendsData };
