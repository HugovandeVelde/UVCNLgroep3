let data = "niks";
let requestedRequestsData = "";
let requestedAllRequestsData = [];
async function fetchData(table, id) {
  try {
    const response = await fetch("http://localhost:4003/" + table);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // data = await response.json();

    // Verwerk de ontvangen data
    if(id !=='all'){
        getRequestsData(id-1);
        // getRequestData(id-1);
    } else {
         getAllRequestsData()
        //  getAllRequestData();
    }
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}
// fetchData('friendRequests', 1);
function getRequestsData(id) {
  requestedRequestsData = data[id];
}
// fetchData('friendRequests', 'all');  
function getAllRequestsData(){
  requestedAllRequestsData = response.json();
  return requestedAllRequestsData;
}

async function simpleTest () {
  const table = 'completeFriendRequests';
  const response = await fetch("http://localhost:4003/" + table);
  const parsed = response.json();
  return parsed;
}

// export{ requestedRequestsData };
// export{ getAllRequestsData };
export { simpleTest };